import * as React from "react";
import {AppProps} from "next/app";
import { useForm } from "react-hook-form";

interface TodoProps extends AppProps {
    todos: any
    add: Function
    remove: Function
}
export default class Todo extends React.Component<any, any> {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    constructor(props: TodoProps) {
        super(props);
        this.state = {
            todo: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value: string) {
        this.setState({
            todo: value
        });
    }

    render() {
        return (
            <>
                <h2>My Todos</h2>
                {
                    this.props.todos.map((todo: any, index: number) => {
                    return <p key={index}>{todo} <button onClick={(event: any) => {
                        this.props.remove(todo)
                    }}>x</button> </p>;
                })}
                <input
                    type="text"
                    name="name"
                    ref={this.props.register}
                    onChange={ (event: any) => {
                        this.handleChange(event.target.value)
                    }}
                />
                <button onClick={(event: any) => {
                    this.props.add(this.state.todo);
                }
                }>Add New</button>
            </>
        );
    }
}
