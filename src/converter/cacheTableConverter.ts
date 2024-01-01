import { CacheTable } from "../models/cacheTable";
import { assertUnreachableError } from "../utilities/validator";

export const cacheTableConvertToApi = (value: CacheTable): "user" => {
	switch (value) {
		case CacheTable.UserCache:
			return "user";

		default:
			return assertUnreachableError(value);
	}
};