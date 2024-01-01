import LocalForage from "localforage";
import { Configuration } from "../constants/configuration";
import { cacheTableConvertToApi } from "../converter/cacheTableConverter";
import { LoggerAccessor } from "../logger/loggerAccessor";
import { CacheTable, CacheTables } from "../models/cacheTable";
import { notFoundError } from "../utilities/validator";

export class LocalCacheAccessor {
	private static cacheAccessorMap: Map<CacheTable, LocalForage>;

	public static async initializeLocalCacheAccessors(): Promise<void> {
		LocalCacheAccessor.cacheAccessorMap = new Map();

		for (const cacheTable of CacheTables) {
			try {
				const cacheAccessor: LocalForage = LocalForage.createInstance({
					name: Configuration.name,
					storeName: cacheTableConvertToApi(cacheTable),
				});
				await cacheAccessor.ready();
				LocalCacheAccessor.cacheAccessorMap.set(cacheTable, cacheAccessor);
			} catch (exception) {
				LoggerAccessor.error(exception);
			}
		}
	}

	private static getCacheAccessor(cacheTable: CacheTable) {
		const cacheAccessor = LocalCacheAccessor.cacheAccessorMap.get(cacheTable);
		if (!cacheAccessor) {
			notFoundError(cacheTable);
		}
		return cacheAccessor;
	}

	public static async saveToLocalCache<T>(cacheTable: CacheTable, key: string, data: T): Promise<void> {
		try {
			const cacheAccessor = this.getCacheAccessor(cacheTable);
			await cacheAccessor?.setItem(key, data);
		} catch (exception) {
			LoggerAccessor.error(exception);
		}
	}

	public static async getFromLocalCache<T>(cacheTable: CacheTable, key: string, defaultValue: T): Promise<T> {
		try {
			const cacheAccessor = this.getCacheAccessor(cacheTable);

			const value: T | null | undefined = await cacheAccessor?.getItem(key);

			if (value === null) {
				return defaultValue;
			}
			else if (value === undefined)
			{
				return defaultValue;
			}
			else {
				return value;
			}
		} catch (exception) {
			LoggerAccessor.error(exception);
			throw exception;
		}
	}
}