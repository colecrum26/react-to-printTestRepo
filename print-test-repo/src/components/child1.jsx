import { forwardRef } from "react";
import MyP from "./child2";

const MyDiv = forwardRef(function MyDiv(props, ref) {
    return (
        <div ref={ref}>
        <p>HELLO WORLD</p>
        <MyP />
        </div>
    );
});

export default MyDiv;