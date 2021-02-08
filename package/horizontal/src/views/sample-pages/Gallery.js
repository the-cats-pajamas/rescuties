import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    Modal,
    ModalHeader,
    CardColumns
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/weatherbg.jpg';
import img8 from '../../assets/images/background/img5.jpg';
import img9 from '../../assets/images/background/img5.png';

const Gallery = (props) => {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);
    const [modal7, setModal7] = useState(false);
    const [modal8, setModal8] = useState(false);
    const [modal11, setModal11] = useState(false);
    const [modal12, setModal12] = useState(false);
    const [modal13, setModal13] = useState(false);
    const [modal14, setModal14] = useState(false);
    const [modal15, setModal15] = useState(false);
    const [modal16, setModal16] = useState(false);
    const [modal17, setModal17] = useState(false);

    const toggle1 = () => {
        setModal1(!modal1);
    }

    const toggle2 = () => {
        setModal2(!modal2);
    }

    const toggle3 = () => {
        setModal3(!modal3);
    }

    const toggle4 = () => {
        setModal4(!modal4);
    }

    const toggle5 = () => {
        setModal5(!modal5);
    }

    const toggle6 = () => {
        setModal6(!modal6);
    }

    const toggle7 = () => {
        setModal7(!modal7);
    }

    const toggle8 = () => {
        setModal8(!modal8);
    }

    const toggle11 = () => {
        setModal11(!modal11);
    }
    const toggle12 = () => {
        setModal12(!modal12);
    }
    const toggle13 = () => {
        setModal13(!modal13);
    }
    const toggle14 = () => {
        setModal14(!modal14);
    }
    const toggle15 = () => {
        setModal15(!modal15);
    }
    const toggle16 = () => {
        setModal16(!modal16);
    }
    const toggle17 = () => {
        setModal17(!modal17);
    }

    return <div>
        <h5 className="mb-4">Gallery</h5>
        <Row>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img1} alt="Card image cap" onClick={toggle1.bind(null)} />
                    <Modal isOpen={modal1} toggle={toggle1.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle1.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 1
              </ModalHeader>
                        <img src={img1} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img2} alt="Card image cap" onClick={toggle2.bind(null)} />
                    <Modal isOpen={modal2} toggle={toggle2.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle2.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 2
              </ModalHeader>
                        <img src={img2} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img3} alt="Card image cap" onClick={toggle3.bind(null)} />
                    <Modal isOpen={modal3} toggle={toggle3.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle3.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 3
              </ModalHeader>
                        <img src={img3} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img4} alt="Card image cap" onClick={toggle4.bind(null)} />
                    <Modal isOpen={modal4} toggle={toggle4.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle4.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 4
              </ModalHeader>
                        <img src={img4} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img5} alt="Card image cap" onClick={toggle5.bind(null)} />
                    <Modal isOpen={modal5} toggle={toggle5.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle5.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 5
              </ModalHeader>
                        <img src={img5} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img6} alt="Card image cap" onClick={toggle6.bind(null)} />
                    <Modal isOpen={modal6} toggle={toggle6.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle6.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 6
              </ModalHeader>
                        <img src={img6} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img4} alt="Card image cap" onClick={toggle7.bind(null)} />
                    <Modal isOpen={modal7} toggle={toggle7.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle7.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 7
              </ModalHeader>
                        <img src={img4} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" lg="3">
                <Card>
                    <CardImg top width="100%" src={img1} alt="Card image cap" onClick={toggle8.bind(null)} />
                    <Modal isOpen={modal8} toggle={toggle8.bind(null)} className={props.className}>
                        <ModalHeader toggle={toggle8.bind(null)}>
                            <i className="mdi mdi-camera-iris"></i> Image 8
              </ModalHeader>
                        <img src={img1} alt="" width="100%" />
                    </Modal>
                    <CardBody className="text-center">
                        <CardTitle>Project title</CardTitle>
                        <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h5 className="mb-4 mt-4">Other Gallery</h5>
        <CardColumns>
            <Card>
                <CardImg top width="100%" src={img7} alt="Card image cap" onClick={toggle11.bind(null)} />
                <Modal isOpen={modal11} toggle={toggle11.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle11.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 7
            </ModalHeader>
                    <img src={img7} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img9} alt="Card image cap" onClick={toggle12.bind(null)} />
                <Modal isOpen={modal12} toggle={toggle12.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle12.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 9
            </ModalHeader>
                    <img src={img9} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img8} alt="Card image cap" onClick={toggle13.bind(null)} />
                <Modal isOpen={modal13} toggle={toggle13.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle13.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 8
            </ModalHeader>
                    <img src={img8} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img3} alt="Card image cap" onClick={toggle14.bind(null)} />
                <Modal isOpen={modal14} toggle={toggle14.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle14.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 3
            </ModalHeader>
                    <img src={img3} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img4} alt="Card image cap" onClick={toggle15.bind(null)} />
                <Modal isOpen={modal15} toggle={toggle15.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle15.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 4
            </ModalHeader>
                    <img src={img4} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img6} alt="Card image cap" onClick={toggle16.bind(null)} />
                <Modal isOpen={modal16} toggle={toggle16.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle16.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 6
            </ModalHeader>
                    <img src={img6} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img9} alt="Card image cap" onClick={toggle17.bind(null)} />
                <Modal isOpen={modal17} toggle={toggle17.bind(null)} className={props.className}>
                    <ModalHeader toggle={toggle17.bind(null)}>
                        <i className="mdi mdi-camera-iris"></i> Image 9
            </ModalHeader>
                    <img src={img9} alt="" width="100%" />
                </Modal>
                <CardBody className="text-center">
                    <CardTitle>Project title</CardTitle>
                    <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
                </CardBody>
            </Card>
        </CardColumns>
    </div>;
}

export default Gallery;
