import { AppOwner } from "@evolu/common";
import { useEvolu } from "@evolu/react";
import { SecretReadOnlyField } from "./SecretReadOnlyField";
import { useState } from "react";

interface MnemonicFieldValues {
    owner: Promise<AppOwner>
}

export function MnemonicField({owner}: MnemonicFieldValues) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [mnemonic, setMnemonic] = useState<string>("");

    owner.then((appOwner: AppOwner) => {
        if (appOwner.mnemonic) {
            setMnemonic(appOwner.mnemonic?.toString());
            setIsLoading(false);
        }
    });

    return (
        <SecretReadOnlyField 
            fieldName="Mnemonic"
            loading={isLoading}
            secretValue={mnemonic}
            />
    );
}

const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));