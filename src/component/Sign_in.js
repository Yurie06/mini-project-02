import React from 'react'
import { Link } from 'react-router-dom'


function Sign_in() {
  return (
    <div>
      <div class="modal modal-signin position-static d-block" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow bg-dark bg-opacity-75 text-light">
          <div class="modal-header p-5 pb-4 border-bottom-0">
          
            <h2 class="fw-bold mb-0 text-light">Sign up for free</h2>
            <Link class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" to='/'Home></Link>
          </div>
    
          <div class="modal-body p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3 text-secondary">
                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3 text-secondary">
                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
              <small class="text-light">By clicking Sign up, you agree to the terms of use.</small>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-outline-secondary text-light" type="submit">Sign up</button>
              <hr class="my-3"/>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sign_in
