import * as React from "react";

import TodosStateLess from "@/components/common/todo.stateless";
import CounterSl from "@/components/common/counter-sl";

const SimpleTodoSl = () => {
    const [count, setCount] = React.useState(0);
    const [todos, setTodos] = React.useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = React.useCallback((value: never) => {
        const newTodos = todos.concat([value]);
        setTodos(newTodos);
    }, [todos]);

    const removeTodo = React.useCallback((value: never) => {
        const newTodos = todos.filter((todo) => todo !== value);
        setTodos(newTodos);
    }, [todos]);

    return (
        <>
            <TodosStateLess todos={todos} add={addTodo} remove={removeTodo} />
            <hr />
            <CounterSl count={count} increment={increment}/>
        </>
    );
};

export default SimpleTodoSl;
