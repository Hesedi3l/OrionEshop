import React from 'react'
import { Doughnut } from 'react-chartjs-2';


const data = {
    labels: ["Janvier","Février","Mars","Avril","Mai","Juin"],
    datasets: [
        {
            label: "Nombre de paniers",
            data: ["15","20","50","5","36","18"],
            backgroundColor: "red"
        }
    ]
}


function ChartStats() {
    return (
        <Doughnut data={data} />
    );
}

export default ChartStats;