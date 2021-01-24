//Data included inside this componet can only be accessed within it and other components cannot get infor from it.
//Thus its required to place the use state inside the App.js so that eavery componet we create can have good 
// access to the data.
import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle})=>{
//Adding the useState to return a stateful value
//This makes sure that our data is also part of our component not outside it.
 
// const [tasks, setTasks] = useState([
//     //Tasks is the name of the array we are going to iterate through
//     //setTasks is the function that we shall use incase we want to set or add more data to the state
//     //We cannot use tasks.push directly because the useState is immutable and cannot be easily changed.
//     //Thats why we include the setTasks function to that will be used to alter the data inm the useState
//     {
//         id:1,
//         text:'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder:true,
//     },
//     {
//         id:2,
//         text:'Meeting at school',
//         day: 'Feb 6th at 1:30pm',
//         reminder:true,
//     },
//     {
//         id:3,
//         text:'Food shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder:false,
//     }
// ])

    return(
        <>

        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
        
        </>
    )
}




export default Tasks