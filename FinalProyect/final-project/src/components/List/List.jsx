import React, { Component } from 'react';

//Actions
import { getData } from '../../utils/api';

//Components
import Item from './Item/Item';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      lastCicked: null,
    }
    this.changeLastClicked = this.changeLastClicked.bind(this);
  }

  componentDidMount(){
    getData('items').then((items) => this.setState({items}));
  }

  changeLastClicked(id) {
    this.setState({lastCicked: id})
  }
  renderItems(){
    return this.state.items.map((item, i) => (
      <Item
      key = {`item-${i}`}
      lastCicked = {this.state.lastCicked}
      changeLastClicked = {this.changeLastClicked}
      {...item}
      />
    ));
  }

render(){
  return(
    <table className="list">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Value</th>
          <th>Clicked</th>
        </tr>
      </thead>
    <tbody>
      {this.renderItems()}
    </tbody>
    </table>
  );
}
}

export default List;
