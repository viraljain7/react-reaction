import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            msg: "own msg",
            completed: true
        },
        // {},{},{}
    ],

    addTodo: (id, msg) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    updateTodo: (id, msg) => { }
})


export const TodoProvider = TodoContext.Provider;


export default function useTodo() {
    return useContext(TodoContext)
}
