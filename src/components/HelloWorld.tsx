import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";

const HelloWorld = () => {
    const title = useSelector((state: RootState) => state.helloWorld.title);

    return (
        <>
            <Title1 as="h1">{title}</Title1>
        </>
    );
};

export default HelloWorld;