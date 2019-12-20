import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native';

import flatListData from './FlatListData';
import FlatListItem from './FlatListItem';
import AddModal from './AddModal';
import EditModal from './EditModal';

class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
  }

  refreshFlatList = activeKey => {
    this.setState(prevState => {
      return {
        deletedRowKey: activeKey,
      };
    });

    this.refs.FlatList.scrollToEnd();
  };

  onPressAdd = () => {
    this.refs.addModal.showAddModal();
  };

  render() {
    return (
      <View style={style.styleView}>
        <View style={style.styleHeaderView}>
          <TouchableHighlight
            style={{marginRight: 10}}
            underlayColor="tomato"
            onPress={this.onPressAdd}>
            <Image
              style={style.styleIconAdd}
              source={require('../../icons/add.png')}
            />
          </TouchableHighlight>
        </View>
        <FlatList
          ref={'FlatList'}
          data={flatListData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />

        <AddModal ref={'addModal'} parentFlatList={this} />
        <EditModal ref={'editModal'} parentFlatList={this} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleView: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  styleHeaderView: {
    backgroundColor: '#d1f9f3',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  styleIconAdd: {
    width: 35,
    height: 35,
  },
});

export default BasicFlatList;
