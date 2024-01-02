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
import { updateEventNameAction, updateMessageAction, updateSenderAction, updateeventDetailAction } from "./store/helloWorldReducer";
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
			if (castContext) {
				castContext.addCustomMessageListener('urn:x-cast:io.smitdesai16.github.message', function (customEvent: any) {
					dispatch(updateMessageAction(customEvent.data.message));
					dispatch(updateSenderAction(customEvent.senderId));
				});
				castContext.addEventListener("ready", function (event) {
					dispatch(updateEventNameAction("READY"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("shutdown", function (event) {
					dispatch(updateEventNameAction("SHUTDOWN"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("senderconnected", function (event) {
					dispatch(updateEventNameAction("SENDER_CONNECTED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("senderdisconnected", function (event) {
					dispatch(updateEventNameAction("SENDER_DISCONNECTED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("error", function (event) {
					dispatch(updateEventNameAction("ERROR"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("systemvolumechanged", function (event) {
					dispatch(updateEventNameAction("SYSTEM_VOLUME_CHANGED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("visibilitychanged", function (event) {
					dispatch(updateEventNameAction("VISIBILITY_CHANGED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("standbychanged", function (event) {
					dispatch(updateEventNameAction("STANDBY_CHANGED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("maxvideoresolutionchanged", function (event) {
					dispatch(updateEventNameAction("MAX_VIDEO_RESOLUTION_CHANGED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("feedbackstarted", function (event) {
					dispatch(updateEventNameAction("FEEDBACK_STARTED"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("allowgroupchange", function (event) {
					dispatch(updateEventNameAction("ALLOW_GROUP_CHANGE"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("groupcapabilities", function (event) {
					dispatch(updateEventNameAction("GROUP_CAPABILITIES"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("playbackdevicestatus", function (event) {
					dispatch(updateEventNameAction("PLAYBACK_DEVICE_STATUS"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.addEventListener("showmediacontrols", function (event) {
					dispatch(updateEventNameAction("SHOW_MEDIA_CONTROLS"));
					dispatch(updateeventDetailAction(JSON.stringify(event)));
				});
				castContext.start(castOptions);
			}
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