import { LanguageDir } from "./languageDir";

export const enum Language {
	en,
	hi,
	ur,
}

export const LanguagesArray = [Language.en, Language.hi, Language.ur];

export const LanguagesMap = new Map();
LanguagesMap.set(Language.en, { text: "English", dir: LanguageDir.Ltr });
LanguagesMap.set(Language.hi, { text: "Hindi", dir: LanguageDir.Ltr });
LanguagesMap.set(Language.ur, { text: "Urdu", dir: LanguageDir.Rtl });