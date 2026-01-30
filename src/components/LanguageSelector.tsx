import { MenuItem, OutlinedInput, Select } from "@mui/material";

export type Language = "en" | "sk";

const languageLabels: Record<Language, string> = {
    en: "English (EN)",
    sk: "Slovensky (SK)",
};

export function LanguageSelector({
    value,
    onChange,
}: {
    value: Language;
    onChange: (value: Language) => void;
}) {
    return (
        <Select
            value={value}
            onChange={(e) => onChange(e.target.value as Language)}
            input={<OutlinedInput />}
            size="small"
            sx={{ maxWidth: 220 }}
            fullWidth
        >
            {Object.entries(languageLabels).map(([key, label]) => (
                <MenuItem key={key} value={key}>
                    {label}
                </MenuItem>
            ))}
        </Select>
    );
}
