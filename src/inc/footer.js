import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer container-fluid">
      <footer className="container">
         <div className="footer_nav">
            <ul>
              <li><Link to="/">მთვარი</Link></li>
              <li><Link to="/service">სერვისები</Link></li>
              <li><Link to="/shop">მაღაზია</Link></li>
              <li><Link to="/contact">კონტაქტი</Link></li>
            </ul>
         </div>
         <div className="footer_contactinfo">
             <p>კომპიუტერული სერვისები და მეორადი კომპიუტერული ტექნიკა</p>
             <p>ტელეფონი:  555 32 32 23</p>
         </div>
         <div className="copyright">
            COPYRIGHT CREATED BY <a href="#">b.b</a> © 2017
         </div>
      </footer>
   </div>
        );
    }
}

export default Footer;