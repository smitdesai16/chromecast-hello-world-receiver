import { FluentProvider } from "@fluentui/react-components";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "./hooks/useTheme";
import { castContext, castOptions } from "./chromecastContext";
import { Message, addMessageAction } from "./store/messageReducer";
import { updateSenderAction } from "./store/senderReducer";
import { addEventAction } from "./store/eventReducer";
import { addApplicationDataAction, addDeviceCapabilitiesAction } from "./store/applicationDetailReducer";

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

	useEffect(() => {
		document.body.style.backgroundColor = theme.colorNeutralBackground1;
	});

	useEffect(() => {
		try {
			const initializeCastContextInterval = setInterval(function () {
				if (castContext) {
					clearInterval(initializeCastContextInterval);
					castContext.addCustomMessageListener('urn:x-cast:io.smitdesai16.github.message', function (customEvent: any) {
						dispatch(addMessageAction(new Message(customEvent.senderId, customEvent.data.message)));
					});

					setInterval(function () {
						dispatch(updateSenderAction(castContext.getSenders().map(x => x.id)));
					}, 500);

					//cast.framework.system.EventType
					castContext.addEventListener("ready", function () {
						dispatch(addEventAction("ready"));

						dispatch(addApplicationDataAction(castContext.getApplicationData()));
						dispatch(addDeviceCapabilitiesAction(castContext.getDeviceCapabilities()));
					});
					castContext.addEventListener("shutdown", function () {
						dispatch(addEventAction("shutdown"));
					});
					castContext.addEventListener("senderconnected", function () {
						dispatch(addEventAction("senderconnected"));
					});
					castContext.addEventListener("senderdisconnected", function () {
						dispatch(addEventAction("senderdisconnected"));
					});
					castContext.addEventListener("error", function () {
						dispatch(addEventAction("error"));
					});
					castContext.addEventListener("systemvolumechanged", function () {
						dispatch(addEventAction("systemvolumechanged"));
					});
					castContext.addEventListener("visibilitychanged", function () {
						dispatch(addEventAction("visibilitychanged"));
					});
					castContext.addEventListener("standbychanged", function () {
						dispatch(addEventAction("standbychanged"));
					});
					castContext.addEventListener("maxvideoresolutionchanged", function () {
						dispatch(addEventAction("maxvideoresolutionchanged"));
					});
					castContext.addEventListener("feedbackstarted", function () {
						dispatch(addEventAction("feedbackstarted"));
					});
					castContext.addEventListener("allowgroupchange", function () {
						dispatch(addEventAction("allowgroupchange"));
					});
					castContext.addEventListener("groupcapabilities", function () {
						dispatch(addEventAction("groupcapabilities"));
					});
					castContext.addEventListener("playbackdevicestatus", function () {
						dispatch(addEventAction("playbackdevicestatus"));
					});
					castContext.addEventListener("showmediacontrols", function () {
						dispatch(addEventAction("showmediacontrols"));
					});

					//cast.framework.events.EventType
					//cast.framework.ui.PlayerDataEventType
					castContext.addEventListener("*", function () {
						dispatch(addEventAction("*"));
					});

					castContext.start(castOptions);
				}
			}, 500);
		}
		catch (exception) { /* empty */ }
	});

	return (
		<FluentProvider theme={theme}>
			{children}
		</FluentProvider>
	);
}