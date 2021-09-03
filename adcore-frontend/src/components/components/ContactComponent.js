import React from "react";

const ContactComponent = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="mt-5">Contact us</h1>
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
