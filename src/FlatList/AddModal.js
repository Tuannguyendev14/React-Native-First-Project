import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Image,
  Dimensions,
} from 'react-native';

//npm install react-native-modalbox@latest --save
import Modal from 'react-native-modalbox';

//npm i react-native-button
import Button from 'react-native-button';
import flatListData from './FlatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFoodName: '',
      newDescription: '',
    };
  }

  showAddModal = () => {
    this.refs.myModal.open();
  };

  generateKey = numberOfCharacters => {
    return require('random-string')({length: numberOfCharacters});
  };

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={style.styleModal}
        position="center"
        backdrop={true}
        onClosed={() => {
          alert('Your data saved ! ');
        }}>
        <Text style={style.styleTitle}>Add new food</Text>

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter food name"
          value={this.state.newFoodName}
          onChangeText={text => this.setState({newFoodName: text})}
        />

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter description "
          value={this.state.newDescription}
          onChangeText={text => this.setState({newDescription: text})}
        />

        <Button
          style={style.styleButtonAdd}
          onPress={() => {
            if (
              this.state.newFoodName.length == 0 ||
              this.state.newDescription.length == 0
            ) {
              alert('Enter name & description!');
              return;
            }
            const newKey = this.generateKey(24);
            const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULo0hDbX8PTvrSg8hvPB7mFG5cPgnymlNIoj4Y_tFpVSukASl&sg',
              description: this.state.newDescription,
            };

            flatListData.push(newFood);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
          }}>
          Save
        </Button>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  styleTextInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  styleButtonAdd: {
    fontSize: 18,
    color: 'white',
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 10,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  styleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  styleModal: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280,
  },
});
