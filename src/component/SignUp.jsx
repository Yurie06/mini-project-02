import React from 'react'
// import { Link } from 'react-router-dom';

class App extends React.Component {

    state = {
        value: '',
        email: '',
        password: '',
        address: '',
        radio: ''
    }

    getValue = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault(); //Stop Reloading
        const email = this.state.email;
        const password = this.state.password;
        const address = this.state.address;
        const radio = this.state.radio;

        console.log('Email on Submit:', email);
        console.log('Password on Submit:', password);
        console.log('Address:', address);
        console.log('Radio:', radio);
    }

    render() {
        console.log('State ', this.state);

        return (
            <>
            <div class="modal-body col-lg-4 p-5 pt-5">
                <form class="">
                <div class="form-floating mb-3 text-secondary">
                    <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange = { this.getValue} name = 'email'/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3 text-secondary">
                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange = { this.getValue} name = 'password' />
                    <label for="floatingPassword">Password</label>
                </div>
                <small class="text-light">By clicking Sign up, you agree to the terms of use.</small>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-outline-secondary text-light" type="submit" onClick = { this.handleSubmit }>Sign up</button>
                <hr class="my-3"/>
                </form>

                {/* <form class="col-lg-9 text-light">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Project Address</label>
                            <input type="address" class="form-control" id="Paper" placeholder="ex.House No. Street, Zone, City 6000" onChange = { this.getValue} name = 'address' />
                            <div id="textHelp" class="form-text">This also your title block address on the output</div>
                          </div>
                          How many stories does your house have?
                          <div class="mb-1">
                            <input type="radio" class="form-radio-input" id="exampleCheck1" onChange = { this.getValue} name = 'radio'/>
                            <label class="form-check-label" for="Bungalow">Bungalow</label>
                          </div>
                          <div class="mb-1">
                            <input type="radio" class="form-radio-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="2 Storey">2 Storey</label>
                          </div>
                          <div class="mb-3">
                            <input type="radio" class="form-radio-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="3 Storey">3 Storey</label>
                          </div>
                          <div class="mb-3">
                              <label for="House">Redraw features</label>
                              <select id="House" name="Storey">
                                <option value="1">Select</option>
                                <option value="2">2D Black & White</option>
                                <option value="3">2D Full Color</option>
                                <option value="4">2D Textured</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="House">Paper size option</label>
                              <select id="House" name="Storey">
                                <option value="1">Select</option>
                                <option value="2">A4 Size</option>
                                <option value="3">A3 Size</option>
                                <option value="3">A1 Size</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="House">File type output</label>
                              <select id="House" name="Storey">
                                <option value="1">Select</option>
                                <option value="2">jpg</option>
                                <option value="3">pdf</option>
                                <option value="3">png</option>
                                <option value="3">tif</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="House">Reference plan</label>
                              <select id="House" name="Storey">
                                <option value="1">Select</option>
                                <option value="2">Hand Sketch</option>
                                <option value="3">Computer Aided</option>
                              </select>
                          </div>
                          <div class="mb-3">
                            Upload your referencence file
                            <input id="reference" type="file" name="file" />
                          </div>
                          
                          <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Input confirmed!</label>
                          </div>
                          <button type="submit" class="btn btn-dark">Start the project</button>
                      </form> */}
            </div><br/>
            
          
            </>
        );  
    }
}

export default App;



