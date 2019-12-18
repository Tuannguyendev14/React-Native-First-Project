/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    };
  }
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: this.state.color,
            height: 800,
            width: 500,
            flexDirection: 'row',
          }}>
          <View style={{backgroundColor: 'red', height: 50, width: 50}} />
        </View>
      </View>
    );
  }
}

export default App;
