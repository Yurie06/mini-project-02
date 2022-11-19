import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// import aboutimage form './aboutimage';



class About extends React.Component {
    render() {
        return (
           <div id="about">
                {/* <div className="about-image">
                    <img src={aboutimage} alt=''/>
                </div> */}
                <div className="about-text">
                    <h1>Learn About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                READ MORE
                            </Dropdown.Toggle>
                        </Dropdown>
                </div>
           </div>
        )
    }
}
export default About;