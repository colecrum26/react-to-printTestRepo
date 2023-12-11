import { forwardRef } from "react"

const MyDiv = forwardRef(function MyDiv(props, ref) {
    return (
        <div ref={ref}>HELLO WORLD</div>
    );
});

export default MyDiv;