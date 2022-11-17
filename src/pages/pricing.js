import React from "react";

class Pricing extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div class="row align-items-center mx-5 mt-5 pt-4"><br/>
                        <div class="col-lg-6">
                            <div class="card mx-2">
                                <div>
                                <h2>Floor Plan Redraws</h2>
                                </div>
                            
                                <div>
                                    Prizes
                                    <ul>
                                        <li>2D Black & White : <small class="fw-light">300 PhP/Storey</small></li>
                                        <li>2D Full Color : <small class="fw-light">300 PhP/Storey</small></li>
                                        <li>2D Textured : <small class="fw-light">300 PhP/Storey</small></li>
                                    </ul>
                                    Enclusions
                                    <ul>
                                        <li>Up to 3 Revision Allowed</li>
                                        <li>Paper Sizes Selection: "a3" "a4"</li>
                                        <li>File Type Output: Jpg, Pdf, Tif, Png</li>
                                    </ul>
                                    <div class="dropdown">
                                        <button class="btn btn-dark bg-opacity-25 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Fill out form
                                        </button>
                                        <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="Form.html">2D Black & White</a></li>
                                        <li><a class="dropdown-item" href="Form.html">2D Full Color</a></li>
                                        <li><a class="dropdown-item" href="Form.html">2D Textured</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                        <div class="card mx-2">
                            <div>
                            <h2>3D Visualization</h2>
                            </div>
                            <div>
                            Prizes
                            <ul>
                                <li>Bare Modeling : <small class="fw-light">700 PhP/Scene</small></li>
                                <li>Realistic Rendering : <small class="fw-light">1,100 PhP/Scene</small></li>
                                <li>Fly/Walk-Through Animation  : <small class="fw-light">1,500 PhP/Scene</small></li>
                            </ul>
                            Enclusions
                            <ul>
                                <li>Up to 3 Revision Allowed</li>
                                <li>Paper Sizes Selection: "a3" "a4"</li>
                                <li>File Type Output: Jpg, Pdf, Tif, Png, Mp4(Animation)</li>
                            </ul>
                            <div class="dropdown">
                                <button class="btn btn-dark bg-opacity-25 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fill out form
                                </button>
                                <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="Form.html">Bare Modeling</a></li>
                                <li><a class="dropdown-item" href="Form.html">Realistic Rendering</a></li>
                                <li><a class="dropdown-item" href="Form.html">Fly-tru Animation</a></li>
                                <li><a class="dropdown-item" href="Form.html">Walk-tru Animation</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>    
                    </div> 

                    <div class="row align-items-center mx-5 my-3">
                        <div class="col-lg-6">
                        <div class="card mx-2">
                            <div>
                            <h2>Working Drawings</h2>
                            </div>
                            <div>
                            Prizes
                            <ul>
                                <li>Bungalow : <small class="fw-light">1,200 PhP/Sheet</small></li>
                                <li>2 Storey : <small class="fw-light">1,200 PhP/Sheet</small></li>
                                <li>3 Storey : <small class="fw-light">1,200 PhP/Sheet</small></li>
                            </ul>
                            Enclusions
                            <ul>
                                <li>Up to 3 Revision Allowed</li>
                                <li>Paper Sizes Selection: "a3" "a1"</li>
                                <li>File Type Output: Pdf</li>
                            </ul>
                            <div class="dropdown">
                                <button class="btn btn-dark bg-opacity-25 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fill out form
                                </button>
                                <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="Form.html">Bungalow</a></li>
                                <li><a class="dropdown-item" href="Form.html">2 Storey</a></li>
                                <li><a class="dropdown-item" href="Form.html">3 Storey</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-6">
                        <div class="card mx-2">
                            <div>
                            <h2>Construction Estimates</h2>
                            </div>
                            <div>
                            Prizes
                            <ul>
                                <li>Lumpsum Estimate : <small class="fw-light">10 PhP/Square Mtr.</small></li>
                                <li>Itemize Estimate : <small class="fw-light">30 PhP/Square Mtr.</small></li><br/>
                            </ul>
                            Enclusions
                            <ul>
                                <li>BOQ</li>
                                <li>BOM</li>
                                <li>Gantt Chart</li>
                            </ul>
                            <div class="dropdown">
                                <button class="btn btn-dark bg-opacity-25 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fill out form
                                </button>
                                <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="Form.html">Lumpsum Estimate</a></li>
                                <li><a class="dropdown-item" href="Form.html">Itemize Estimate</a></li>
                                </ul>
                            </div>
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