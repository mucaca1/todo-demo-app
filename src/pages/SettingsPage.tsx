import { useContext, useEffect, useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Button,
    Stack,
    OutlinedInput,
    Select,
    MenuItem,
    Paper,
    Container,
    Tabs,
    useMediaQuery,
    Tab,
} from "@mui/material";
import {
    Lock as LockIcon,
    Settings as SettingsIcon,
    Storage as StorageIcon,
    Key as KeyIcon,
    Warning as WarningIcon,
    Download as DownloadIcon,
    GroupAdd as GroupAddIcon,
    Restore as RestoreIcon,
    DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { SecretReadOnlyField } from "../components/SecretReadOnlyField";
import { AppOwner, Mnemonic, QueryRows, createSharedOwner, createOwnerSecret, createRandomBytes } from "@evolu/common";
import { SettingRow } from "../components/FieldRow";
import { Language, LanguageSelector } from "../components/LanguageSelector";
import { ThemeContext } from "../context/ThemeContext";
import { useThemeLabels } from "../hooks/useThemeLabels";
import { useEvolu } from "../evolu-init";
import { SettingsId } from "../evolu-db/evolu-db";
import { GeneralSettings } from "../components/settings/GeneralSettings";
import { PrivateZone } from "../components/settings/PrivateZone";

export type ISettingsArgs = {
    settingRows: QueryRows
}

// =============================================================================
// Tab Panel Component
// =============================================================================

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
    if (value !== index) return null;

    return (
        <Box
            role="tabpanel"
            id={`settings-tabpanel-${index}`}
            aria-labelledby={`settings-tab-${index}`}
            sx={{ py: 3 }}
        >
            {children}
        </Box>
    );
};

// =============================================================================
// Tab Configuration
// =============================================================================

interface TabConfig {
    label: string;
    icon: React.ReactElement;
    component: React.ReactNode;
}

export function SettingsPage({ settingRows }: ISettingsArgs) {
    const { t } = useTranslation();
    const evolu = useEvolu();

    const [activeTab, setActiveTab] = useState(0);

    const tabs: TabConfig[] = [
        {
            label: t("settings.general"),
            icon: <SettingsIcon />,
            component: <GeneralSettings settingRows={settingRows} />,
        },
        {
            label: t("settings.privateZone"),
            icon: <LockIcon />,
            component: <PrivateZone />,
        },
    ];

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
    return (
        <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          {t("settings.title")}
        </Typography>
      </Box>

      {/* Tabs Container */}
      <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
        {/* Tabs Header */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.default",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="settings tabs"
            sx={{
              "& .MuiTab-root": {
                minHeight: 64,
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon}
                iconPosition="start"
                label={tab.label}
                id={`settings-tab-${index}`}
                aria-controls={`settings-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <TabPanel value={activeTab} index={activeTab}>
            {tabs[activeTab]?.component}
          </TabPanel>
        </Box>
      </Paper>
    </Container>
    );
}
