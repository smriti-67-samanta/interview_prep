import React, { useState } from 'react';
function App(){
  const initialTodos = [
  { id: 1, title: "Revise React basics", completed: false },
  { id: 2, title: "Practice useState", completed: false },
  { id: 3, title: "Understand useEffect", completed: false },
  { id: 4, title: "Revise useRef", completed: false }
];
const [todos, setTodos] = useState(initialTodos)

const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const completedCount = todos.filter(todo => todo.completed).length;
const totalCount = todos.length;

return(
  <div>
     <h2>Completed: {completedCount} / {totalCount}</h2>
    <ul>
    {todos.map((todo) => (
  <li key={todo.id}>
    <span>
    {todo.title}
</span>
 <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Done'}
            </button>
  </li>
))}
</ul>
  </div>
)
}

export default App;