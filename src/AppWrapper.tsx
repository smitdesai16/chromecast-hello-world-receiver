import { FluentProvider } from "@fluentui/react-components";
import i18next from "i18next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalCacheAccessor } from "./cache/localCacheAccessor";
import { languageDirConvertToApi } from "./converter/languageDirConverter";
import { CacheTable, UserCacheLanguage, UserCacheLanguageDir, UserCacheTheme } from "./models/cacheTable";
import { Theme } from "./models/theme";
import { RootState } from "./store/baseStore";
import { useTheme } from "./hooks/useTheme";
import { languageConvertToApi } from "./converter/languageConverter";
import { updateLanguageAction, updateLanguageDirAction, updateThemeAction } from "./store/userReducer";
import { Language } from "./models/language";
import { LanguageDir } from "./models/languageDir";
import { updateMessageAction, updateSenderAction } from "./store/helloWorldReducer";
import { castContext, castOptions } from "./chromecastContext";

interface IProps {
	children: React.ReactNode;
}

/**
 * App Wrapper is responsible for theme setup, language setup, update store from response and update store from cache
 * @returns JSX.Element
 */
export default function AppWrapper({ children }: IProps): JSX.Element {
	const dispatch = useDispatch();
	const theme = useTheme();
	const languageDir = useSelector((state: RootState) => state.user.languageDir);

	useEffect(() => {
		(async () => {
			const currentLanguage = await LocalCacheAccessor.getFromLocalCache<number>(CacheTable.UserCache, UserCacheLanguage, Language.en);
			dispatch(updateLanguageAction(currentLanguage));
			await i18next.changeLanguage(languageConvertToApi(currentLanguage));

			const currentLanguageDir = await LocalCacheAccessor.getFromLocalCache<number>(CacheTable.UserCache, UserCacheLanguageDir, LanguageDir.Ltr);
			dispatch(updateLanguageDirAction(currentLanguageDir));

			const currentTheme = await LocalCacheAccessor.getFromLocalCache<number>(CacheTable.UserCache, UserCacheTheme, Theme.Light);
			dispatch(updateThemeAction(currentTheme));
		})();
	});

	useEffect(() => {
		document.body.style.backgroundColor = theme.colorNeutralBackground1;
	});

	useEffect(() => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			castContext.addCustomMessageListener('urn:x-cast:io.smitdesai16.github.message', function (customEvent: any) {
				dispatch(updateMessageAction(customEvent.data.message));
				dispatch(updateSenderAction(customEvent.senderId));
			});
			castContext.addEventListener("READY", function () {

			});
			castContext.addEventListener("SHUTDOWN", function () {

			});
			castContext.addEventListener("SENDER_CONNECTED", function () {

			});
			castContext.addEventListener("SENDER_DISCONNECTED", function () {

			});
			castContext.addEventListener("ERROR", function () {

			});
			castContext.addEventListener("SYSTEM_VOLUME_CHANGED", function () {

			});
			castContext.addEventListener("VISIBILITY_CHANGED", function () {

			});
			castContext.addEventListener("STANDBY_CHANGED", function () {

			});
			castContext.addEventListener("MAX_VIDEO_RESOLUTION_CHANGED", function () {

			});
			castContext.addEventListener("FEEDBACK_STARTED", function () {

			});
			castContext.start(castOptions);
		}
		catch (exception) {
			dispatch(updateMessageAction(exception));
		}
	});

	return (
		<FluentProvider theme={theme} dir={languageDirConvertToApi(languageDir)}>
			{children}
		</FluentProvider>
	);
}