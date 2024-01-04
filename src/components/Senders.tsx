import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { useTheme } from "../hooks/useTheme";

const Senders = () => {
    const theme = useTheme();
    const senders = useSelector((state: RootState) => state.sender.senders);

    return (
        <div style={{ background: theme.colorPaletteDarkGreenBackground2 }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Senders</Title1>
            </div>
            <ul>
                {senders.map((value, i) => <li key={i}>{value}</li>)}
            </ul>
        </div>
    );
};

export default Senders;