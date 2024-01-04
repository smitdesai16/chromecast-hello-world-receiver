import { FluentProvider } from "@fluentui/react-components";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "./hooks/useTheme";
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
			const loadCastContextInterval = setInterval(function () {
				if (window["cast"]) {
					clearInterval(loadCastContextInterval);
					const castReceiverOptions = new window["cast"].framework.CastReceiverOptions();
					castReceiverOptions.disableIdleTimeout = true;
					castReceiverOptions.maxInactivity = 5;
					castReceiverOptions.versionCode = 1; // keep incrementing this
					const castReceiverContext = window["cast"].framework.CastReceiverContext.getInstance();

					castReceiverContext.addCustomMessageListener('urn:x-cast:io.smitdesai16.github.message', function (customEvent: any) {
						dispatch(addMessageAction(new Message(customEvent.senderId, customEvent.data.message)));
					});

					setInterval(function () {
						dispatch(updateSenderAction(castReceiverContext.getSenders().map(x => x.id)));
					}, 500);

					//cast.framework.system.EventType
					castReceiverContext.addEventListener("ready", function () {
						dispatch(addEventAction("ready"));

						dispatch(addApplicationDataAction(castReceiverContext.getApplicationData()));
						dispatch(addDeviceCapabilitiesAction(castReceiverContext.getDeviceCapabilities()));
					});
					castReceiverContext.addEventListener("shutdown", function () {
						dispatch(addEventAction("shutdown"));
					});
					castReceiverContext.addEventListener("senderconnected", function () {
						dispatch(addEventAction("senderconnected"));
					});
					castReceiverContext.addEventListener("senderdisconnected", function () {
						dispatch(addEventAction("senderdisconnected"));
					});
					castReceiverContext.addEventListener("error", function () {
						dispatch(addEventAction("error"));
					});
					castReceiverContext.addEventListener("systemvolumechanged", function () {
						dispatch(addEventAction("systemvolumechanged"));
					});
					castReceiverContext.addEventListener("visibilitychanged", function () {
						dispatch(addEventAction("visibilitychanged"));
					});
					castReceiverContext.addEventListener("standbychanged", function () {
						dispatch(addEventAction("standbychanged"));
					});
					castReceiverContext.addEventListener("maxvideoresolutionchanged", function () {
						dispatch(addEventAction("maxvideoresolutionchanged"));
					});
					castReceiverContext.addEventListener("feedbackstarted", function () {
						dispatch(addEventAction("feedbackstarted"));
					});
					castReceiverContext.addEventListener("allowgroupchange", function () {
						dispatch(addEventAction("allowgroupchange"));
					});
					castReceiverContext.addEventListener("groupcapabilities", function () {
						dispatch(addEventAction("groupcapabilities"));
					});
					castReceiverContext.addEventListener("playbackdevicestatus", function () {
						dispatch(addEventAction("playbackdevicestatus"));
					});
					castReceiverContext.addEventListener("showmediacontrols", function () {
						dispatch(addEventAction("showmediacontrols"));
					});

					//cast.framework.events.EventType
					//cast.framework.ui.PlayerDataEventType
					castReceiverContext.addEventListener("*", function () {
						dispatch(addEventAction("*"));
					});

					castReceiverContext.start(castReceiverOptions);
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