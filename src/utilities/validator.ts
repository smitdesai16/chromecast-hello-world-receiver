export const assertUnreachableError = (_key: unknown, message?: string): never => {
	throw new Error(message ?? `Ensure all keys are specified. ${_key}`);
};

export const notFoundError = (_key: unknown, message?: string): never => {
	throw new Error(message ?? `Not found. ${_key}`);
};