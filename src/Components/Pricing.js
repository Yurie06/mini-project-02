import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


class Pricing extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row align-items-center mx-5 mt-5 pt-4"><br/>
                        <div className="col-lg-6">
                            <div className="card mx-2">
                                <div>
                                <h2>Floor Plan Redraws</h2>
                                </div>
                            
                                <div>
                                    Prizes
                                    <ul>
                                        <li>2D Black & White : <small className="fw-light">300 PhP/Storey</small></li>
                                        <li>2D Full Color : <small className="fw-light">300 PhP/Storey</small></li>
                                        <li>2D Textured : <small className="fw-light">300 PhP/Storey</small></li>
                                    </ul>
                                    Enclusions
                                    <ul>
                                        <li>Up to 3 Revision Allowed</li>
                                        <li>Paper Sizes Selection: "a3" "a4"</li>
                                        <li>File Type Output: Jpg, Pdf, Tif, Png</li>
                                    </ul>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Fill out form
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="Form.html">2D Black & White</Dropdown.Item>
                                        <Dropdown.Item href="Form.html">2D Full Color</Dropdown.Item>
                                        <Dropdown.Item href="Form.html">2D Textured</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="card mx-2">
                            <div>
                            <h2>3D Visualization</h2>
                            </div>
                            <div>
                            Prizes
                            <ul>
                                <li>Bare Modeling : <small className="fw-light">700 PhP/Scene</small></li>
                                <li>Realistic Rendering : <small className="fw-light">1,100 PhP/Scene</small></li>
                                <li>Fly/Walk-Through Animation  : <small className="fw-light">1,500 PhP/Scene</small></li>
                            </ul>
                            Enclusions
                            <ul>
                                <li>Up to 3 Revision Allowed</li>
                                <li>Paper Sizes Selection: "a3" "a4"</li>
                                <li>File Type Output: Jpg, Pdf, Tif, Png, Mp4(Animation)</li>
                            </ul>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Fill out form
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="Form.html">Bare Modeling</Dropdown.Item>
                                    <Dropdown.Item href="Form.html">Realistic Rendering</Dropdown.Item>
                                    <Dropdown.Item href="Form.html">Fly-tru Animation</Dropdown.Item>
                                    <Dropdown.Item href="Form.html">Walk-tru Animation</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                        </div>    
                    </div> 

                    <div className="row align-items-center mx-5 my-3">
                        <div className="col-lg-6">
                        <div className="card mx-2">
                            <div>
                            <h2>Working Drawings</h2>
                            </div>
                            <div>
                            Prizes
                            <ul>
                                <li>Bungalow : <small className="fw-light">1,200 PhP/Sheet</small></li>
                                <li>2 Storey : <small className="fw-light">1,200 PhP/Sheet</small></li>
                                <li>3 Storey : <small className="fw-light">1,200 PhP/Sheet</small></li>
                            </ul>
                            Enclusions
                            <ul>
                                <li>Up to 3 Revision Allowed</li>
                                <li>Paper Sizes Selection: "a3" "a1"</li>
                                <li>File Type Output: Pdf</li>
                            </ul>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Fill out form
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="Form.html">Bungalow</Dropdown.Item>
                                    <Dropdown.Item href="Form.html">2 Storey</Dropdown.Item>
                                    <Dropdown.Item href="Form.html">3 Storey</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="card mx-2">
                            <div>
                            <h2>Construction Estimates</h2>
                            </div>
                            <div>
                            Prizes
                            <ul>
                                <li>Lumpsum Estimate : <small className="fw-light">10 PhP/Square Mtr.</small></li>
                                <li>Itemize Estimate : <small className="fw-light">30 PhP/Square Mtr.</small></li><br/>
                            </ul>
                            Enclusions
                            <ul>
                                <li>BOQ</li>
                                <li>BOM</li>
                                <li>Gantt Chart</li>
                            </ul>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Fill out form
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="Form.html">Lumpsum Estimate</Dropdown.Item>
                                    <Dropdown.Item href="Form.html">Itemize Estimate</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                        </div>    
                    </div>    
                </div>
            </div>
        );
    }
}

export default Pricing;