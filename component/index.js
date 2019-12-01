/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Platform, Dimensions} from 'react-native';
import AndroidShadow from './AndroidShadow';
import PropTypes from 'prop-types';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class ShadowMix extends React.PureComponent {
  /**
   * 使用PropTypes进行类型检查
   */
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    border: PropTypes.number,
    radius: PropTypes.number,
    opacity: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    elevation: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.element,
  };

  render() {
    let {
      width = 0,
      height = 0,
      border = 0,
      color = '#000',
      radius = 0,
      opacity = 1,
      x = 0,
      y = 0,
      style = {},
      elevation,
      children,
    } = this.props;

    if (elevation) {
      //转换安卓elevation->IOS
      y = elevation / 2;
      radius = (elevation * 2) / 3;
      opacity = elevation / 60 + 0.18;

      return Platform.OS === 'android' ? (
        <View style={[{elevation: elevation, backgroundColor: '#fff'}, style]}>
          {children}
        </View>
      ) : (
        <View
          style={[
            {
              shadowColor: color,
              shadowOffset: {width: x, height: y},
              shadowOpacity: opacity,
              shadowRadius: radius,
              backgroundColor: '#fff',
            },
            style,
          ]}>
          {children}
        </View>
      );
    } else {
      return Platform.OS === 'android' ? (
        <AndroidShadow
          width={width * (((width / WIDTH) * 7) / 15 + 0.6)}
          height={height * (((height / HEIGHT) * 7) / 15 + 0.6)}
          color={color}
          border={border * 2}
          radius={radius}
          opacity={opacity}
          x={x}
          y={y}
          style={style}>
          {children}
        </AndroidShadow>
      ) : (
        <View
          style={[
            {
              shadowColor: color,
              shadowOffset: {width: x, height: y},
              shadowOpacity: opacity,
              shadowRadius: border,
            },
            style,
          ]}>
          {children}
        </View>
      );
    }
  }
}
