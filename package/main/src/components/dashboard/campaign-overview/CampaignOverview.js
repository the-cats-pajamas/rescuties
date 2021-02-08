import React from "react";
import { Line } from 'react-chartjs-2';
import {
    Card,
    CardBody
} from 'reactstrap';

//Line chart
let lineData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        data: [3, 8, 2, 3, 2, 5, 6, 8],
        label: "A",
        borderColor: "#2961ff",
        borderWidth: 1,
        backgroundColor: "rgba(41, 97, 255, .3)",
        pointBackgroundColor: "#2961ff",
    }, {
        data: [7, 6, 5, 8, 6, 7, 2, 1],
        label: "B",
        borderColor: "#4dd0e1",
        borderWidth: 1,
        backgroundColor: "rgba(77, 208, 225, .3)",
        pointBackgroundColor: "#4dd0e1",
    }]
};

let options = {
    elements: { point: { radius: 2 } },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            }
        }]
    },
    layout: {
        padding: {
            left: -10,
            right: 0,
            top: 0,
            bottom: -10
        }
    },
    legend: {
        display: false,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    }
}

const CampaignOverview = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <div className="d-flex align-items-center mb-3">
                    <div>
                        <h1 className="font-bold mb-0">$6,890.68</h1>
                        <span>Overview of email campaigns</span>
                    </div>
                    <div className="ml-auto">
                        <i className="mdi mdi-wallet text-info display-5"></i>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pharetra ligula, sit amet laoreet arcu.Integer.</p>
                <a href="/" className="font-bold">Last Month Summary</a>
            </CardBody>
            <div className="mt-5">
                <div className="chart-wrapper" style={{ height: '160px' }}>
                    <Line data={lineData} options={options} />
                </div>
            </div>
        </Card>
    );
}

export default CampaignOverview;
