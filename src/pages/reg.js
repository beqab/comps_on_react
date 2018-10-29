import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Header from "../inc/header";
import axios from 'axios';
import Spiner from '../UI/spiner';
import {connect} from 'react-redux';
import * as authAcrions from '../store/actions/authActions'

class Registration extends Component {
 
  state = {
      email:null,
			password:null,
			name:null,
			surname:null,
			error:false,
			success: false,
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
			name: this.state.name,
			surname: this.state.surname,
      returnSecureToken:true,
    }
    if(data.email && data.password.length > 6 ){
		  let seandReg = async () => {
      this.props.startLoad()
    await axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCGo3gnBO7rBthSOWAI1x-cstE749-Gx3g", data)
    .then(resp => {
			console.log(resp)
			this.setState({
				success:true
			})
			this.props.endLoad()
    })
    .catch(err => {
			this.props.endLoad()
      alert(`err.response.data.error.message`)
    })
    console.log('seand')
    this.setState({
      error:false,
    })
	}
	seandReg()
  if(data.password.length < 6 ){
    this.setState({
      error:true,
    })
	}
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
							{this.props.loader ?	<Spiner/> : null}
						 {this.state.success ?<center> რეგისტრაცია წარმატებით განხორციელდა </center> :null }  
							
								<form onSubmit={(e)=> this.letsRegister(e)} id="register-form"  >
						
									<div className="form-group">
										<input  onChange={(e) => this.enterFilde(e)} type="email" name="email" id="email" className="form-control" placeholder="Email Address" />
									</div>
									<div className="form-group">
										<input  onChange={(e) => this.enterFilde(e)} type="text" name="name" id="name" className="form-control" placeholder="სახელი" />
									</div>
									<div className="form-group">
										<input  onChange={(e) => this.enterFilde(e)} type="text" name="surname" id="name" className="form-control" placeholder="გვარი" />
									</div>
									<div className="form-group">
										<input onChange={(e) => this.enterFilde(e)} type="password" name="password" id="password"  className={this.state.error ? "passwordError form-control btn" : "form-control" } placeholder="Password" />
									</div>
								
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

const mapStateToProps = state => {
	  return {
			loader: state.authReducer.loader
		}
}


const mapDispachToProps = dispach => {
	 return{
				startLoad: () => dispach(authAcrions.loadingData()),
				endLoad : () => dispach(authAcrions.stopLoading())
	 }
}

export default connect(mapStateToProps,mapDispachToProps)(Registration);