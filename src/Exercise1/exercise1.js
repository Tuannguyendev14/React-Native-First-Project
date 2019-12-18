import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';

class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
    };
  }

  _onPressButton = () => {
    alert('You tapped the button ');
  };

  render() {
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
              0 + 4
            </Text>
            <Text style={{fontSize: 60, color: 'black', textAlign: 'right'}}>
              0
            </Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleDelete}>C</Text>
            <Text style={style.styleRed}>D</Text>
            <Text style={style.styleRed}>/</Text>
          </View>

          <View style={style.styleView}>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>7</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>8</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>9</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleRed}>*</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={style.styleView}>
            {/* <Text style={style.styleButton}>4</Text> */}
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>4</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>5</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>6</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleRed}>-</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={style.styleView}>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>1</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>2</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleButton}>3</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={style.styleButton}>
                <Text style={style.styleRed}>+</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleButton}>0</Text>
            <Text style={style.styleButton}>00</Text>
            <Text style={style.styleButton}>.</Text>
            <Text style={style.styleRed}>=</Text>
          </View>
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
    borderColor: 'yellow',
    textAlignVertical: 'center',
  },
  styleView: {
    backgroundColor: 'pink',
    height: 100,
    flex: 1,
    flexDirection: 'row',
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

  styleDelete: {
    flex: 2,
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'red',
    textAlignVertical: 'center',
  },
});

export default Exercise1;
