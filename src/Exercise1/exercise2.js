/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameItems: [
        {id: 1, name: '7'},
        {id: 2, name: '8'},
        {id: 3, name: '9'},
        {id: 4, name: 'X'},
        {id: 5, name: '4'},
        {id: 6, name: '5'},
        {id: 7, name: '6'},
        {id: 8, name: '-'},
        {id: 9, name: '1'},
        {id: 10, name: '2'},
        {id: 11, name: '3'},
        {id: 12, name: '+'},
        {id: 13, name: '0'},
        {id: 14, name: '00'},
        {id: 15, name: '.'},
        {id: 16, name: '='},
      ],
    };
  }

  onPressButton = number => {
    alert('You tapped the button ' + number);
  };

  render() {
    let elements_state = this.state.nameItems.map((item, index) => {
      let result = '';
      result = (
        <Text key={item.id} style={style.styleButton}>
          {item.name}
        </Text>;
      );
      return result;
    });

    return (
      <View>
        <View
          style={{
            height: 800,
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'red',
          }}>
          <View style={{height: 120, flex: 1}}>
            <Text style={{fontSize: 30, color: 'black', textAlign: 'right'}}>
              0 + 4{' '}
            </Text>
            <Text style={{fontSize: 60, color: 'black', textAlign: 'right'}}>
              4
            </Text>
          </View>

          <View style={style.styleView}>
            <Text
              style={{
                flex: 2,
                textAlign: 'center',
                fontSize: 30,
                borderWidth: 0.5,
                borderColor: 'black',
                backgroundColor: 'red',
                textAlignVertical: 'center',
              }}>
              C
            </Text>
            <Text style={style.styleRed}>D</Text>
            <Text style={style.styleRed}>/</Text>
          </View>

          <View style={style.styleView}>{elements_state}</View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleButton: {
    flex: 1,
    textAlign: 'center',
    fontSize: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    textAlignVertical: 'center',
    width: 550,
  },
  styleView: {
    backgroundColor: 'pink',
    height: 50,
    flex: 1,
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
  styleRed: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'red',
    textAlignVertical: 'center',
  },
});

export default Exercise1;
