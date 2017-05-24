import React, { Component } from 'react';
import {
  merge,
  fadeInDown,
  flip,
  flipInY,
  flipOutY,
} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classnames';

import * as itemTypes from '../data/constants';
import '../css/list-item.css';

class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      shouldFade: true,
      shouldFlip: false,
      showFront: true,
    };
  }

  flipMe = () => {
    const { showFront, showBack } = this.state;

    this.setState({
      shouldFlip: true,
      showBack: false,
      showFront: false,
    }, () => {
      setTimeout(() => this.setState({
        shouldFlip: false,
        showBack: !showBack,
        showFront: !showFront,
      }), 500);
    });
  }

  classForType = (type) => {
    return type === itemTypes.itemConcern ? 'listItem--concern' : 'listItem--kudos';
  }

  render() {
    const { name, text, type } = this.props.item;
    const { showFront, showBack, shouldFade, shouldFlip } = this.state;

    const wrapperStyles = css(
      shouldFlip && styles.flip,
      shouldFade && styles.fadeInDown,
    )

    return (
      <div
        onClick={this.flipMe}
        className={wrapperStyles}
       >
        <div className={classNames('listItem', this.classForType(type))}>
          {
            showFront &&
            <div>
              <p className='itemText'>
                {text}
              </p>
              <p className='itemName'>
                {name}
              </p>
            </div>
          }
          {
            showBack &&
            <div>
              <p>
                Hello
              </p>
            </div>
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldFade: false });
    }, 1000);
  }
}

// const halfFlip = {
  // from: {
    // animationTimingFunction: 'ease-out',
    // transform: perspectiveAndRotate('400px', [0, 1, 0, 180])
  // },
  // '20%': {
    // animationTimingFunction: 'ease-in',
    // transform: perspectiveTranslateRotate('400px', [0, 0, '120px'], [0, 1, 0, 180])
  // },
  // to: {
    // animationTimingFunction: 'ease-in',
    // transform: (0, _utils.perspective)('400px')
  // }
// };

const styles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s',
  },
  flip: {
    animationName: flip,
    animationDuration: '0.5s',
  },
});

export default ListItem;
