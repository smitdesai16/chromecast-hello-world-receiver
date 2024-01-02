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
				castContext.addEventListener("ready", function (event) {
					dispatch(addEventAction("READY -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("shutdown", function (event) {
					dispatch(addEventAction("SHUTDOWN -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("senderconnected", function (event) {
					dispatch(addEventAction("SENDER_CONNECTED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("senderdisconnected", function (event) {
					dispatch(addEventAction("SENDER_DISCONNECTED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("error", function (event) {
					dispatch(addEventAction("ERROR -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("systemvolumechanged", function (event) {
					dispatch(addEventAction("SYSTEM_VOLUME_CHANGED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("visibilitychanged", function (event) {
					dispatch(addEventAction("VISIBILITY_CHANGED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("standbychanged", function (event) {
					dispatch(addEventAction("STANDBY_CHANGED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("maxvideoresolutionchanged", function (event) {
					dispatch(addEventAction("MAX_VIDEO_RESOLUTION_CHANGED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("feedbackstarted", function (event) {
					dispatch(addEventAction("FEEDBACK_STARTED -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("allowgroupchange", function (event) {
					dispatch(addEventAction("ALLOW_GROUP_CHANGE -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("groupcapabilities", function (event) {
					dispatch(addEventAction("GROUP_CAPABILITIES -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("playbackdevicestatus", function (event) {
					dispatch(addEventAction("PLAYBACK_DEVICE_STATUS -> " + JSON.stringify(event)));
				});
				castContext.addEventListener("showmediacontrols", function (event) {
					dispatch(addEventAction("SHOW_MEDIA_CONTROLS -> " + JSON.stringify(event)));
				});

				//cast.framework.events.EventType
				//cast.framework.ui.PlayerDataEventType
				castContext.addEventListener("*", function (event) {
					dispatch(addEventAction("* -> " + JSON.stringify(event)));
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