import React, { Component } from 'react';

class Spiner extends Component {
    render() {
        return (
            <div className="spinerPArent">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}

export default Spiner;