import React, { Component } from 'react';
import { fadeInDown, flip, slideInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classnames';

import * as itemTypes from '../data/constants';
import '../css/list-item.css';

class ListItem extends Component {
  constructor(props) {
    super(props);

    const { shouldFade } = this.props;

    this.state = {
      shouldFade,
      shouldFinishFlip: false,
      shouldFlip: false,
      shouldSlide: false,
      showFront: true,
    };
  }

  flipMe = () => {
    const { showFront, showBack } = this.state;

    this.setState({
      shouldFlip: true,
    }, () => {
      setTimeout(() => {

        this.setState({
          shouldFlip: false,
          showFront: !showFront,
          showBack: !showBack,
        }, () => {
          this.setState({
            shouldFinishFlip: true,
          }, () => {
            setTimeout(() => {
              this.setState({
                shouldFinishFlip: false,
              });
            }, 400);
          });
        });

      }, 400);
    });
  }

  classForType = (type) => {
    return type === itemTypes.itemConcern ? 'listItem--concern' : 'listItem--kudos';
  }

  componentWillReceiveProps() {
    this.setState({
      shouldSlide: true,
    }, () => {
      setTimeout(() => this.setState({
        shouldSlide: false,
      }), 1000);
    });
  }

  render() {
    const { name, text, type } = this.props.item;
    const { showFront, showBack, shouldFade, shouldFlip, shouldFinishFlip, shouldSlide } = this.state;

    const wrapperStyles = css(
      shouldFade && styles.fadeInDown,
      shouldFlip && styles.flip,
      shouldFinishFlip && styles.finishFlip,
      shouldSlide && styles.slideInDown,
    );

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

const styles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s',
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: '1s',
  },
  flip: {
    animationName: flip.flipStart,
    animationDuration: '0.5s',
  },
  finishFlip: {
    animationName: flip.flipEnd,
    animationDuration: '0.5s',
  },
});

// Monkey-patch for node_modules/react-animations/lib/flip.js
// const flip = {
  // flipStart: {
    // from: {
      // transform: (0, _utils.perspective)('400px')
    // },
    // to: {
      // transform: perspectiveAndRotate('400px', [0, 1, 0, 90])
    // },
  // },
  // flipEnd: {
    // from: {
      // transform: perspectiveAndRotate('400px', [0, 1, 0, -90])
    // },
    // to: {
      // transform: (0, _utils.perspective)('400px')
    // },
  // },
// };

export default ListItem;
