import { Title1, Title3 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";

const HelloWorld = () => {
    const message = useSelector((state: RootState) => state.helloWorld.message);
    const sender = useSelector((state: RootState) => state.helloWorld.sender);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Title1 as="h1" style={{ margin: 0 }}>{message}</Title1>
                <Title3 as="h2" style={{ margin: 0 }}>{sender}</Title3>
            </div>
        </>
    );
};

export default HelloWorld;