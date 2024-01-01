import { LanguageDir } from "../models/languageDir";
import { assertUnreachableError } from "../utilities/validator";

export const languageDirConvertToApi = (value: LanguageDir): "ltr" | "rtl" => {
	switch (value) {
		case LanguageDir.Ltr:
			return "ltr";

		case LanguageDir.Rtl:
			return "rtl";

		default:
			return assertUnreachableError(value);
	}
};