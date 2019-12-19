import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  getData = value => {
    this.props.getData(value);
  };

  render() {
    const {error} = this.props;
    return (
      <View>
        <View style={style.styleView}>
          <Text style={style.styleTitle}>{this.props.title}</Text>
          <TextInput
            style={style.styleTextInput}
            {...this.props}
            value={this.state.value}
            onChangeText={text => this.getData(text)}
          />
          <Text style={style.styleError}>{error}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleTextInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
  },
  styleTitle: {
    fontSize: 25,
    color: '#a09292',
  },
  styleView: {
    padding: 12,
  },
  styleError: {
    fontSize: 15,
    color: 'red',
  },
});

export default Input;
