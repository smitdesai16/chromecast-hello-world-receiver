import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

export class I18nAccessor {
    public static async initializeI18nAccessor(): Promise<void> {
        await i18next
            .use(Backend)
            .use(initReactI18next)
            .init({
                lng: "en",
                fallbackLng: "en",
                debug: false,
                interpolation: {
                    escapeValue: false,
                },
            });
    }
}