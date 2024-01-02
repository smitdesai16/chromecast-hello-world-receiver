import { Title1, Title3 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";

const HelloWorld = () => {
    const message = useSelector((state: RootState) => state.helloWorld.message);
    const sender = useSelector((state: RootState) => state.helloWorld.sender);

    return (
        <>
            <Title1 as="h1">{message}</Title1>
            <br />
            <Title3 as="h2">{sender}</Title3>
        </>
    );
};

export default HelloWorld;