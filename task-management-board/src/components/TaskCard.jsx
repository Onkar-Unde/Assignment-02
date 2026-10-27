import './TaskCard.css'

function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
    const statuses = ['To Do', 'In Progress', 'Done']

    return (
        <div className="task-card">
            <h3>{task.title}</h3>

            <p>{task.description || 'No description'}</p>

            <button onClick={() => onEdit(task)}>
                Edit
            </button>

            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>

            <select
                value={task.status}
                onChange={(e) =>
                    onStatusChange(task.id, e.target.value)
                }
            >
                {statuses.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default TaskCard
