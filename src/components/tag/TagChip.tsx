import { Chip, Box } from "@mui/material";
import { TagId } from "../../types/tag";

interface TagChipProps {
    id: TagId;
    name: string;
    color: string;
    onDelete?: (id: TagId) => void;
    onClick?: (id: TagId) => void;
    size?: "small" | "medium";
    variant?: "filled" | "outlined";
}

export function TagChip({
    id,
    name,
    color,
    onDelete,
    onClick,
    size = "small",
    variant = "filled",
}: TagChipProps) {
    const handleDelete = onDelete
        ? () => onDelete(id)
        : undefined;

    const handleClick = onClick
        ? () => onClick(id)
        : undefined;

    // Determine text color based on background luminance for readability
    const getTextColor = (bgColor: string): string => {
        // Remove # if present
        const hex = bgColor.replace("#", "");
        // Parse RGB values
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        // Calculate relative luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? "#000000" : "#ffffff";
    };

    return (
        <Box sx={{ display: "inline-flex" }}>
            <Chip
                label={name}
                size={size}
                variant={variant}
                onDelete={handleDelete}
                onClick={handleClick}
                sx={{
                    backgroundColor: variant === "filled" ? color : "transparent",
                    color: variant === "filled" ? getTextColor(color) : color,
                    borderColor: color,
                    fontWeight: 500,
                    "& .MuiChip-deleteIcon": {
                        color: variant === "filled" ? getTextColor(color) : color,
                        "&:hover": {
                            opacity: 0.7,
                        },
                    },
                    "&:hover": {
                        opacity: 0.9,
                    },
                    cursor: onClick ? "pointer" : "default",
                }}
            />
        </Box>
    );
}
