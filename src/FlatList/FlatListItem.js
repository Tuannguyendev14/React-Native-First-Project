import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, Image} from 'react-native';

import Swipeout from 'react-native-swipeout';
//npm install --save react-native-swipeout

import flatListData from './FlatListData';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
    };
  }

  refreshFlatListItem = () => {
    this.setState(prevState => {
      return {
        numberOfRefresh: prevState.numberOfRefresh + 1,
      };
    });
  };
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        this.setState({activeRowKey: null});
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            // Update
            this.props.parentFlatList.refs.editModal.showEditModal(
              flatListData[this.props.index],
              this,
            );
          },
          text: 'Update',
          type: 'primary',
        },
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    // Refresh FlatList!
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };

    return (
      <Swipeout {...swipeSettings}>
        <View
          style={[
            style.styleView,
            {
              backgroundColor: this.props.index % 2 == 0 ? 'pink' : '#34f1e8',
            },
          ]}>
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={style.styleImage}
          />

          <View style={style.styleText}>
            <Text style={style.styleFlatListItem}>{this.props.item.name}</Text>
            <Text style={style.styleFlatListItem}>
              {this.props.item.description}
            </Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const style = StyleSheet.create({
  styleFlatListItem: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
  styleText: {
    flex: 1,
    flexDirection: 'column',
  },
  styleImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
  styleView: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default FlatListItem;
