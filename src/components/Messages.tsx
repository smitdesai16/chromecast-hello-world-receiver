import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { useTheme } from "../hooks/useTheme";

const Messages = () => {
    const theme = useTheme();
    const messages = useSelector((state: RootState) => state.message.messages);

    return (
        <div style={{ background: theme.colorPaletteBlueBackground2 }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Messages</Title1>
            </div>
            <ul>
                {messages.map((value, i) => <li key={i}>{value.sender + " " + value.message}</li>)}
            </ul>
        </div>
    );
};

export default Messages;