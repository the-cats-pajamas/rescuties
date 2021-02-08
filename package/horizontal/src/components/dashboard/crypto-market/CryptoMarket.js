import React from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Table
} from 'reactstrap';


const CryptoMarket = () => {
    return <div>
        <Card>
            <CardBody>
                <CardTitle>Crypto Market</CardTitle>
                <CardSubtitle>Overview of Top Selling Items</CardSubtitle>
                <div className="mt-3">
                    <Table className="mb-3" bordered responsive>
                        <thead>
                            <tr className="bg-light">
                                <th>#</th>
                                <th>Currency </th>
                                <th>Price </th>
                                <th>Market Cap </th>
                                <th>Volume 1D </th>
                                <th>Change % (1D)</th>
                                <th>Change % (1W)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-1                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc XRP" title="XRP"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> Ripple</a></h6>
                                    <small className="text-muted">XRP</small>
                                </td>
                                <td>
                                    <p>$1.67</p>
                                </td>
                                <td>
                                    <p>$61,191,183,730</p>
                                </td>
                                <td>
                                    <p>$10,133,400,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 66.26%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -16.48%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-2                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc ETH" title="ETH"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/" > Ethereum</a></h6>
                                    <small className="text-muted">ETH</small>
                                </td>
                                <td>
                                    <p>$1,074.39</p>
                                </td>
                                <td>
                                    <p>$103,792,495,504</p>
                                </td>
                                <td>
                                    <p>$7,764,310,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 26.18%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -11.47%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-3                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc BTC" title="BTC"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> Bitcoin</a></h6>
                                    <small className="text-muted">BTC</small>
                                </td>
                                <td>
                                    <p>$11,723.48</p>
                                </td>
                                <td>
                                    <p>$179,078,267,295</p>
                                </td>
                                <td>
                                    <p>$17,959,900,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 17.66%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -15.25%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-4                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc ADA" title="ADA"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> Cardano</a></h6>
                                    <small className="text-muted">ADA</small>
                                </td>
                                <td>
                                    <p>$0.70</p>
                                </td>
                                <td>
                                    <p>$17,633,890,043</p>
                                </td>
                                <td>
                                    <p>$1,677,430,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 40.79%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -5.81%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-5                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc LTC" title="LTC"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> Litecoin</a></h6>
                                    <small className="text-muted">LTC</small>
                                </td>
                                <td>
                                    <p>$198.80</p>
                                </td>
                                <td>
                                    <p>$10,901,255,520</p>
                                </td>
                                <td>
                                    <p>$1,235,380,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 26.98%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -15.44%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-6                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc XEM" title="XEM"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> NEM</a></h6>
                                    <small className="text-muted">XEM</small>
                                </td>
                                <td>
                                    <p>$1.09</p>
                                </td>
                                <td>
                                    <p>$9,990,569,999</p>
                                </td>
                                <td>
                                    <p>$153,535,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 43.30%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -19.68%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-7                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc NEO" title="NEO"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> NEO</a></h6>
                                    <small className="text-muted">NEO</small>
                                </td>
                                <td>
                                    <p>$149.18</p>
                                </td>
                                <td>
                                    <p>$9,644,490,000</p>
                                </td>
                                <td>
                                    <p>$1,310,130,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 36.98%</span></td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 31.09%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-8                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc DASH" title="DASH"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> Dash</a></h6>
                                    <small className="text-muted">DASH</small>
                                </td>
                                <td>
                                    <p>$865.25</p>
                                </td>
                                <td>
                                    <p>$6,778,308,110</p>
                                </td>
                                <td>
                                    <p>$193,430,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 30.80%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -16.40%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-9                                                                          */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc EOS" title="EOS"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> EOS</a></h6>
                                    <small className="text-muted">EOS</small>
                                </td>
                                <td>
                                    <p>$10.50</p>
                                </td>
                                <td>
                                    <p>$6,460,374,540</p>
                                </td>
                                <td>
                                    <p>$1,566,567,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 25.88%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -6.45%</span></td>
                            </tr>
                            {/*--------------------------------------------------------------------------------*/}
                            {/* Row-10                                                                         */}
                            {/*--------------------------------------------------------------------------------*/}
                            <tr>
                                <td><span><a href="/"><i className=" display-7 cc XMR" title="XMR"></i></a></span></td>
                                <td>
                                    <h6><a className="font-medium link" href="/"> Monero</a></h6>
                                    <small className="text-muted">XMR</small>
                                </td>
                                <td>
                                    <p>$336.10</p>
                                </td>
                                <td>
                                    <p>$5,249,235,889</p>
                                </td>
                                <td>
                                    <p>$176,640,000</p>
                                </td>
                                <td className="no-wrap"><span className="badge badge-success"><i className="fa fa-chevron-up"></i> 28.77%</span></td>
                                <td className="no-wrap"><span className="badge badge-danger"><i className="fa fa-chevron-down"></i> -9.98%</span></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </CardBody>
        </Card>
    </div>
}

export default CryptoMarket;
