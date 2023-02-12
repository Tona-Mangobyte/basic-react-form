import * as React from "react";

const TodosStateLess = ({ todos, add, remove, register, errors, handleSubmit, setValue }: any) => {

    const onSubmit = (data: any) => {
        add(data.name);
        setValue('name', '', { shouldDirty: true })
    };
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo: string, index: number) => {
                return <p key={index}>{todo} <button onClick={() => {
                    remove(todo);
                }}>x</button></p>;
            })}
            <form autoComplete='off' className="root" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true, maxLength: 20 })}
                    type="text"
                />
                <button type={"submit"}>Add Todo</button>
                <br/>
                {
                    errors.name && (
                        <span style={{ color: "red" }} role="alert"> required</span>)
                }
            </form>
        </>
    );
};

export default React.memo(TodosStateLess);
