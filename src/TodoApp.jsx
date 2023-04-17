import React, { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const previousTodo = () => {
    if (todoId > 1) {
      setTodoId(todoId - 1);
    }
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>
        isLoading:
        <span style={{ color: !isLoading ? "red" : "green" }}>
          {" "}
          {isLoading ? "true" : "false"}
        </span>
      </h4>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
      <button onClick={previousTodo}>Previous TODO</button>
      <button onClick={nextTodo}>Next TODO</button>
      {/* <ul style={{ listStyle: "none", textAlign: "left"}}>
        {todos?.map((todo) => (
            <li key={todo.id}>
                <strong>
                    {todo.completed ? "✅ " : "❌ "}
                </strong>
                {todo.title}
            </li>
        ))}
      </ul> */}
    </>
  );
};
