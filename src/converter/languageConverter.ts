import { Language } from "../models/language";
import { assertUnreachableError } from "../utilities/validator";

export const languageConvertToApi = (value: Language): "en" | "hi" | "ur" => {
	switch (value) {
		case Language.en:
			return "en";

		case Language.hi:
			return "hi";

		case Language.ur:
			return "ur";

		default:
			return assertUnreachableError(value);
	}
};