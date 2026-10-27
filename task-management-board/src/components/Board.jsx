
import Column from './Column'

import './Board.css'

function Board({ tasks, onEdit, onDelete, onStatusChange }) {
    const statuses = ['To Do', 'In Progress', 'Done']

    return (
        <div className="board">
            {statuses.map((status) => {
                const columnTasks = tasks.filter(
                    (task) => task.status === status
                )

                return (
                    <Column
                        key={status}
                        title={status}
                        tasks={columnTasks}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onStatusChange={onStatusChange}
                    />
                )
            })}
        </div>
    )
}

export default Board
