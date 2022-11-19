import React from "react";

class Services extends React.Component {
    render() {
        return (
            <div>
                <h1 class="col-lg-12 text-center text-light pt-5" >Our Services</h1>
                <div class="row align-items-center mx-5 my-3">
                <div class="col-lg-6">
                    <div class="card mx-2 bg-secondary">
                    <div class="card-header bg-dark bg-opacity-75 text-light">
                        <h2>Floor Plan Redraws</h2>
                    </div>
                    <div class="card-body">
                        <a class="btn btn-outline-dark text-light" type="button" role="button" href="SignUp.jsx">Let's work together</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mx-2 bg-secondary">
                    <div class="card-header bg-dark bg-opacity-75 text-light">
                        <h2>3D Visualization</h2>
                    </div>
                    <div class="card-body">
                        <a class="btn btn-outline-dark text-light" type="button" role="button" href="Signed_up.html">Let's work together</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 my-4">
                    <div class="card mx-2 bg-secondary">
                    <div class="card-header bg-dark bg-opacity-75 text-light">
                        <h2>Working Drawings</h2>
                    </div>
                    <div class="card-body">
                        <a class="btn btn-outline-dark text-light" type="button" role="button" href="Signed_up.html">Let's work together</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 my-4">
                    <div class="card mx-2 bg-secondary">
                    <div class="card-header bg-dark bg-opacity-75 text-light">
                        <h2>Construction Estimates</h2>
                    </div>
                    <div class="card-body">
                        <a class="btn btn-outline-dark text-light" type="button" role="button" href="Signed_up.html">Let's work together</a>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
        );
    }
}

export default Services;