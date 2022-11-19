import React from "react";
import { Link } from "react-router-dom"
// import {} from '@fortawesome/fontawesome-svg-core';
// import {} from '@fortawesome/free-solid-svg-icons';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


class Footer extends React.Component {
    render() {
        return (
            <div class="row">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="About">About Us</Link>
                        </li>
    </ul>
    <p class="text-center">&copy; 2022 SheltDraw, Inc</p>
  </footer>
</div>

        )
    }
}
export default Footer;