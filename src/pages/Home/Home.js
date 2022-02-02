import React from 'react'
import './Home.scss'
import StatisticsGlobal from "../../components/HomeComponents/statisticsGlobal/StatisticsGlobal";
import ChartStats from "../../components/HomeComponents/chartStats/ChartStats";

function Home() {
    return (
        <>
            <div className="globalStats-container">
                <StatisticsGlobal />
              {/*  <ChartStats />*/}
            </div>
        </>
    );
}

export default Home;