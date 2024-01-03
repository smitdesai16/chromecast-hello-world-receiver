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
					dispatch(addEventAction("Event: ready"));
					const applicationData = castContext.getApplicationData();
					dispatch(addEventAction("applicationData: " + JSON.stringify(applicationData)));
					const deviceCapabilities = castContext.getDeviceCapabilities();
					dispatch(addEventAction("deviceCapabilities: " + JSON.stringify(deviceCapabilities)));
				});
				castContext.addEventListener("shutdown", function () {
					dispatch(addEventAction("Event: shutdown"));
					const senders = castContext.getSenders();
					dispatch(addEventAction("senders: " + JSON.stringify(senders)));
				});
				castContext.addEventListener("senderconnected", function () {
					dispatch(addEventAction("Event: senderconnected"));
				});
				castContext.addEventListener("senderdisconnected", function () {
					dispatch(addEventAction("Event: senderdisconnected"));
				});
				castContext.addEventListener("error", function () {
					dispatch(addEventAction("Event: error"));
				});
				castContext.addEventListener("systemvolumechanged", function () {
					dispatch(addEventAction("Event: systemvolumechanged"));
				});
				castContext.addEventListener("visibilitychanged", function () {
					dispatch(addEventAction("Event: visibilitychanged"));
				});
				castContext.addEventListener("standbychanged", function () {
					dispatch(addEventAction("Event: standbychanged"));
				});
				castContext.addEventListener("maxvideoresolutionchanged", function () {
					dispatch(addEventAction("Event: maxvideoresolutionchanged"));
				});
				castContext.addEventListener("feedbackstarted", function () {
					dispatch(addEventAction("Event: feedbackstarted"));
				});
				castContext.addEventListener("allowgroupchange", function () {
					dispatch(addEventAction("Event: allowgroupchange"));
				});
				castContext.addEventListener("groupcapabilities", function () {
					dispatch(addEventAction("Event: groupcapabilities"));
				});
				castContext.addEventListener("playbackdevicestatus", function () {
					dispatch(addEventAction("Event: playbackdevicestatus"));
				});
				castContext.addEventListener("showmediacontrols", function () {
					dispatch(addEventAction("Event: showmediacontrols"));
				});

				//cast.framework.events.EventType
				//cast.framework.ui.PlayerDataEventType
				castContext.addEventListener("*", function () {
					dispatch(addEventAction("Event: *"));
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