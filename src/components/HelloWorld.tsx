import { Title1 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const HelloWorld = () => {
    const { t } = useTranslation();

    return (
        <>
            <Title1 as="h1">{t("HelloWorld.Title")}</Title1>
        </>
    );
};

export default HelloWorld;