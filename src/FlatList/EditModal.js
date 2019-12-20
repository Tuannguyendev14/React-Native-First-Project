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

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      description: '',
    };
  }

  showEditModal = (editingFood, flatlistItem) => {
    // console.log(`editingFood = ${JSON.stringify(editingFood)}`);

    this.setState({
      key: editingFood.key,
      foodName: editingFood.name,
      description: editingFood.description,
      flatlistItem: flatlistItem,
    });

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
        <Text style={style.styleTitle}>Update data</Text>

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter food name"
          value={this.state.foodName}
          onChangeText={text => this.setState({foodName: text})}
        />

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter description "
          value={this.state.description}
          onChangeText={text => this.setState({description: text})}
        />

        <Button
          style={style.styleButtonAdd}
          onPress={() => {
            if (
              this.state.foodName.length == 0 ||
              this.state.description.length == 0
            ) {
              alert('Enter name & description!');
              return;
            }

            // Update existing Food
            var foundIndex = flatListData.findIndex(
              item => this.state.key == item.key,
            );

            if (foundIndex < 0) {
              return; // Not found
            }

            flatListData[foundIndex].name = this.state.foodName;
            flatListData[foundIndex].description = this.state.description;

            // Refresh flatlist item
            this.state.flatlistItem.refreshFlatListItem();
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
