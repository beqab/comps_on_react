import React, {Component} from 'react';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import Header from "../inc/header";
import axios from 'axios';
import {connect} from 'react-redux';
import * as authActions from '../store/actions/authActions';
import Spiner from '../UI/spiner'

class Registration extends Component {
 
  state = {
      email:{},
      password:{},
      error:false,
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
    if(data.email && data.password.length >= 6 ){
		
    let featch = async () => {
			await  this.props.saveUserData(data)
			let token = { idToken : this.props.token}
	     axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCGo3gnBO7rBthSOWAI1x-cstE749-Gx3g', token) 
			.then(resp => {
				 this.props.saveUserInfo(resp.data.users[0].email)
				 localStorage.setItem('userInfo', resp.data.users[0].email )
				this.props.history.replace('/')
			})
			.catch(err =>{
					console.log(err)
			})
		}
		featch()
    
		this.setState({
			error:false,
		})
	}
	
	else{
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
								{/* <NavLink to="/auth" className="active" id="login-form-link">ავტორიზაცია</NavLink> */}
							</div>
							<div className="col-xs-6">
								<NavLink to="/auth" className="active" id="login-form-link">ავტორიზაცია</NavLink>
								{/* <NavLink to="/reg" id="register-form-link" className="">Register</NavLink> */}
							</div>
						</div>
						<hr/>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12 authFormParent">
							{ this.props.loader ?  <Spiner/> : null}	 
								<form  onSubmit={(e)=> this.letsRegister(e)} id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style={{display: this.props.loader ?  "none" : 'block' }}>
							
									<div className="form-group">
										<input  onChange={(e) => this.enterFilde(e)} type="text" name="email" id="username"  className="form-control" placeholder="email"/>
									</div>
									<div className="form-group">
										<input onChange={(e) => this.enterFilde(e)} type="password" name="password" id="password"  className="form-control" placeholder="Password" style={{borderColor: this.state.error ? 'red':    '#ccc' }} />
									</div>
									<div className="form-group text-center">
										<input type="checkbox"  className="" name="remember" id="remember" />
										<label htmlFor="remember"> Remember Me</label>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit"  className="form-control btn btn-login" value="Log In" />
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-lg-12">
												<div className="text-center">
													<a href="https://phpoll.com/recover"  className="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form>
								{/* <form onSubmit={(e)=> this.letsRegister(e)} id="register-form"  >
									<div className="form-group">
										<input onChange={} type="text"  name="username" id="username"className="form-control" placeholder="Username" />
									</div>
									<div className="form-group">
										<input  onChange={(e) => this.enterFilde(e)} type="email" name="email" id="email" className="form-control" placeholder="Email Address" />
									</div>
									<div className="form-group">
										<input onChange={(e) => this.enterFilde(e)} type="password" name="password" id="password"  className={this.state.error ? "passwordError form-control btn" : "form-control" } placeholder="Password" />
									</div>
									<div className="form-group">
										<input type="password" name="confirm-password" id="confirm-password"  className="form-control" placeholder="Confirm Password" />
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<input type="submit"   name="register-submit" id="register-submit"  className="form-control btn btn-register"  />
											</div>
										</div>
									</div>
								</form> */}
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

const mapStateToProps = state =>{
	 return{
		 token: state.authReducer.token,
		 loader: state.authReducer.loader
	 }
}

const mapDispatchToProps = dispatch => {
	  return{
			saveUserData : async (data) =>{
			  dispatch(authActions.loadingData())
				await   axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCGo3gnBO7rBthSOWAI1x-cstE749-Gx3g", data)
				.then(resp => {
		console.log(resp)
		localStorage.setItem('token', resp.data.idToken)
		dispatch(authActions.resaveUser(resp.data.idToken))
		dispatch(authActions.checkAuthTimeout(resp.data.expiresIn))
		dispatch(authActions.stopLoading())
	})
	.catch(err => {
		// alert('errr')
		console.log(err)
		// dispatch(authActions.resaveUser())
		dispatch(authActions.stopLoading())
				})
			
			},
			saveUserInfo: (data) => dispatch(authActions.saveUserInfo(data))
		}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));