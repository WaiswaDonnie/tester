import Header from './componets/Header'
import Tasks from './componets/Tasks'
import {useState} from 'react'
import AddTask from './componets/AddTask'
function App() {
 const [tasks, setTasks] = useState([
 
    //Tasks is the name of the array we are going to iterate through
    //setTasks is the function that we shall use incase we want to set or add more data to the state
    //We cannot use tasks.push directly because the useState is immutable and cannot be easily changed.
    //Thats why we include the setTasks function to that will be used to alter the data inm the useState
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder:false,
    }
 ])
  //Adding the event listerner to the button
  const deleteTask = (id)=>{
    
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=> task.id === id ?{ ...task, reminder:!task.reminder}:task))
  }

  const addTask = (task)=>{
    console.log(task)

    const id = Math.floor(Math.random()*1000 + 1);
    const newTask =  {id, ...task}

    setTasks([...tasks, newTask])
  }
  return (

    //We pass in tasks as prop to the tasks component
    
    <div className="container">
   <Header ></Header>
   <AddTask onAdd={addTask}></AddTask>
   {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} ></Tasks>:"No tasks"}
    </div>
    
  );
}

export default App;
