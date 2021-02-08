import React from 'react';
import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

const Basictable = () => {

    return <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
        <Row>
            {/*--------------------------------------------------------------------------------*/}
            {/* Default Table                                                                  */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <div className="p-3">
                        <CardTitle><i className="mdi mdi-border-all mr-2"></i>Default Table</CardTitle>
                        <CardSubtitle className="mb-0">Using the most basic table markup, here’s how <code>Table</code>-based tables look in Reactstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.</CardSubtitle>
                    </div>
                    <CardBody className="border-top">
                        <h6><i className="mr-1 font-18 mdi mdi-numeric-1-box-multiple-outline"></i> Table With Outside Padding</h6>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h6><i className="mr-1 font-18 mdi mdi-numeric-2-box-multiple-outline"></i> Table Without Outside Padding</h6>
                    </CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Table Header                                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <div className="p-3">
                        <CardTitle><i className="mdi mdi-border-all mr-2"></i>Table Header</CardTitle>
                        <CardSubtitle className="mb-0">Similar to tables, use the modifier classes .thead-light to make <code>&lt;thead&gt;</code>s appear light.</CardSubtitle>
                    </div>
                    <Table responsive>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Striped rows                                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <div className="p-3">
                        <CardTitle><i className="mdi mdi-border-all mr-2"></i>Striped rows</CardTitle>
                        <CardSubtitle className="mb-0">Use <code>striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</CardSubtitle>
                    </div>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Bordered Table                                                                 */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <div className="p-3">
                        <CardTitle><i className="mdi mdi-border-all mr-2"></i>Bordered Table</CardTitle>
                        <CardSubtitle className="mb-0">Use <code>bordered</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</CardSubtitle>
                    </div>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Hoverable Rows                                                                 */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <div className="p-3">
                        <CardTitle><i className="mdi mdi-border-all mr-2"></i>Hoverable Rows</CardTitle>
                        <CardSubtitle className="mb-0">Use <code>hover</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</CardSubtitle>
                    </div>
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Responsive Table                                                               */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle><i className="mdi mdi-border-all mr-2"></i>Responsive Table</CardTitle>
                        <CardSubtitle className="mb-0">Use <code>responsive</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</CardSubtitle>
                    </CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Col>
        </Row>
        {/*--------------------------------------------------------------------------------*/}
        {/*End Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
    </div >

}

export default Basictable;
