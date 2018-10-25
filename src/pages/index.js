import React, { Component } from 'react';
import Header from '../inc/header'
import Footer from '../inc/footer';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions'

class Index extends Component {
    componentDidMount(){
            axios.get('https://comps-cee0a.firebaseio.com/mrnu.json')
            .then(resp => {
                console.log(resp)
            })
            .catch(err =>{
                console.log(err)
            })

            console.log(this.props, 'index_test')
    }
    
  render() {
    return (
      <div className="index">
      <button onClick={() => this.props.fetchdata('test')}>ffff </button>
       <div className="container">
       <Header/>
   </div>

    <div className="container">
        <div className="col-md-12">
             <div className="col-md-3">
                <div className="service_aside">
                  <ul>
                      <li><a href="#">ყველა სერვისი</a></li>
                      <li><a href="#">ტექნიკური სერვისი</a></li>
                      <li><a href="#">პროგრამული სერვისი</a></li>
                      <li><a href="#">ლეპტოპის შეკეთება</a></li>
                      <li><a href="#">მობილურების შეკეთება</a></li>
                  </ul>
                 </div>
                 <div className="shop_aside">
                  <ul>
                      <li><a href="shop.html">ყველა პროდუქცია</a></li>
                      <li><a href="#">ლეპტოპის ეკრანები</a></li>
                      <li><a href="#">ლეპტოპის კლავიატურები</a></li>
                      <li><a href="#">მონაცემების მატარებლები</a></li>
                      <li><a href="#">ქსელის პროდუქტები</a></li>
                      <li><a href="#">პერიფერიული მოწყობილობები</a></li>
                  </ul>
                 </div>
             </div>
             <div className="col-md-9">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src="images/repair.png" alt="Chania" />
    </div>

    <div className="item">
      <img src="images/repair.png" alt="Chania" />
    </div>

    <div className="item">
      <img src="images/repair.png" alt="Flower" />
    </div>

    <div className="item">
      <img src="images/repair.png" alt="Flower" />
    </div>
  </div>

  <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
             </div>
        </div>
   </div>
   <div className="container">

        <div className="mane_content col-md-12">
           <h2>პროდუქცია</h2>
              <div className="col-md-3">
                <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
               <div className="col-md-3">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="images/acer.jpg" />
                     <h3>Acer Aspire E1-531</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
              <div className="all col-md-12">
                  <a   href="shop.html">ყველა</a>
              </div>
        </div>

</div>






 <Footer/>

        
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return {
        menu: state
    }
}

const mapDispatchToProps = dispatch =>{
     return{
         fetchdata : (dd) => dispatch(actionTypes.FetchStartData(dd)),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
