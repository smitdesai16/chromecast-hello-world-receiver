import { Title1, Title2 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";

const HelloWorld = () => {
    const message = useSelector((state: RootState) => state.helloWorld.message);
    const sender = useSelector((state: RootState) => state.helloWorld.sender);

    return (
        <>
            <Title1 as="h1">{message}</Title1>
            <Title2 as="h2">{sender}</Title2>
        </>
    );
};

export default HelloWorld;