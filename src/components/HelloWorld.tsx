import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";

const HelloWorld = () => {
    const messages = useSelector((state: RootState) => state.helloWorld.messages);
    const events = useSelector((state: RootState) => state.helloWorld.events);

    return (
        <>
            <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                <div>
                    <Title1>Custom Message</Title1>
                    {messages.map((value, i) => <p key={i} style={{ wordBreak: "break-all" }}>{value}</p>)}
                </div>
                <div>
                    <Title1>Event</Title1>
                    {events.map((value, i) => <p key={i} style={{ wordBreak: "break-all" }}>{value}</p>)}
                </div>
            </div>
        </>
    );
};

export default HelloWorld;