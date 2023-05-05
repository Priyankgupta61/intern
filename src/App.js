import "./App.scss"
import { Routes, Route} from 'react-router-dom';
import Home from "./Home.jsx"
import Selected from "./Selected.jsx"
import { useEffect, useState } from "react";
import axios from "axios";
import {DataContext}  from './MYContext.jsx';
function App() {
  
  const [data, setdata]= useState();
  const [selected, setselected] = useState();
  useEffect(()=>{
    async function getApi(){
      try{
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        setdata(response.data);
        
      }catch(Err){
        console.log(Err);
      }
    }
  getApi();
  },[]);

  

  return (
    <>  
        <DataContext.Provider value={{data, selected, setselected}}>
                 <Routes>
                      <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/selected' element={<Selected />}></Route>
                </Routes>
        </DataContext.Provider>
    </>
  );
}

export default App;
