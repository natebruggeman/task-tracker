import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'doctors appointment',
        day: 'Feb 4',
        reminder: true
    },
    {
        id:2,
        text: 'interview',
        day: 'Jan 8',
        reminder: false,
    },    
    {
        id:3,
        text: 'family dinner',
        day: 'March 11',
        reminder: true,
    }
])

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder -- changes the state of task.reminder to whatever it's opposite is
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder }: task
      ) 
    )
  }

  return (
    <div className="container">
      <Header />

      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle = {toggleReminder}
          />
      ) : (
        'There are currently no tasks'
      )}
    </div>
  );
}

export default App;
