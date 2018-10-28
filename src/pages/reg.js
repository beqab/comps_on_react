import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Header from "../inc/header";
import axios from 'axios';

class Registration extends Component {
 
  state = {
      email:null,
      password:null,
      error:false,
  }
  componentDidMount(){
  
  }
  enterFilde = (e) => {
    let elementName = e.target.name
    this.setState({
      [elementName]:e.target.value
    })
    
    console.log(this.state)
  }

  letsRegister = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password:this.state.password,
      returnSecureToken:true,
    }
    if(data.email && data.password.length > 6 ){
    axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCGo3gnBO7rBthSOWAI1x-cstE749-Gx3g", data)
    .then(resp => {
console.log(resp)
    })
    .catch(err => {
      console.log(err)
    })
    console.log('seand')
    this.setState({
      error:false,
    })
  }
  if(data.password.length < 6 ){
    this.setState({
      error:true,
    })
  }
  }
  render(){
  return (
    <div  style={{background:'#040111',height: '100vh'}}>
     <Header/>  
    <div className="container" style={{paddingTop: '10vh'}}>
    	<div className="row">
			<div className="col-md-6 col-md-offset-3">
				<div className="panel panel-login">
					<div className="panel-heading">
						<div className="row">
							<div className="col-xs-6">
								{/* <NavLink to="/auth" className="active" id="login-form-link">Login</NavLink> */}
							</div>
							<div className="col-xs-6">
								<NavLink to="/reg" id="register-form-link" className="">რეგისტრაცია</NavLink>
							</div>
						</div>
						<hr/>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
								{/* <form id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style={{display: 'block'}}>
									<div className="form-group">
										<input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
									</div>
									<div className="form-group">
										<input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
									</div>
									<div className="form-group text-center">
										<input type="checkbox" tabindex="3" className="" name="remember" id="remember" />
										<label for="remember"> Remember Me</label>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-lg-12">
												<div className="text-center">
													<a href="https://phpoll.com/recover" tabindex="5" className="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form> */}
								<form onSubmit={(e)=> this.letsRegister(e)} id="register-form"  >
									{/* <div className="form-group">
										<input onChange={} type="text"  name="username" id="username"className="form-control" placeholder="Username" />
									</div> */}
									<div className="form-group">
										<input  onChange={(e) => this.enterFilde(e)} type="email" name="email" id="email" className="form-control" placeholder="Email Address" />
									</div>
									<div className="form-group">
										<input onChange={(e) => this.enterFilde(e)} type="password" name="password" id="password"  className={this.state.error ? "passwordError form-control btn" : "form-control" } placeholder="Password" />
									</div>
									{/* <div className="form-group">
										<input type="password" name="confirm-password" id="confirm-password"  className="form-control" placeholder="Confirm Password" />
									</div> */}
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<input type="submit"   name="register-submit" id="register-submit"  className="form-control btn btn-register"  />
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



    </div>
  );
};
};

export default Registration;