import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from 'react-native';

//import {Item, Input, Icon, Label} from 'native-base';

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      phone: '',
      accountName: '',
      password: '',
      confirmPass: '',
      errorUserName: '',
      errorEmail: '',
      errorPhone: '',
      errorAccountName: '',
      errorPassword: '',
      errorConfirmPass: '',
    };
  }

  onRestart = () => {
    this.setState({
      errorUserName: '',
      errorEmail: '',
      errorPhone: '',
      errorAccountName: '',
      errorPassword: '',
      errorConfirmPass: '',
    });
  };

  onTest = () => {
    this.onRestart();
  };

  onHandleSubmit = event => {
    var {
      userName,
      email,
      phone,
      accountName,
      password,
      confirmPass,
    } = this.state;
    this.onRestart();

    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userName === '') {
      this.setState({errorUserName: 'Nhập tên người dùng!'});
    }
    if (email === '') {
      this.setState({errorEmail: 'Nhập email!'});
    }
    if (format.test(email) === false) {
      this.setState({errorEmail: 'Email không hợp lệ!'});
    }
    if (phone === '') {
      this.setState({errorPhone: 'Nhập số điện thoại!'});
    }
    if (isNaN(phone)) {
      this.setState({errorPhone: 'Số điện thoại không hợp lệ!'});
    }
    if (phone.length > 11) {
      this.setState({errorPhone: 'Số điện thoại không hợp lệ!'});
    }
    if (accountName === '') {
      this.setState({errorAccountName: 'Nhập tên tài khoản!'});
    }
    if (password === '') {
      this.setState({errorPassword: 'Nhập password!'});
    }
    if (password.length < 8) {
      this.setState({errorPassword: 'Password không hợp lệ!'});
    }
    if (password.length > 64) {
      this.setState({errorPassword: 'Password không hợp lệ!'});
    }
    if (confirmPass != password) {
      this.setState({errorConfirmPass: 'Password không khớp!'});
    }

    console.log(this.state);
  };

  render() {
    return (
      <ScrollView orientation="vertical">
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.styleClose}>X</Text>
            <Text style={style.styleText}>Đăng Kí</Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleTitle}>Tên người dùng *</Text>
            <TextInput
              style={style.styleTextInput}
              placeholder="Nhập tên..."
              name="userName"
              onChangeText={userName => {
                this.setState({userName});
              }}
              value={this.state.userName}
              returnKeyType={'next'}
              autoFocus={true}
            />
            <Text style={style.styleError}>{this.state.errorUserName}</Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleTitle}>Email *</Text>
            <TextInput
              style={style.styleTextInput}
              placeholder="Nhập email..."
              name="email"
              onChangeText={email => {
                this.setState({email});
              }}
              value={this.state.email}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={style.styleError}>{this.state.errorEmail}</Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleTitle}>Số điện thoại *</Text>
            <TextInput
              style={style.styleTextInput}
              placeholder="Nhập số điện thoại ..."
              onChangeText={phone => {
                this.setState({phone});
              }}
              value={this.state.phone}
              keyboardType="numeric"
            />
            <Text style={style.styleError}>{this.state.errorPhone}</Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleTitle}>Tên tài khoản *</Text>
            <TextInput
              style={style.styleTextInput}
              placeholder="Nhập tên tài khoản..."
              onChangeText={accountName => {
                this.setState({accountName});
              }}
              value={this.state.accountName}
            />
            <Text style={style.styleError}>{this.state.errorAccountName}</Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleTitle}>Mật khẩu*</Text>
            <TextInput
              style={style.styleTextInput}
              placeholder="Nhập mật khẩu ..."
              onChangeText={password => {
                this.setState({password});
              }}
              value={this.state.password}
              returnKeyType="go"
              secureTextEntry={true}
              autoCorrect={false}
            />
            <Text style={style.styleError}>{this.state.errorPassword}</Text>
          </View>

          <View style={style.styleView}>
            <Text style={style.styleTitle}>Xác nhận mật khẩu *</Text>
            <TextInput
              style={style.styleTextInput}
              placeholder="Xác nhận mật khẩu ..."
              secureTextEntry={true}
              onChangeText={confirmPass => {
                this.setState({confirmPass});
              }}
              value={this.state.confirmPass}
            />
            <Text style={style.styleError}>{this.state.errorConfirmPass}</Text>
          </View>

          <View style={{flexDirection: 'row', padding: 10}}>
            <TouchableWithoutFeedback onPress={this.onTest}>
              <Text
                style={[
                  style.button,
                  {
                    backgroundColor: 'white',
                    borderColor: 'blue',
                    color: '#a09292',
                  },
                ]}>
                Đăng nhập
              </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.onHandleSubmit}>
              <Text
                style={[
                  style.button,
                  {
                    backgroundColor: '#15d0ef',
                    borderColor: 'white',
                    color: 'white',
                  },
                ]}>
                Đăng kí
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
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
  styleText: {
    fontSize: 30,
    padding: 10,
    marginLeft: 60,
  },
  styleTitle: {
    fontSize: 25,
    color: '#a09292',
  },
  styleClose: {
    fontSize: 30,
    color: 'black',
    flex: 0.2,
    padding: 10,
  },
  styleView: {
    padding: 12,
  },

  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    width: 170,
    padding: 12,
    textAlign: 'center',
    marginLeft: 20,
  },
  styleError: {
    fontSize: 15,
    color: 'red',
  },
});

export default signUp;
