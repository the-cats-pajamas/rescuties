import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Weather = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Temp Guide</CardTitle>
                <div className="d-flex align-items-center flex-row m-t-30">
                    <div className="display-5 text-info"><i className="wi wi-day-showers"></i> <span>73<sup>°</sup></span></div>
                    <div className="m-l-10">
                        <h3 className="m-b-0">Saturday</h3><small>Ahmedabad, India</small>
                    </div>
                </div>
                <table className="table no-border mini-table m-t-20">
                    <tbody>
                        <tr>
                            <td className="text-muted">Wind</td>
                            <td className="font-medium">ESE 17 mph</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Humidity</td>
                            <td className="font-medium">83%</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Pressure</td>
                            <td className="font-medium">28.56 in</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Cloud Cover</td>
                            <td className="font-medium">78%</td>
                        </tr>
                    </tbody>
                </table>
                <ul className="row list-style-none text-center m-t-30">
                    <li className="col-3">
                        <h4 className="text-info"><i className="wi wi-day-sunny"></i></h4>
                        <span className="d-block text-muted">09:30</span>
                        <h3 className="m-t-5">70<sup>°</sup></h3>
                    </li>
                    <li className="col-3">
                        <h4 className="text-info"><i className="wi wi-day-cloudy"></i></h4>
                        <span className="d-block text-muted">11:30</span>
                        <h3 className="m-t-5">72<sup>°</sup></h3>
                    </li>
                    <li className="col-3">
                        <h4 className="text-info"><i className="wi wi-day-hail"></i></h4>
                        <span className="d-block text-muted">13:30</span>
                        <h3 className="m-t-5">75<sup>°</sup></h3>
                    </li>
                    <li className="col-3">
                        <h4 className="text-info"><i className="wi wi-day-sprinkle"></i></h4>
                        <span className="d-block text-muted">15:30</span>
                        <h3 className="m-t-5">76<sup>°</sup></h3>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
}

export default Weather;
