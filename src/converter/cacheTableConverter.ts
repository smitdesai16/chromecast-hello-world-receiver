import { CacheTable } from "../models/cacheTable";
import { assertUnreachableError } from "../utilities/validator";

export const cacheTableConvertToApi = (value: CacheTable): "" => {
	switch (value) {
		default:
			return assertUnreachableError(value);
	}
};