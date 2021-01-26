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
    console.log('delete', id);
  }

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
