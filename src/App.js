import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Form from './components/Form';
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id : 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id : 3,
        text: 'Food Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: false
    }
  ])
  
  // Toggle reminder function
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task));
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header text='Add'/>
      <Form />
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
      <Footer />
    </div>
  );
}

export default App;
