import { Routes, Route, Navigate } from "react-router-dom";
import Home from './View/Home'
import TabBar from './Components/TabBar/TabBar';
import { tabItem } from './interface/interfaceHome'
import {useState} from 'react'



function App() {
  const [activedPath,setActivedPath]=useState('index')

  const tabList:Array<tabItem> = [{
      title: '个性推荐',
      id: 'index',
  },{
      title: '视频音乐',
      id: 'video',
  }];
  const onTabClick = (val:string)=> {
    if(val!==activedPath) {
      // activedPath = val; video
      setActivedPath(val)
     
    }
  }
 
  return (
    <div className="app">
      <TabBar tabList={tabList} activedPath={activedPath}></TabBar>
      <Routes>
        <Route  path="/index" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/index" replace></Navigate>} />
       </Routes>
    </div>
  );
}

export default App;
