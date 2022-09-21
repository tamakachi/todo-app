import './bootstrap/bootstrap.css';
import './App.css'
import {useState} from 'react'


function App() {

 
const [list,setList] = useState(['Complete online Javascript course','Jog around the park 3x','10 Minutes Meditation','Read for 1 hour'],)


  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'></div>
          <div className='col mainColumn'>
            <h1>TODO</h1>
            {list.map((item)=>(<div>{item}</div>))}
          </div>
          <div className='col'></div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
