import React  from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import HitachiModuleK from './comp/pages/nameList/HitachiModuleK';
import HeaderBar from './comp/pages/headerBar/HeaderBar';
import Home from './comp/pages/Home/Home';
import About from './comp/pages/About/About';
import NameListCls from './comp/pages/nameListCls/NameListCls';
import AddNewUser from './comp/pages/UserManagement/AddNewUser';
import TasksList from './comp/pages/TasksList/TasksList';





function App() {
  return (
    //  <React.Fragment >
    //     <HeaderBar />
    //     <Home /> 
    //     <About />
    //     <HitachiModuleK />
         
    //   </React.Fragment >
    <React.Fragment>
    <BrowserRouter>
    <HeaderBar />
    {/* <Switch></Switch> */}
    <Routes>
      <Route path="/NameList_Func" element={<HitachiModuleK />} />
      <Route path="/NameListCls" element={<NameListCls/>} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="NewTask" element={<AddNewUser />} />
      <Route path="TaskList" element={<TasksList />} />
      
    </Routes>
    </BrowserRouter>
  </React.Fragment>



//     // <React.Fragment>
//     //   <BrowserRouter>
//     //     <Route path="/a"><About /></Route>
//     //   </BrowserRouter> 
//     //  </React.Fragment>
    
  );
}

export default App;
