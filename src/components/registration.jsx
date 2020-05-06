import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import { toast } from "react-toastify";
  class Registration extends Component {
    state = {
      account: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      errors: {}
    };
    schema = {
      firstname: Joi.string()
        .min(5)
        .required(),
      lastname: Joi.string()
        .min(5)
        .required(),
      email: Joi.string()
        .min(5)
        .required(),
      password: Joi.string().required()
    };
  
    //validations
  
    handleFormSubmit = event => {
      event.preventDefault();
      toast("Registration successful");
      this.props.history.replace("/login");
      const errors = {};
      //const account = this.state.account;
      //const { firstname, lastname, email, password } = this.state.account;
      //const options = { abortEalry: false };
      //const result = Joi.validate(account, this.schema);
      //console.log(result);
      /* console.log(result.log.details);
      for (let item of result.error.details)
       {
        console.log(item);
        console.log(item.path[0]);
        console.log(item.message);
        errors[item.path[0]] = item.message;
        this.setState({ errors });
      }*/
  
      /*console.log(this.firstname.current.value);
      console.log(firstname);
      console.log(lastname);
      console.log(email);
      console.log(password);
      if (firstname.trim() === "") errors.firstname = "firstname is reuired";
      if (lastname.trim() === "") errors.lastname = "lastname is reuired";
      if (email.trim() === "") errors.email = "Email is reuired";
      if (password.trim() === "") errors.password = "Password is reuired";
  
     
      this.setState({ errors });*/
      console.log(errors);
    };
  
    //HANDLE IN PUT FIELD
    handleInputField = event => {
      const account = {};
      const errors = {};
      const { name, value } = event.currentTarget;
      //console.log(event.currentTarget.name);
      //console.log(event.currentTarget.value);
      account[name] = value;
      this.setState({ account });
  
      //validation
  
      const obj = { [name]: value };
      const sch = { [name]: this.schema[name] };
      console.log(obj);
      console.log(sch);
      console.log(Joi.validate(obj, sch));
      const result = Joi.validate(obj, sch);
      if (result.error !== null) {
        errors[name] = result.error.details[0].message;
        this.setState({ errors });
      } else {
        this.setState({ errors });
      }
    };
    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6 p-3 mt-4 bg-light">
                <form onSubmit={this.handleFormSubmit}>
                  <h1 class="text-center text-warning bg-info">Register</h1>
                  <Input
                    inputName="firstname"
                    value={this.state.account.firstname}
                    type="text"
                    handleInputField={this.handleInputField}
                    lable="First Name"
                    error={this.state.errors.firstname}
                  />
                  <Input
                    inputName="lastname"
                    value={this.state.account.lastname}
                    type="text"
                    handleInputField={this.handleInputField}
                    lable="Last Name"
                    error={this.state.errors.lastname}
                  />
                  <Input
                    inputName="email"
                    value={this.state.account.email}
                    type="email"
                    handleInputField={this.handleInputField}
                    lable="Email"
                    error={this.state.errors.email}
                  />
                  <Input
                    inputName="password"
                    value={this.state.account.password}
                    type="text"
                    handleInputField={this.handleInputField}
                    lable="Password"
                    error={this.state.errors.password}
                  />
                  <button type="submit" class="btn btn-warning btn-block mt-5">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Registration;