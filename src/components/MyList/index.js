import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeAction} from '../../store.js';
import Film from '../Film';

class MyList extends Component {
  render() {
    return(
      <div className="savedlist">
        <h3>My List</h3>
        <div className="mylist">
          {this.props.myList.map(ele => {
            return <Film key={ele.id} film={ele} handleClick={this.props.removeFilm} flag='existed'/>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myList: state.myList
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
      removeFilm: (id) => dispatch(removeAction(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);