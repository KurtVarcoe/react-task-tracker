import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    return (
        <form>
            <div>
                <label htmlFor='add-task'>Task</label>
                <input type='text' placeholder='Add Task' id='add-task'
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='day-time'>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' id='day-time'
                value={day} onChange={(e) => setDay(e.target.value)}/>  
            </div>
            <div>
                <label htmlFor='set-reminder'>Set Reminder</label>
                <input type='checkbox' id='set-reminder'
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-secondary'/>
        </form>
    )
}

export default AddTask
