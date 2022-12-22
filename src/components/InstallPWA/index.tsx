import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = (evt: any) => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        (promptInstall as any).prompt();
    };
    if (!supportsPWA) {
        return null;
    }
    return (
        <Button
            className="link-button"
            id="setup_button"
            aria-label="Install app"
            title="Install App"
            size="large"
            sx={{
                width: '100%',
                marginBottom: '24px'
            }}
            onClick={onClick}
        >
            Install APP
        </Button>
    );
};

export default InstallPWA;