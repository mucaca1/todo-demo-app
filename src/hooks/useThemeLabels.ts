import { useTranslation } from "react-i18next";
import { ThemeMode } from "../themes";

export function useThemeLabels(): Record<ThemeMode, string> {
    const { t } = useTranslation();

    return {
        light: t("theme.light"),
        dark: t("theme.dark"),
    };
}
