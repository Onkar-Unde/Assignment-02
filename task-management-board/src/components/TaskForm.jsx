
import { useEffect, useState } from 'react'
import './TaskForm.css'

function TaskForm({ onAdd, editingTask, onUpdate, onCancel }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title)
            setDescription(editingTask.description)
        } else {
            setTitle('')
            setDescription('')
        }
    }, [editingTask])

    function handleSubmit(e) {
        e.preventDefault()

        if (title.trim() === '') {
            return
        }

        const task = {
            title: title.trim(),
            description: description.trim(),
            status: editingTask ? editingTask.status : 'To Do'
        }

        if (editingTask) {
            onUpdate({
                ...editingTask,
                ...task
            })
        } else {
            onAdd(task)
        }

        setTitle('')
        setDescription('')
    }

    function handleCancel() {
        setTitle('')
        setDescription('')
        onCancel()
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
                {editingTask ? 'Update Task' : 'Add Task'}
            </button>

            {editingTask && (
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            )}
        </form>
    )
}

export default TaskForm
