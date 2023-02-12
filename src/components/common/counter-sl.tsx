import * as React from "react";
const CounterSl = (props: any) => {

    return (
        <>
        <div>
            Count: {props.count}
            <button onClick={props.increment}>+</button>
        </div>
        </>
    );
};

export default CounterSl;
