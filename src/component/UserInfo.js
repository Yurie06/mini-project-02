import React from 'react'

class UserInfo extends React.Component {

    state = {
        value: '',
        email: '',
        password: ''
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

        console.log('Email on Submit:', email);
        console.log('Password on Submit:', password);

    }

    render() {
        console.log('State ', this.state);

        return (
            <>
            <br/>
            <div class="modal-body col-lg-4 p-5 pt-5">
                <form class="">
                <div class="form-floating mb-3 text-secondary">
                    <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange = { this.getValue} name = 'firstName'/>
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3 text-secondary">
                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange = { this.getValue} name = 'password' />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3 text-secondary">
                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange = { this.getValue} name = 'password' />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3 text-secondary">
                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange = { this.getValue} name = 'password' />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3 text-secondary">
                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange = { this.getValue} name = 'password' />
                    <label for="floatingPassword">Password</label>
                </div>
                <small class="text-light">By clicking Sign up, you agree to the terms of use.</small>
                <button class="w-100 mb-2 btn btn-lg rounded-3 btn-outline-secondary text-light" type="submit" onClick = { this.handleSubmit }>Sign up</button>
                <hr class="my-3"/>
                </form>
            </div><br/>
       
            </>
        );  
    }
}

export default UserInfo;
