import React,{useState  , useEffect } from 'react'; // use efecct working when the page load
import {isEmpty,size} from 'lodash'
import { getCollection } from './actions';
// import shortid from 'shortid'

let num=0;

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])//arreglo de tareas
  const [editMode,setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

useEffect(
  () => {  
    async () => {
      const result = await getCollection("tasks")
    }

  },[])//ese metodo se ejecuta cuando la pagina carga , es un metodo asuncrono autoejecutable

  const validForm = () => {
    let isValid = true
    setError()
    if(isEmpty(task)){
      setError("Debes ingresar una tarea")
      isValid =false
    }

    return isValid
  }

  const addTask = (e) =>{
    e.preventDefault()

    // if(isEmpty(task)){
    
    //   setError("Debes ingresar una tarea.")
    //   // console.log("Task empty")
    //   return
    // }

    if(!validForm()){
      return
    }

    num=num+1;
    const newTask = {
      id: num,//shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])

    console.log("Ok")
    setTask("")

  }

  const deleteTask = (id) =>{
    const filteredTasks = tasks.filter( task =>  task.id !==  id)
    setTasks(filteredTasks);
  }

  const editTask = (theTask) => {
    
  
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }

  const saveTask = (e) =>{
    e.preventDefault();
    // if(isEmpty(task))
    // {
    //   console.log("Task Empty");
    //   return
    // }

    if(!validForm()){
      return
    }

    const editedTask = tasks.map(item => item.id==id ? {id, name: task}: item )  
    setTasks(editedTask)

    setEditMode(false)
    setTask("")
    setId("")

  }

  return (
    <div className="container mt-5">
       {/* Hello word */}
       <h1>Tareas</h1>
       <hr/> 
       <div className="row">
          <div className="col-8">
            <h4 className="text-center"> Lista de Tareas
            {/* { editMode ?  "Modificar Tareas" : "Agregar Tareas"  }  */}
            </h4>
            {
                    size(tasks) === 0 ? (
                      // <h5>Aun no hay tareas programadas.</h5>
                      <li className="list-group-item"> Aun no hay tareas programadas  </li>
                    )       
                    :       
                      (
                              <ul className="list-group">
                                {
                                      tasks.map (( task ) => 
                                      (
                                          <li className="list-group-item" key = {task.id} >
                                            <span className="lead"> { task.name } </span>
                                            <button className="btn btn-danger btn-sm fliat-right mx-2" 
                                              onClick={ ()=> deleteTask(task.id)} > 
                                              Elimar </button>

                                            {<button className="btn btn-warning btn-sm fliat-right "
                                              onClick={ ()=> editTask(task)} > 
                                              Editar </button> }
                                          </li>
                                      ))
                                }
                              </ul>
                      )
             }
          </div>
          <div className="col-4">
              <h4 className="text-center">Formulario</h4>
              <form onSubmit={ editMode ? saveTask : addTask }>
                <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea" onChange={ (text) => setTask( text.target.value) }
                                   value={task}
                ></input>
                {
                  error && <span className='text-danger'> {error} </span>
                }
                <button className={editMode ? "btn btn-warning btn-block" :"btn btn-dark btn-block"} type="submit">
                  { editMode ? "Guardar" : "Agregar" }
                  {/* Agregar Tarea */}
                  </button>
              </form>
          </div>
          

       </div>
    </div>
  );
}

export default App;
