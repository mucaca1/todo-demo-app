import { Box, Paper, Typography } from "@mui/material";
import { Label as LabelIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useQueries } from "@evolu/react";
import { TagEditor } from "./TagEditor";
import { allTags } from "../../evolu/evolu-query";
import { TAllTagsRow } from "../../evolu/evolu-query";
import { Tag, TagId } from "../../types/tag";

export function TagsSettings() {
    const { t } = useTranslation();

    // Query all tags from Evolu
    const [tagRows] = useQueries([allTags]);

    // Transform query results to Tag objects
    const tags: Tag[] = tagRows.map((row: TAllTagsRow) => ({
        id: row.id as TagId,
        name: row.name as string,
        color: row.color as string,
    }));

    return (
        <Paper sx={{ p: 3, mb: 3 }} elevation={0} variant="outlined">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <LabelIcon color="primary" />
                <Typography variant="h6">{t("tags.title")}</Typography>
            </Box>
            <TagEditor tags={tags} />
        </Paper>
    );
}
