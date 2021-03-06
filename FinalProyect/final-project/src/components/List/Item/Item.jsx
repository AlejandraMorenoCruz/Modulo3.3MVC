import React, { Component } from 'react';

class Item extends Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: 0,
    }
    this.increaseClick = this.increaseClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    //Used to only update when we want it to
    if (this.props.lastCicked !== nextProps.lastCicked){
      console.log('should, props: ', nextProps, this.props);
      console.log('should, state: ', nextState, this.state);
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    //Usualy used for logging or sideeffects based on what changed
    if (this.props.lastCicked !== prevProps.lastCicked){
      console.log('did, props: ', prevProps, this.props);
      console.log('did, state: ', prevState,this.state);
    }
  }

  increaseClick(){
    this.setState({clicked: this.state.clicked +1});
    this.props.changeLastClicked(this.props.id);
  }


render() {
  const {id, name, description, value} = this.props;
  return (
    <tr onClick = {this.increaseClick}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{value}</td>
      <td>{this.state.clicked}</td>
      <td>{this.props.id === this.props.lastCicked && 'last Cicked'}</td>
    </tr>
  );
}

}
export default Item;
