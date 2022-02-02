import React from 'react'
import './global.css'
import TopBar from "./components/navigation/topBar/TopBar";
import SideBar from "./components/navigation/sideBar/SideBar";
import Home from "./pages/Home/Home";
import ChartStats from "./components/HomeComponents/chartStats/ChartStats";
import Stocks from "./pages/Stocks/Stocks";

function App() {
  return (
    <>
        <TopBar />
        <div className="container">
            <SideBar />
            <div className="content">
               {/*<Home />*/}
               <Stocks />
            </div>
        </div>
    </>
  );
}

export default App;
