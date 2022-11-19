import React from "react";
import { Link } from "react-router-dom";
// import Sign from "../component/SignIn";

class Services extends React.Component {
    render() {
        return (
            <div>
                <div class="align-items-center mx-5 my-3">
                    <h1 class="col-lg-12 text-start text-light pt-5 px-3" >INSIGHTS</h1>
                    <div class="col-lg-6">
                        <div class="card mx-2 bg-secondary">
                            <div class="card-header bg-dark bg-opacity-75 text-light">
                                <h2>Floor Plan Redraws</h2>
                            </div>
                            <div class="card-body">
                                <p>The floor plan allows buyers to see how each room is laid out, including the real size of each room, how the living rooms link, the actual position of the kitchen, bedroom, garage, etc. It lets the client perceive the accurate look and precise dimension of Link property using Link 2D or 3D floor plan. Simply send us Link rough sketch with measurements and our team of experts will turn it into an incredible 2D or 3D floor plan to showcase your property to prospective buyers.</p>
                                <Link class="btn btn-outline-dark text-light" type="button" role="button" to="/SignUp">Let's work together</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 my-4">
                        <div class="card mx-2 bg-secondary">
                            <div class="card-header bg-dark bg-opacity-75 text-light">
                                <h2>3D Visualization</h2>
                            </div>
                            <div class="card-body">
                                <p>3D visualization gives digital 3D representations of real life objects. The purpose is to provide Link digital presentation of how that object will look like. The term 3D visualization is used synonymously with 3D graphics, 3D rendering, computer generated imagery (CGI), and other terms. They all basically refer to the process by which graphical content is created using 3D software. It’s Link technology that has become mainstream over the last few decades and has evolved into one of the most viable options for producing high-quality digital content.</p>
                                <Link class="btn btn-outline-dark text-light" type="button" role="button" to="/SignUp">Let's work together</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 my-4">
                        <div class="card mx-2 bg-secondary">
                            <div class="card-header bg-dark bg-opacity-75 text-light">
                            <h2>Working Drawings</h2>
                            </div>
                            <div class="card-body">
                                <p>A working drawing is also Link part of production information that will help the designers provide to the construction team to help construct Link project. Working drawings will also help in giving graphical and dimension information. The contractors must also use this data to build their work or help suppliers to create parts of the work or install the components. Working drawing can be in the form of structural drawings, architectural drawings, civil drawings, electrical drawings and mechanical drawings and so forth. </p>
                                <Link class="btn btn-outline-dark text-light" type="button" role="button" to="/SignUp">Let's work together</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 my-4">
                        <div class="card mx-2 bg-secondary">
                            <div class="card-header bg-dark bg-opacity-75 text-light">
                                <h2>Construction Estimates</h2>
                            </div>
                            <div class="card-body">
                                <p>Construction projects can be very complex. You need money to buy materials, create blueprints, secure permits, rent equipment, pay for your crew and more. All these things cost money and take time. This is why you need to do thorough construction estimating to make sure you don’t miss anything.</p>
                                <Link class="btn btn-outline-dark text-light" type="button" role="button" to="/SignUp">Let's work together</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Services;