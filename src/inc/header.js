import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as authActions from '../store/actions/authActions'
class Header extends Component {
  // componentDidMount(){

  //   console.log(this.props.menu, 'from header')
  // }
  // componentWillReceiveProps(){
  //   console.log(this.props.menu, 'from header')

  // }
  componentD
    render() {
        return (
            <header className="">
       <h1> კომპიუტერული სერვისები და მეორადი კომპიუტერული ტექნიკა</h1>
                <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">saitissxeli.ge</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className=" ">
        <NavLink exact  to="/">მთავარი </NavLink>/
        </li>
        <li><NavLink exact  to="/service">სერვისები</NavLink></li>
        <li><NavLink  exact to="/shop">მაღაზია</NavLink></li>
        <li><NavLink exact  to="/contact">კონტაქტი</NavLink></li>
        
      </ul>
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>

        { !this.props.isAuth ?
         <div>
           <NavLink exact  to="/auth"> ავტორიზაზცია </NavLink>
           <NavLink exact  to="/reg"> რეგისტრაცია </NavLink> 
           </div>
           : <span onClick={() => this.props.logoutAction()}>გამოსვლა</span> }
      </form>
      
    </div>
  </div>
</nav>
       </header>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    menu : state.testReducer.start_data,
    isAuth: state.authReducer.token

  }
}

const mapDispatchToProps = dispatch =>{
  return {
    logoutAction : ()=> dispatch(authActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);