import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from "react-i18next";

interface SecretFieldOptions {
    fieldName: string,
    loading: boolean
    secretValue: string,
    canBeShowed?: boolean,
    showCopyButton?: boolean
}

export function SecretReadOnlyField({ fieldName, loading, secretValue, canBeShowed = true, showCopyButton = true }: SecretFieldOptions) {
    const [showSecret, setShowSecret] = useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <FormControl variant="outlined" fullWidth disabled={loading}>
            <InputLabel htmlFor="secret-context-content">{fieldName}</InputLabel>
            <OutlinedInput
                value={showSecret ? secretValue : t('secret.hiddenPlaceholder')}
                id="secret-context-content"
                type={"text"}
                disabled={loading}
                endAdornment={
                    <div>
                        <InputAdornment position="end">
                            {loading && (
                                <CircularProgress size={18} />
                            )
                            }
                            {showCopyButton && <IconButton
                                disabled={loading}
                                onClick={() => navigator.clipboard.writeText(secretValue)}
                            >
                                <ContentCopyIcon />
                            </IconButton>
                        }

                            {
                                canBeShowed && <IconButton
                                    disabled={loading}
                                    onClick={() => setShowSecret(!showSecret)}
                                >
                                    {showSecret && <VisibilityIcon />}
                                    {!showSecret && <VisibilityOffIcon />}
                                </IconButton>
                            }

                        </InputAdornment>
                    </div>
                }
                label={fieldName}
            />
        </FormControl>
    );
}