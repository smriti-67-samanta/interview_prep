const express = require('express');
const app = express()
const PORT = 3000

app.use(express.json())

let tasks = [
  { id: 1, title: "Revise Node.js", completed: false },
  { id: 2, title: "Practice Express routes", completed: true }
]
app.get('/tasks', (req, res) => {
  res.json(tasks)
})


app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id))
  if (!task) return res.status(404).json({ error: "Task not found" })
  res.json(task)
});


app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" })
  
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  }
  tasks.push(newTask)
  res.status(201).json(newTask)
})

app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ error: "Task not found" })
  
  tasks.splice(index, 1)
  res.status(204).send()
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))