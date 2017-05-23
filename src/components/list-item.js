import React, { Component } from 'react';
import classNames from 'classnames';
import * as itemTypes from '../data/constants';
import '../css/list-item.css';

class ListItem extends Component {
  classForType = (type) => {
    return type === itemTypes.itemConcern ? 'listItem--concern' : 'listItem--kudos';
  }

  render() {
    const { name, text, type } = this.props.item;

    return (
      <div className={classNames('listItem', this.classForType(type))}>
        <p className='itemText'>
          {text}
        </p>
        <p className='itemName'>
          {name}
        </p>
      </div>
    );
  }
}

export default ListItem;
