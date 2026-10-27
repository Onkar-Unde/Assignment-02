import { useEffect, useState } from 'react'

import './App.css'
import TaskForm from './components/TaskForm'
import Board from './components/Board'

const initialTasks = [
    {
        id: 1,
        title: 'Learn React Hooks',
        description: 'Practice useState and useEffect',
        status: 'To Do'
    },
    {
        id: 2,
        title: 'Build a Navbar',
        description: 'Create a responsive navbar',
        status: 'In Progress'
    },
    {
        id: 3,
        title: 'Learn JavaScript',
        description: 'Complete array methods',
        status: 'Done'
    }
]

function App() {
  const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem('tasks')
            return savedTasks ? JSON.parse(savedTasks) : initialTasks
        } catch (error) {
            console.log('Error loading tasks:', error)
            return initialTasks
        }
    })

    const [editingTask, setEditingTask] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function addTask(task) {
        const newTask = {
            ...task,
            id: Date.now()
        }

        setTasks([...tasks, newTask])
    }

    function updateTask(updatedTask) {
        const newTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        )

        setTasks(newTasks)
        setEditingTask(null)
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
    }

    function changeStatus(id, status) {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: status } : task
        )

        setTasks(newTasks)
    }

    return (
        <div className="app">
            <h1>Task Management Board</h1>
            <p className="subtitle">Organize your work, one task at a time.</p>

            <TaskForm
                onAdd={addTask}
                editingTask={editingTask}
                onUpdate={updateTask}
                onCancel={() => setEditingTask(null)}
            />

            <Board
                tasks={tasks}
                onEdit={setEditingTask}
                onDelete={deleteTask}
                onStatusChange={changeStatus}
            />
        </div>
    )
}

export default App
