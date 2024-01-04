import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { useTheme } from "../hooks/useTheme";

const Senders = () => {
    const theme = useTheme();
    const events = useSelector((state: RootState) => state.event.events);

    return (
        <div style={{ background: theme.colorPaletteYellowBackground1 }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Events</Title1>
            </div>
            <ul>
                {events.map((value, i) => <li key={i}>{value}</li>)}
            </ul>
        </div>
    );
};

export default Senders;