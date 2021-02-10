import React from 'react';
import { Card, CardBody, CardTitle, Media } from 'reactstrap';
import rosie from './assets/Rosie.jpg';
import dog from './assets/dog.jpg';
import Kitties from './assets/kitties.jpg';
import threeDogs from './assets/threeDogs.jpg';
import sammy from './assets/sammy.jpg'
import oldDog from './assets/oldDog.jpg'

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
                We love hearing your Rescutie success stories! Inspire us with the warm fuzzies and happy stories that come along giving a loving home to a rescue animal. Our mission is to promote awareness on the benifits and life long memories that come along with adopting a rescue animal. The partnership created with owner and rescue pet is truly unique and a loving bond that is unbreakable.
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
                                width="90"
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
                                        src={sammy}
                                        className="img-fluid mr-2"
                                        width="150"
                                        alt="Generic placeholder image"
                                    />
                                </Media>
                                <Media body>
                                    <Media heading>Sammy</Media>
                    Sammy is a feral cat that was found roming the grounds of a wrecking yard. He was placed in a loving family that gave him ample space to rome, hunt for mice, demand ample chin scratches at every whim and live a life of freedom mixed with lots of love and attention.
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
            Doggie Happy Tails
          </CardTitle>

                <CardBody className="">
                    <Media>
                        <Media left top href="#">
                            <Media
                                object
                                src={dog}
                                className="img-fluid mr-2"
                                width="120"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Benny</Media>
                Benny was placed on the Rescuties site after his owners had to move and could not take him with them. His new family takes him for daily trips to the dog park where he gets to play with all the neighborhood dogs. Benny's favorite past time is spending time in the backyard chilling with his flock of chickens.
              </Media>
                    </Media>
                    <Media className="mt-4">
                        <Media left middle href="#">
                            <Media
                                object
                                src={rosie}
                                className="img-fluid mr-2"
                                width="60"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Rosie</Media>
                Rosie is a stray that was found around two years old. Her unusually cute fuzzy toes and pearly white smile landed her a loving home with her best friend Kiwi the kitty and a life filled with plentiful toys, romps at the dog park and many hours training for the olympic ball catching competition.
              </Media>
                    </Media>
                    <Media className="mt-4">
                        <Media left bottom href="#">
                            <Media
                                object
                                src={oldDog}
                                className="img-fluid mr-2"
                                width="100"
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body>
                            <Media heading>Beverly</Media>
                Was given up for adoption after loosing her live long companion and owner. Beverly was placed in a loving home who takes her for daily walks around the neighborhood, pampers her with pets, many treats and her very own ramp up to her spot in the bed.
              </Media>
                    </Media>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
           
        </div>
    );
}

export default MediaComponent;
