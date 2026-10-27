
import TaskCard from './TaskCard'
import './Column.css'

function Column({ title, tasks, onEdit, onDelete, onStatusChange }) {
    return (
        <div className="column">
            <h2>{title} ({tasks.length})</h2>

            {tasks.length === 0 && (
                <p className="empty">No tasks here</p>
            )}

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onStatusChange={onStatusChange}
                />
            ))}
        </div>
    )
}

export default Column
