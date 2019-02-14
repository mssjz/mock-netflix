import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addAction} from '../../store.js';
import Film from '../Film';

class RecomList extends Component {
  render() {
    return(
      <div className="recommdenations">
        <h3>Recommendations</h3>
        <div className="recomlist">
          {this.props.recom.map(ele => {
            return <Film key={ele.id} film={ele} handleClick={this.props.addFilm} flag='recom'/>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recom: state.recommends
  };
};

const mapDispatchToProps = dispatch =>  {
  return ({
      addFilm: (id) => dispatch(addAction(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RecomList);