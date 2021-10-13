const Form = () => {
    return (
        <div>
            <label htmlFor='add-task'>Task</label>
            <input type='text' placeholder='Add Task' id='add-task'/>
            <label htmlFor='day-time'>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' id='day-time'/>
            <label htmlFor='set-reminder'>Set Reminder</label>
            <input type='checkbox' id='set-reminder'/>
            <input type='submit' className='btn btn-secondary'/>
        </div>
    )
}

export default Form
