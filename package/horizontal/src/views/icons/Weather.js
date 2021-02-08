import React from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

const Weather = () => {
    return <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>25 icons v2.0 <span className="label label-sm label-success">New </span></CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-cloudy-high"></i> wi wi-day-cloudy-high </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moonrise"></i> wi wi-moonrise </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-volcano"></i> wi wi-volcano </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-light-wind"></i> wi wi-day-light-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moonset"></i> wi wi-moonset </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-flood"></i> wi wi-flood </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-train"></i> wi wi-train </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-sleet"></i> wi wi-day-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-sleet"></i> wi wi-night-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sandstorm"></i> wi wi-sandstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-small-craft-advisory"></i> wi wi-small-craft-advisory </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-haze"></i> wi wi-day-haze </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-sleet"></i> wi wi-night-alt-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-tsunami"></i> wi wi-tsunami </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-gale-warning"></i> wi wi-gale-warning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-cloudy-high"></i> wi wi-night-cloudy-high </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-raindrop"></i> wi wi-raindrop </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-earthquake"></i> wi wi-earthquake </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-storm-warning"></i> wi wi-storm-warning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-partly-cloudy"></i> wi wi-night-alt-partly-cloudy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-barometer"></i> wi wi-barometer </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-fire"></i> wi wi-fire </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-hurricane-warning"></i> wi wi-hurricane-warning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sleet"></i> wi wi-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-humidity"></i> wi wi-humidity </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-2                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Daytime icons</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-sunny"></i> wi wi-day-sunny </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-cloudy"></i> wi wi-day-cloudy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-cloudy-gusts"></i> wi wi-day-cloudy-gusts </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-cloudy-windy"></i> wi wi-day-cloudy-windy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-fog"></i> wi wi-day-fog </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-hail"></i> wi wi-day-hail </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-haze"></i> wi wi-day-haze </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-lightning"></i> wi wi-day-lightning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-rain"></i> wi wi-day-rain </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-rain-mix"></i> wi wi-day-rain-mix </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-rain-wind"></i> wi wi-day-rain-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-showers"></i> wi wi-day-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-sleet"></i> wi wi-day-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-sleet-storm"></i> wi wi-day-sleet-storm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-snow"></i> wi wi-day-snow </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-snow-thunderstorm"></i> wi wi-day-snow-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-snow-wind"></i> wi wi-day-snow-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-sprinkle"></i> wi wi-day-sprinkle </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-storm-showers"></i> wi wi-day-storm-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-sunny-overcast"></i> wi wi-day-sunny-overcast </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-thunderstorm"></i> wi wi-day-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-windy"></i> wi wi-day-windy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-solar-eclipse"></i> wi wi-solar-eclipse </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-hot"></i> wi wi-hot </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-cloudy-high"></i> wi wi-day-cloudy-high </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-day-light-wind"></i> wi wi-day-light-wind </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-3                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Night Time icons</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-clear"></i> wi wi-night-clear </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-cloudy"></i> wi wi-night-alt-cloudy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-cloudy-gusts"></i> wi wi-night-alt-cloudy-gusts </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-cloudy-windy"></i> wi wi-night-alt-cloudy-windy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-hail"></i> wi wi-night-alt-hail </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-lightning"></i> wi wi-night-alt-lightning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-rain"></i> wi wi-night-alt-rain </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-rain-mix"></i> wi wi-night-alt-rain-mix </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-rain-wind"></i> wi wi-night-alt-rain-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-showers"></i> wi wi-night-alt-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-sleet"></i> wi wi-night-alt-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-sleet-storm"></i> wi wi-night-alt-sleet-storm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-snow"></i> wi wi-night-alt-snow </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-snow-thunderstorm"></i> wi wi-night-alt-snow-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-snow-wind"></i> wi wi-night-alt-snow-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-sprinkle"></i> wi wi-night-alt-sprinkle </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-storm-showers"></i> wi wi-night-alt-storm-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-thunderstorm"></i> wi wi-night-alt-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-cloudy"></i> wi wi-night-cloudy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-cloudy-gusts"></i> wi wi-night-cloudy-gusts </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-cloudy-windy"></i> wi wi-night-cloudy-windy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-fog"></i> wi wi-night-fog </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-hail"></i> wi wi-night-hail </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-lightning"></i> wi wi-night-lightning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-partly-cloudy"></i> wi wi-night-partly-cloudy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-rain"></i> wi wi-night-rain </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-rain-mix"></i> wi wi-night-rain-mix </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-rain-wind"></i> wi wi-night-rain-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-showers"></i> wi wi-night-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-sleet"></i> wi wi-night-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-sleet-storm"></i> wi wi-night-sleet-storm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-snow"></i> wi wi-night-snow </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-snow-thunderstorm"></i> wi wi-night-snow-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-snow-wind"></i> wi wi-night-snow-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-sprinkle"></i> wi wi-night-sprinkle </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-storm-showers"></i> wi wi-night-storm-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-thunderstorm"></i> wi wi-night-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-lunar-eclipse"></i> wi wi-lunar-eclipse </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-stars"></i> wi wi-stars </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-storm-showers"></i> wi wi-storm-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-thunderstorm"></i> wi wi-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-cloudy-high"></i> wi wi-night-alt-cloudy-high </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-cloudy-high"></i> wi wi-night-cloudy-high </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-night-alt-partly-cloudy"></i> wi wi-night-alt-partly-cloudy </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-4                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Neutral icons</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloud"></i> wi wi-cloud </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloudy"></i> wi wi-cloudy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloudy-gusts"></i> wi wi-cloudy-gusts </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloudy-windy"></i> wi wi-cloudy-windy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-fog"></i> wi wi-fog </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-hail"></i> wi wi-hail </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-rain"></i> wi wi-rain </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-rain-mix"></i> wi wi-rain-mix </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-rain-wind"></i> wi wi-rain-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-showers"></i> wi wi-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sleet"></i> wi wi-sleet </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-snow"></i> wi wi-snow </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sprinkle"></i> wi wi-sprinkle </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-storm-showers"></i> wi wi-storm-showers </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-thunderstorm"></i> wi wi-thunderstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-snow-wind"></i> wi wi-snow-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-snow"></i> wi wi-snow </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-smog"></i> wi wi-smog </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-smoke"></i> wi wi-smoke </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-lightning"></i> wi wi-lightning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-raindrops"></i> wi wi-raindrops </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-raindrop"></i> wi wi-raindrop </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-dust"></i> wi wi-dust </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-snowflake-cold"></i> wi wi-snowflake-cold </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-windy"></i> wi wi-windy </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-strong-wind"></i> wi wi-strong-wind </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sandstorm"></i> wi wi-sandstorm </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-earthquake"></i> wi wi-earthquake </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-fire"></i> wi wi-fire </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-flood"></i> wi wi-flood </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-meteor"></i> wi wi-meteor </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-tsunami"></i> wi wi-tsunami </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-volcano"></i> wi wi-volcano </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-hurricane"></i> wi wi-hurricane </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-tornado"></i> wi wi-tornado </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-small-craft-advisory"></i> wi wi-small-craft-advisory </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-gale-warning"></i> wi wi-gale-warning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-storm-warning"></i> wi wi-storm-warning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-hurricane-warning"></i> wi wi-hurricane-warning </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-wind-direction"></i> wi wi-wind-direction </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-5                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Moon Phase icons</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-new"></i> wi wi-moon-new </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-cresent-1"></i> wi wi-moon-waxing-cresent-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-cresent-2"></i> wi wi-moon-waxing-cresent-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-cresent-3"></i> wi wi-moon-waxing-cresent-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-cresent-4"></i> wi wi-moon-waxing-cresent-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-cresent-5"></i> wi wi-moon-waxing-cresent-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-cresent-6"></i> wi wi-moon-waxing-cresent-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-first-quarter"></i> wi wi-moon-first-quarter </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-gibbous-1"></i> wi wi-moon-waxing-gibbous-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-gibbous-2"></i> wi wi-moon-waxing-gibbous-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-gibbous-3"></i> wi wi-moon-waxing-gibbous-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-gibbous-4"></i> wi wi-moon-waxing-gibbous-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-gibbous-5"></i> wi wi-moon-waxing-gibbous-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waxing-gibbous-6"></i> wi wi-moon-waxing-gibbous-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-full"></i> wi wi-moon-full </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-gibbous-1"></i> wi wi-moon-waning-gibbous-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-gibbous-2"></i> wi wi-moon-waning-gibbous-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-gibbous-3"></i> wi wi-moon-waning-gibbous-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-gibbous-4"></i> wi wi-moon-waning-gibbous-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-gibbous-5"></i> wi wi-moon-waning-gibbous-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-gibbous-6"></i> wi wi-moon-waning-gibbous-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-third-quarter"></i> wi wi-moon-third-quarter </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-crescent-1"></i> wi wi-moon-waning-crescent-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-crescent-2"></i> wi wi-moon-waning-crescent-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-crescent-3"></i> wi wi-moon-waning-crescent-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-crescent-4"></i> wi wi-moon-waning-crescent-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-crescent-5"></i> wi wi-moon-waning-crescent-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-waning-crescent-6"></i> wi wi-moon-waning-crescent-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-new"></i> wi wi-moon-alt-new </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-cresent-1"></i> wi wi-moon-alt-waxing-cresent-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-cresent-2"></i> wi wi-moon-alt-waxing-cresent-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-cresent-3"></i> wi wi-moon-alt-waxing-cresent-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-cresent-4"></i> wi wi-moon-alt-waxing-cresent-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-cresent-5"></i> wi wi-moon-alt-waxing-cresent-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-cresent-6"></i> wi wi-moon-alt-waxing-cresent-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-first-quarter"></i> wi wi-moon-alt-first-quarter </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-1"></i> wi wi-moon-alt-waxing-gibbous-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-2"></i> wi wi-moon-alt-waxing-gibbous-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-3"></i> wi wi-moon-alt-waxing-gibbous-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-4"></i> wi wi-moon-alt-waxing-gibbous-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-5"></i> wi wi-moon-alt-waxing-gibbous-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waxing-gibbous-6"></i> wi wi-moon-alt-waxing-gibbous-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-full"></i> wi wi-moon-alt-full </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-gibbous-1"></i> wi wi-moon-alt-waning-gibbous-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-gibbous-2"></i> wi wi-moon-alt-waning-gibbous-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-gibbous-3"></i> wi wi-moon-alt-waning-gibbous-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-gibbous-4"></i> wi wi-moon-alt-waning-gibbous-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-gibbous-5"></i> wi wi-moon-alt-waning-gibbous-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-gibbous-6"></i> wi wi-moon-alt-waning-gibbous-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-third-quarter"></i> wi wi-moon-alt-third-quarter </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-crescent-1"></i> wi wi-moon-alt-waning-crescent-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-crescent-2"></i> wi wi-moon-alt-waning-crescent-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-crescent-3"></i> wi wi-moon-alt-waning-crescent-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-crescent-4"></i> wi wi-moon-alt-waning-crescent-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-crescent-5"></i> wi wi-moon-alt-waning-crescent-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moon-alt-waning-crescent-6"></i> wi wi-moon-alt-waning-crescent-6 </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-6                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Other icons</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-alien"></i> wi wi-alien </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-celsius"></i> wi wi-celsius </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-fahrenheit"></i> wi wi-fahrenheit </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-degrees"></i> wi wi-degrees </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-thermometer"></i> wi wi-thermometer </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-thermometer-exterior"></i> wi wi-thermometer-exterior </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-thermometer-internal"></i> wi wi-thermometer-internal </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloud-down"></i> wi wi-cloud-down </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloud-up"></i> wi wi-cloud-up </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-cloud-refresh"></i> wi wi-cloud-refresh </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-horizon"></i> wi wi-horizon </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-horizon-alt"></i> wi wi-horizon-alt </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sunrise"></i> wi wi-sunrise </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-sunset"></i> wi wi-sunset </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moonrise"></i> wi wi-moonrise </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-moonset"></i> wi wi-moonset </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-refresh"></i> wi wi-refresh </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-refresh-alt"></i> wi wi-refresh-alt </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-umbrella"></i> wi wi-umbrella </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-barometer"></i> wi wi-barometer </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-humidity"></i> wi wi-humidity </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-na"></i> wi wi-na </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-train"></i> wi wi-train </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi "></i> wi </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-7                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Time icons</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-1"></i> wi wi-time-1 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-2"></i> wi wi-time-2 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-3"></i> wi wi-time-3 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-4"></i> wi wi-time-4 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-5"></i> wi wi-time-5 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-6"></i> wi wi-time-6 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-7"></i> wi wi-time-7 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-8"></i> wi wi-time-8 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-9"></i> wi wi-time-9 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-10"></i> wi wi-time-10 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-11"></i> wi wi-time-11 </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-time-12"></i> wi wi-time-12 </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/* Card-8                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Card>
            <CardBody>
                <CardTitle>Directional Arrows</CardTitle>
                <div className="icon-list-demo">
                    <Row className="icons" id="icons">
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-up"></i> wi wi-direction-up </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-up-right"></i> wi wi-direction-up-right </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-right"></i> wi wi-direction-right </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-down-right"></i> wi wi-direction-down-right </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-down"></i> wi wi-direction-down </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-down-left"></i> wi wi-direction-down-left </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-left"></i> wi wi-direction-left </Col>
                        <Col xs="6" md="4" lg="3" className="w-icon"> <i className="wi wi-direction-up-left"></i> wi wi-direction-up-left </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
        {/*--------------------------------------------------------------------------------*/}
        {/*End Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
    </div>
}

export default Weather;
