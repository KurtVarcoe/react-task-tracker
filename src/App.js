import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
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

  return (
    <div className="container">
      <Header text='Add'/>
      <Tasks tasks={tasks}/>
      <Footer />
    </div>
  );
}

export default App;
