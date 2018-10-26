import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
  componentDidMount(){

    console.log(this.props.menu, 'from header')
  }
  componentWillReceiveProps(){
    console.log(this.props.menu, 'from header')

  }
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
    menu : state.start_data
  }
}

export default connect(mapStateToProps)(Header);