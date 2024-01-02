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
import { addMessageAction, addEventAction } from "./store/helloWorldReducer";
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
					dispatch(addMessageAction(customEvent.senderId + " -> " + customEvent.data.message));
				});

				//cast.framework.system.EventType
				castContext.addEventListener("ready", function () {
					dispatch(addEventAction("READY -> "));
				});
				castContext.addEventListener("shutdown", function () {
					dispatch(addEventAction("SHUTDOWN -> "));
				});
				castContext.addEventListener("senderconnected", function () {
					dispatch(addEventAction("SENDER_CONNECTED -> "));
				});
				castContext.addEventListener("senderdisconnected", function () {
					dispatch(addEventAction("SENDER_DISCONNECTED -> "));
				});
				castContext.addEventListener("error", function () {
					dispatch(addEventAction("ERROR -> "));
				});
				castContext.addEventListener("systemvolumechanged", function () {
					dispatch(addEventAction("SYSTEM_VOLUME_CHANGED -> "));
				});
				castContext.addEventListener("visibilitychanged", function () {
					dispatch(addEventAction("VISIBILITY_CHANGED -> "));
				});
				castContext.addEventListener("standbychanged", function () {
					dispatch(addEventAction("STANDBY_CHANGED -> "));
				});
				castContext.addEventListener("maxvideoresolutionchanged", function () {
					dispatch(addEventAction("MAX_VIDEO_RESOLUTION_CHANGED -> "));
				});
				castContext.addEventListener("feedbackstarted", function () {
					dispatch(addEventAction("FEEDBACK_STARTED -> "));
				});
				castContext.addEventListener("allowgroupchange", function () {
					dispatch(addEventAction("ALLOW_GROUP_CHANGE -> "));
				});
				castContext.addEventListener("groupcapabilities", function () {
					dispatch(addEventAction("GROUP_CAPABILITIES -> "));
				});
				castContext.addEventListener("playbackdevicestatus", function () {
					dispatch(addEventAction("PLAYBACK_DEVICE_STATUS -> "));
				});
				castContext.addEventListener("showmediacontrols", function () {
					dispatch(addEventAction("SHOW_MEDIA_CONTROLS -> "));
				});

				//cast.framework.events.EventType
				//cast.framework.ui.PlayerDataEventType
				castContext.addEventListener("*", function () {
					dispatch(addEventAction("* -> "));
				});

				castContext.start(castOptions);
			}
		}
		catch (exception) { /* empty */ }
	});

	return (
		<FluentProvider theme={theme} dir={languageDirConvertToApi(languageDir)}>
			{children}
		</FluentProvider>
	);
}