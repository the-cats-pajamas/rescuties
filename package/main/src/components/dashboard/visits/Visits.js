import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import { Bar } from 'react-chartjs-2';

let barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct'],
    datasets: [{
        label: 'A',
        backgroundColor: '#4fc3f7',
        borderColor: '#4fc3f7',
        data: [12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 9, 11, 9, 10, 12, 10]
    }]
};

let barOptions = {
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            },
            barThickness: 5
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
    tooltips: {
        enabled: true,
        intersect: false,
        titleMarginBottom: 1,
        bodySpacing: 1,
        yPadding: 2,

    },
    maintainAspectRatio: false,
    legend: {
        display: false,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    }
}

const Visits = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Total Visits</CardTitle>
                <h4 className="font-bold mt-3 mb-2">3,25,346</h4>
                <CardSubtitle className="mb-0">Total Earnings of the Month</CardSubtitle>
            </CardBody>
            <div className="text-center">
                <Bar
                    data={barData}
                    width={100}
                    height={62}
                    options={barOptions} />
            </div>
        </Card >
    );
}

export default Visits;
