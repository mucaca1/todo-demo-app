import React, { useState } from "react";
import { Autocomplete, Chip, Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Tag, TagId } from "../../types/tag";

interface TagSelectorProps {
    allTags: Tag[];
    selectedTagIds: TagId[];
    onChange: (tagIds: TagId[]) => void;
    disabled?: boolean;
}

export function TagSelector({
    allTags,
    selectedTagIds,
    onChange,
    disabled = false,
}: TagSelectorProps) {
    const { t } = useTranslation();

    // Convert selected IDs to Tag objects
    const selectedTags = allTags.filter((tag) =>
        selectedTagIds.includes(tag.id)
    );

    const handleChange = (_event: React.SyntheticEvent, newValue: Tag[]) => {
        onChange(newValue.map((tag) => tag.id));
    };

    return (
        <Autocomplete
            multiple
            options={allTags}
            value={selectedTags}
            onChange={handleChange}
            disabled={disabled}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                    const tagProps = getTagProps({ index });
                    return (
                        <Chip
                            {...tagProps}
                            key={option.id}
                            label={option.name}
                            size="small"
                            sx={{
                                backgroundColor: option.color,
                                color: getContrastColor(option.color),
                                fontWeight: 500,
                                "& .MuiChip-deleteIcon": {
                                    color: getContrastColor(option.color),
                                },
                            }}
                        />
                    );
                })
            }
            renderOption={(props, option) => {
                const { key, ...otherProps } = props as any;
                return (
                    <li key={option.id} {...otherProps}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    backgroundColor: option.color,
                                }}
                            />
                            {option.name}
                        </Box>
                    </li>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={t("tags.selectTags")}
                    placeholder={allTags.length === 0 ? t("tags.noTags") : ""}
                />
            )}
            noOptionsText={t("tags.noTags")}
        />
    );
}

/**
 * Calculate contrast color for text on colored background
 */
function getContrastColor(hexColor: string): string {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
}
