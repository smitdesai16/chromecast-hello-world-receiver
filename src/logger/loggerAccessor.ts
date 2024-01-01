export class LoggerAccessor {
	public static async log(value: string): Promise<void> {
		console.log(value);
	}

	public static async error(error: Error): Promise<void> {
		console.error(error);
	}
}