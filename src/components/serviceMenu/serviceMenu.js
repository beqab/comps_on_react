import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {NavLink, Link} from 'react-router-dom'

class ServiceMenu extends Component {
     state={
         serviceData:null,
     }
    componentDidMount() {
         console.log(this.props.serveceMenu, 'from servvvv')

         
          let featchServiceMenu = async () =>{
           await axios.get('https://comps-cee0a.firebaseio.com/sideService.json')
            .then(resp => {
                //  dispatch(starterActions.featchStarter(resp.data))
                //  console.log(resp)
                 this.setState({
                    serviceData: resp.data
                 })
                 console.log(resp.data , 'bbbbbbb')
            })
            .catch(err =>{
              console.log(err, 'nnnnnnnnnnnn')
            })
        }
            featchServiceMenu().then(res => console.log(this.state, 'ffffffffff'))
          

       
    }

    render() {
        // console.log(this.state, 'afterrrrr')
        console.log(this.props.serveceMenu, 'from mennnnuuuu')
        let menuItmens = []
        for(var key in this.props.serveceMenu) {
            menuItmens.push(<li><NavLink to={key}>{this.props.serveceMenu[key]}</NavLink></li>) 
        }
        return (
            <ul >
               <li><Link to="/service">ყველა სერვისი</Link> </li>
                {menuItmens}
            </ul>
        );
    }
}
const mapStateToProps = state =>{
       return{
           serveceMenu: state.starterReducer.starterData
       }
}
const mapDispatchToProps = dispatch => {
    return{
        // featcStartData: async () =>{
        //     await axios.get('https://comps-cee0a.firebaseio.com/sideService.json')
        //     .then(resp => {
        //          dispatch(starterActions.featchStarter(resp.data))
        //          console.log(resp)
        //     })
        //     .catch(err =>{
        //       console.log(err)
        //     })
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceMenu);