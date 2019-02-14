import React, { Component } from 'react';
import {connect} from 'react-redux';

class Titles extends Component{
  render(){
    return(
      <div className="titles">
      <h3>My Films</h3>
        <ul>
          {this.props.myList.map(ele => {
            return <li>{ele.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myList: state.myList
  };
};

export default connect(mapStateToProps)(Titles);