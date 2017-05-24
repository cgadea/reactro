import React, { Component } from 'react';
import ListItem from './list-item';
import '../css/list.css';

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="list">
        {
          items.map((item) => {
            return <ListItem shouldFade={item.shouldFade} key={item.id} item={item} />
          })
        }
      </div>
    );
  }
}

export default List;
