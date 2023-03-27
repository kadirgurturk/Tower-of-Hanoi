
import { useCallback, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';


function App() {


  const [sticks, setSticks] = useState([
    {name:"stick1",
    id:1,
    disks : [{id:1},{id:2},{id:3},{id:4},{id:5}]
   },
   {name:"stick2",
    id:2,
    disks : []
   },
   {name:"stick3",
    id:3,
    disks : []
   },
  ])
  
  const [stateDisk,setStateDisk] = useState({});

  const handleDisk = (disk,s) =>{
    if(disk === s.disks[0] && Object.keys(stateDisk).length === 0){
      setStateDisk(disk);
      const newDisks = sticks.find(stick => stick.id === s.id).disks.filter(d => d.id !== disk.id);
    
      setSticks(sticks => sticks.map(stick => {if(s.id === stick.id){
        stick.disks = newDisks;
      }
      return stick;
    }))
   
    }
  }

  


  const addDisk = (s) =>{
      if(Object.keys(stateDisk).length !== 0){

        const newDisks = sticks.find(stick => stick.id === s.id).disks.unshift(stateDisk);

       
        setStateDisk({});
      }
      
      }
  
  
  return(
  <>
    <div className='container'>
      {sticks.map(s =>(
        <div key={s.id} className='stick' onClick={()=>{addDisk(s)}}>{s.disks.map(disk => (
          <div key={disk.id} className='disk' style={{width : disk.id * 60 + "px",right: disk.id * 60/ 2,top:50}} onClick={()=>{handleDisk(disk,s)}}>{disk.id}</div>
        ))}</div>
      ))}
    </div> 

  </>
  
    )
}



export default App;
