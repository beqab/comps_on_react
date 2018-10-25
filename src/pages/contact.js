import React, { Component } from 'react';
import Header from '../inc/header';
import Footer from '../inc/footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
            <Header/>
   </div>
   <div className="container">
       <div className="col-md-6">
            <p className="contacts">საკონტაქტო ინფორმაცია</p>
            <p className="time">სამუშაო საათები 10-დან 19-საათამდე(ყოველდღე) შაბათ-კვირა 10-დან 18-საათამდე </p>
          <address>
             <p><span>მისამართი:</span> 11, თბილისი</p>
             <p><span>ტელეფონი: </span> 555 34 43 23</p>
             <p><span>ელ-ფოსტა: </span> Info@.ge</p>
             <p><span>ვებ-გვერდი: </span><a href="#"> service.ge </a></p>
             <p><span>Facebook: </span> <a href="#"> facebook.com/service </a></p>
          </address>
       </div>
       <div className="contact col-md-6">
           <form method="post" action="">
             <label className="form_element_title"> სახელი </label>
            <input name="naem" type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
             <label className="form_element_title"> ელფოსტა </label>
             <input name="mail" type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
             <label className="form_element_title"> წერილის თემა </label>
            <input name="about_mile" type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
             <label className="form_element_title">  შეტყობინება</label>
             <textarea className="form-control" rows="5" id="comment"></textarea>
             <button type="submit">გაგზავნა</button>
           </form>
       </div>
       <div className="map col-md-12">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95298.64686834672!2d44.847572050000004!3d41.718733949999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ska!2sge!4v1492857315682" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe> */}
       </div>
   </div>
   <Footer/>


            </div>
        );
    }
}

export default Contact;