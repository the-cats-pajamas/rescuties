import React from 'react';
import { Card, CardBody, CardTitle, Media } from 'reactstrap';
// import Rosie from './assets/Rosie.jpg';
// import Dog from './assets/dog.jpg';
import Kitties from './assets/kitties.jpg';
import threeDogs from './assets/threeDogs.jpg';

const MediaComponent = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-folder-multiple-image mr-2"> </i>
            Rescuties - Happy Tails
          </CardTitle>

                <CardBody className="">
                    <Media>
                        <Media left href="">
                            <Media
                                object
                                src={threeDogs}
                                alt="Generic placeholder image"
                                className="img-fluid mr-2"
                                width="300"
                                
                            />
                        </Media>
                        <Media body>
                            <Media heading>Tell Us Your Happy Tail</Media>
                We love hearing your Rescutie success stories! Inspire us with the warm fuzzies and happy stories that come along giving a loving home to a rescue animal.
              </Media>
                    </Media>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-folder-multiple-image mr-2"> </i>
            Kittie Happy Tails
          </CardTitle>

                <CardBody className="">
                    <Media>
                        <Media left href="#">
                            <Media
                                object
                                src={Kitties}
                                className="img-fluid mr-2"
                                width="60"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Flower and Rainbow</Media>
                Flower and Rainbow are brother and sister kitties that were rescued from being abandoned by their mother and found by property owner. They found their forever home with a lovinging family who spoils them rotten. They enjoy daily snuggles with their dogs Dalilah and Kingsley, bagging for thier favorite treats and trying to sneak a snack out of the refridgeratator when their family is not looking.
                <Media className="mt-4">
                                <Media left href="#">
                                    <Media
                                        object
                                        src="http://placekitten.com/60/60"
                                        className="img-fluid mr-2"
                                        width="60"
                                        alt="Generic placeholder image"
                                    />
                                </Media>
                                <Media body>
                                    <Media heading>Nested media heading</Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </Media>
                            </Media>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-folder-multiple-image mr-2"> </i>
            Alignment
          </CardTitle>

                <CardBody className="">
                    <Media>
                        <Media left top href="#">
                            <Media
                                object
                                src="http://placekitten.com/60/60"
                                className="img-fluid mr-2"
                                width="60"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Top aligned media</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
                    </Media>
                    <Media className="mt-4">
                        <Media left middle href="#">
                            <Media
                                object
                                src="http://placekitten.com/60/60"
                                className="img-fluid mr-2"
                                width="60"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Middle aligned media</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
                    </Media>
                    <Media className="mt-4">
                        <Media left bottom href="#">
                            <Media
                                object
                                src="http://placekitten.com/60/60"
                                className="img-fluid mr-2"
                                width="60"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Bottom aligned media</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
                    </Media>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-folder-multiple-image mr-2"> </i>
            Media list
          </CardTitle>

                <CardBody className="">
                    <Media list>
                        <Media tag="li">
                            <Media left href="#">
                                <Media
                                    object
                                    src="http://placekitten.com/60/60"
                                    alt="Generic placeholder image"
                                    className="img-fluid mr-2"
                                    width="60"
                                />
                            </Media>
                            <Media body>
                                <Media heading>Media heading</Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                  <Media className="mt-4">
                                    <Media left href="#">
                                        <Media
                                            object
                                            src="http://placekitten.com/60/60"

                                            alt="Generic placeholder image"
                                            className="img-fluid mr-2"
                                            width="60"
                                        />
                                    </Media>
                                    <Media body>
                                        <Media heading>Nested media heading</Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin commodo. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                      <Media className="mt-4">
                                            <Media left href="#">
                                                <Media
                                                    object
                                                    src="http://placekitten.com/60/60"

                                                    alt="Generic placeholder image"
                                                    className="img-fluid mr-2"
                                                    width="60"
                                                />
                                            </Media>
                                            <Media body>
                                                <Media heading>Nested media heading</Media>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                                        </Media>
                                    </Media>
                                </Media>
                                <Media className="mt-4">
                                    <Media left href="#">
                                        <Media
                                            object
                                            src="http://placekitten.com/60/60"

                                            alt="Generic placeholder image"
                                            className="img-fluid mr-2"
                                            width="60"
                                        />
                                    </Media>
                                    <Media body>
                                        <Media heading>Nested media heading</Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin commodo. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </Media>
                                </Media>
                            </Media>
                        </Media>
                        <Media tag="li" className="mt-4">
                            <Media body>
                                <Media heading>Media heading</Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </Media>
                            <Media right href="#" className="mt-4">
                                <Media
                                    object
                                    src="http://placekitten.com/60/60"

                                    alt="Generic placeholder image"
                                    className="img-fluid mr-2"
                                    width="60"
                                />
                            </Media>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default MediaComponent;
