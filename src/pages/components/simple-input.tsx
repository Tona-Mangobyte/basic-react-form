import * as React from "react";
import {AppProps} from "next/app";


export default class SimpleInput1 extends React.Component {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            input: "Hello World!"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event: any) {
        this.setState((state, props) => (
            {
                input: event.target.value
            }
        ))
    }

    render() {
        return (
            <div>
                <input type="text" name="input" value={this.state.input} onChange={this.handleChange} />
                <br/>
                { this.state.input }
            </div>
        )
    }
}
