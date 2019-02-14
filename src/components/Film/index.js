import React, { Component } from 'react';
class Film extends Component {
  render(){
  const {img, title, id} = this.props.film;
  return (
    <div className="film">
      <img src={img} alt={title}></img>
      <p>{title}</p>
      <button className="btn" onClick={() => this.props.handleClick(id)}>{this.props.flag === 'existed' ? 'Remove' : 'Add'}</button>
    </div>
  )
  }
}

export default Film;

