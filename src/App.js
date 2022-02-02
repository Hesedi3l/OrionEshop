import React from 'react'
import './global.css'
import TopBar from "./components/navigation/topBar/TopBar";
import SideBar from "./components/navigation/sideBar/SideBar";
function App() {
  return (
    <>
        <TopBar />
        <div className="container">
            <SideBar />
        </div>
    </>
  );
}

export default App;
