import * as React from "react";
import {AppProps} from "next/app";
import Todo from "@/components/common/todo";
import {useCallback} from "react";
import {validateConfig} from "next/dist/server/config-shared";

export default class SimpleTodo extends React.Component<any, any> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            todos: [],
            count: 0,
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.increment = this.increment.bind(this);
    }

    /*const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);*/
    addTodo(value: string) {
        console.log(`execute addTodo `, value);
        // todos = this.state.todos;
        this.setState({
            todos: [...this.state.todos, value]
        });
    }
    removeTodo(todo: string) {
        console.log(`execute removeTodo `, todo);
        const todos = this.state.todos.filter((t: string) => t !== todo);
        this.setState({
            todos: todos
        })
    }
    increment() {
        this.setState({
            count: parseInt(this.state.count) + 1
        });
    }
    render() {
        return (
            <>
                <Todo todos={this.state.todos} add={this.addTodo} remove={this.removeTodo} />
                <hr />
                <div>
                    Count: {this.state.count}
                    <button onClick={this.increment}>+</button>
                </div>
            </>
        );
    }
}
