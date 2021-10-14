import { FaTimes } from 'react-icons/fa'

const Task = ({task, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color : 'red' }}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
