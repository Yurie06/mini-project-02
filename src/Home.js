import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../component/HeroSlider";


class Home extends React.Component {
    render() {
        return ( <>
                <body className="bgimg">
                    <HeroSlider />
                    <div class="row">
                        <div class="row align-items-center">
                            <div class="sketch col-lg-4 py-5 px-5">
                            <h1 class="display-9 text-light">Sketch plan tutorial</h1><br/>
                            <p class="text-light">Sketching is much more than Link scribble on Link piece of paper. It is Link powerful process that aids in discovering the best ideas.</p>
                            <Link class="btn btn-outline-secondary text-light" type="button" role="button" to="/igned_up.html">Get assistance</Link>
                            </div>
                            <div class="col-lg-4 img-fluid">
                                <iframe width="400" height="350" src="https://www.youtube.com/embed/gkL2X0VVg0Q" title="HOW TO DESIGN A FLOOR PLAN FOR UPCOMING ARCHITECTURE STUDENT." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="col-lg-4 img-fluid py-2 px-2">
                                <iframe width="400" height="350" src="https://www.youtube.com/embed/X_qReDsPGcM" title="I will redraw floor plan from matterport or sketch - 2D Drawings & Floor Plans Services" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <section class="text-light">
                        <h1 class="process pt-4">The Process</h1>
                        <div class="row">
                            <div class="col-lg-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                </svg>
                                <div class="steps">
                                    <h3>UPLOAD</h3>
                                    <p>Upload your photos from your mobile, tablet or desktop computer.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                <div class="steps">
                                    <h3>WE EDIT</h3>
                                    <p>Our global team of photo editing experts will enhance your images within 24 hours. 100% satisfaction guaranteed.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                </svg>
                                <div class="steps">
                                    <h3>QUALITY ASSURANCE</h3>
                                    <p>We have a dedicated quality control team to ensure editing is performed to the highest of standards..</p>
                                </div>
                            </div>
                            <div class="col-lg-3 text-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                <div class="steps">
                                    <h3>DOWNLOAD</h3>
                                    <p>Download the professionally edited files from your account as soon as they are complete.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </body>
            </>
        );
    }
}

export default Home;