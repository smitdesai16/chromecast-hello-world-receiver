import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { useTheme } from "../hooks/useTheme";

const ApplicationDetail = () => {
    const theme = useTheme();
    const applicationId = useSelector((state: RootState) => state.applicationDetail.applicationId);
    const launchedFrom = useSelector((state: RootState) => state.applicationDetail.launchedFrom);
    const launchingSenderId = useSelector((state: RootState) => state.applicationDetail.launchingSenderId);
    const name = useSelector((state: RootState) => state.applicationDetail.name);
    const namespaces = useSelector((state: RootState) => state.applicationDetail.namespaces);
    const sessionId = useSelector((state: RootState) => state.applicationDetail.sessionId);
    const deviceCapabilities = useSelector((state: RootState) => state.applicationDetail.deviceCapabilities);
    const deviceCapabilityList: Array<string> = [];

    Object.entries(deviceCapabilities)
        .forEach(([key, value]) => {
            if (value === true) {
                deviceCapabilityList.push(key);
            }
        });

    return (
        <div style={{ background: theme.colorPaletteRedBackground1 }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Application Details</Title1>
            </div>
            <ul>
                <li>Id: {applicationId}</li>
                <li>Launched From: {launchedFrom}</li>
                <li>Launching Sender Id: {launchingSenderId}</li>
                <li>Name: {name}</li>
                <li>Namespaces: {namespaces}</li>
                <li>Session Id: {sessionId}</li>
                <li>Device Capabilities:
                    <ul>
                        {deviceCapabilityList.map((value, i) => <li key={i}>{value}</li>)}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ApplicationDetail;