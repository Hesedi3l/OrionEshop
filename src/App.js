import React from 'react'
/**/
import './global.css'
import TopBar from "./components/navigation/topBar/TopBar";
import SideBar from "./components/navigation/sideBar/SideBar";
import OrionRoutes from "./routes";


function App() {
  return (
    <>
        <TopBar />
        <div className="container">
            <SideBar />
            <div className="content">
                <OrionRoutes />
            </div>
        </div>
    </>
  );
}

export default App;
