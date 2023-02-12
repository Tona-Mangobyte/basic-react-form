import * as React from "react";

const TodosStateLess = ({ todos, add, remove }: any) => {
    const [input, setInput] = React.useState("");

    const handleChange = (value: string) => {
        setInput(value);
    }
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo: string, index: number) => {
                return <p key={index}>{todo} <button onClick={() => {
                    remove(todo);
                }}>x</button></p>;
            })}
            <input
                type="text"
                name="name"
                onChange={ (event: any) => {
                    handleChange(event.target.value)
                }}
            />
            <button onClick={() => {
                add(input);
            }}>Add Todo</button>
        </>
    );
};

export default React.memo(TodosStateLess);
