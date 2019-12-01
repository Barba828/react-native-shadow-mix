/* eslint-disable react-native/no-inline-styles */
import ShadowMix from '../index';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Button} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default class ShadowMixDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shadow Test</Text>
        <View style={styles.inputSize}>
          <ShadowMix
            width={300}
            height={50}
            color="#4682B4"
            border={10}
            opacity={0.5}
            x={10}
            y={10}>
            <View style={{width: 300, height: 50}} backgroundColor="white" />
          </ShadowMix>
          <ShadowMix
            width={300}
            height={50}
            color="#F4A460"
            border={10}
            radius={30}
            opacity={0.5}
            x={5}
            y={5}>
            <View
              style={{width: 300, height: 50, borderRadius: 30}}
              backgroundColor="white"
            />
          </ShadowMix>
          <ShadowMix
            width={300}
            height={50}
            color="#3CB371"
            border={10}
            opacity={0.5}
            x={1}
            y={1}>
            <View style={styles.inputWithShadow} backgroundColor="white" />
          </ShadowMix>
        </View>
        <View
          style={{
            height: 80,
            width: WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <ShadowMix
            width={50}
            height={50}
            color="#008B8B"
            border={10}
            radius={25}
            opacity={0.5}
            x={3}
            y={3}>
            <View
              style={{width: 50, height: 50, borderRadius: 25}}
              backgroundColor="white"
            />
          </ShadowMix>
          <ShadowMix
            width={50}
            height={50}
            color="#008B8B"
            border={10}
            radius={10}
            opacity={0.5}
            x={1}
            y={1}>
            <View
              style={[styles.boxWithShadow, {borderRadius: 10}]}
              backgroundColor="white"
            />
          </ShadowMix>
          <ShadowMix
            width={50}
            height={50}
            color="#008B8B"
            border={10}
            opacity={0.5}
            x={1}
            y={1}>
            <View style={styles.boxWithShadow} backgroundColor="white" />
          </ShadowMix>
        </View>

        <View
          style={{
            height: 80,
            width: WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <ShadowMix
            width={20}
            height={20}
            color="#696969"
            border={3}
            radius={25}
            opacity={0.5}
            x={3}
            y={3}>
            <View
              style={[styles.buttonWithShadow, {borderRadius: 25}]}
              backgroundColor="#00BFFF"
            />
          </ShadowMix>
          <ShadowMix
            width={20}
            height={20}
            color="#696969"
            border={3}
            radius={25}
            opacity={0.5}
            x={3}
            y={-3}>
            <View
              style={[styles.buttonWithShadow, {borderRadius: 25}]}
              backgroundColor="#00BFFF"
            />
          </ShadowMix>
          <ShadowMix
            width={20}
            height={20}
            color="#696969"
            border={3}
            radius={25}
            opacity={0.5}
            x={-3}
            y={-3}>
            <View
              style={[styles.buttonWithShadow, {borderRadius: 25}]}
              backgroundColor="#00BFFF"
            />
          </ShadowMix>
          <ShadowMix
            width={20}
            height={20}
            color="#696969"
            border={3}
            radius={25}
            opacity={0.5}
            x={3}
            y={-3}>
            <View
              style={[styles.buttonWithShadow, {borderRadius: 25}]}
              backgroundColor="#00BFFF"
            />
          </ShadowMix>
          <ShadowMix
            width={20}
            height={20}
            color="#696969"
            border={3}
            radius={25}
            opacity={0.5}
            x={3}
            y={-3}>
            <View
              style={[styles.buttonWithShadow, {borderRadius: 25}]}
              backgroundColor="#FF6347"
            />
          </ShadowMix>
          <ShadowMix
            width={20}
            height={20}
            color="#696969"
            border={3}
            radius={25}
            opacity={0.5}
            x={3}
            y={-3}>
            <View
              style={[styles.buttonWithShadow, {borderRadius: 25}]}
              backgroundColor="#00FA9A"
            />
          </ShadowMix>
        </View>
        <View
          style={{
            height: 80,
            width: WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <ShadowMix style={styles.boxWithShadow} elevation={2} />
          <ShadowMix style={styles.boxWithShadow} elevation={4} />
          <ShadowMix style={styles.boxWithShadow} elevation={8} />
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#F7F8FA',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputSize: {
    height: 300,
    width: WIDTH,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputWithShadow: {
    height: 50,
    width: 300,
  },
  boxWithShadow: {
    height: 50,
    width: 50,
  },
  buttonWithShadow: {
    height: 20,
    width: 20,
  },
});
