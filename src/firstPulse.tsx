import { LocalCacheAccessor } from "./cache/localCacheAccessor";
import { I18nAccessor } from "./i18n/i18nAccessor";
/**
 * First pulse is responsible for initializing local cache and i18n
 */
export async function startFirstPulse(): Promise<void> {
    await Promise.all([
        LocalCacheAccessor.initializeLocalCacheAccessors(),
        I18nAccessor.initializeI18nAccessor()
    ])

    const { startSecondPulse } = await import("./secondPulse");
    startSecondPulse();
}