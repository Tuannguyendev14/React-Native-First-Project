import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import Input from './Input';
import Button from './Button';

//import {Item, Input, Icon, Label} from 'native-base';

class SignUpC2 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
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

  onHandleSubmit = event => {
    var {
      userName,
      email,
      accountName,
      phone,
      password,
      confirmPass,
    } = this.state;

    const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.onRestart();

    if (userName === '') {
      this.setState({errorUserName: 'Nhập user name!'});
    }
    if (email === '') {
      this.setState({errorEmail: 'Nhập email!'});
    }
    if (formatEmail.test(email) === false) {
      this.setState({errorEmail: 'Email không hợp lệ!'});
    }
    if (accountName === '') {
      this.setState({errorAccountName: 'Nhập tên tài khoản!'});
    }
    if (phone === '') {
      this.setState({errorPhone: 'Nhập email!'});
    }
    if (isNaN(phone)) {
      this.setState({errorPhone: 'Số điện thoại không hợp lệ!'});
    }
    if (phone.length > 10) {
      this.setState({errorPhone: 'Số điện thoại không hợp lệ!'});
    }
    if (phone.length < 10) {
      this.setState({errorPhone: 'Số điện thoại không hợp lệ!'});
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
  };

  getData = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    var {
      errorPhone,
      errorUserName,
      errorEmail,
      errorAccountName,
      errorPassword,
      errorConfirmPass,
    } = this.state;
    return (
      <ScrollView orientation="vertical">
        <View>
          <View style={style.styleHeader}>
            <Text style={style.styleClose}>X</Text>
            <Text style={style.styleText}>Đăng Kí</Text>
          </View>

          <Input
            getData={e => this.getData('userName', e)}
            title="Tên người dùng *"
            placeholder="Nhập tên..."
            error={errorUserName}
          />
          <Input
            getData={e => this.getData('email', e)}
            title="Email *"
            placeholder="Nhập email..."
            error={errorEmail}
          />
          <Input
            getData={e => this.getData('phone', e)}
            title="Phone *"
            placeholder="Nhập số điện thoại..."
            error={errorPhone}
            keyboardType="numeric"
          />
          <Input
            getData={e => this.getData('accountName', e)}
            title="Tên tài khoản *"
            placeholder="Nhập tên tài khoản..."
            error={errorAccountName}
          />
          <Input
            getData={e => this.getData('password', e)}
            title="Mật khẩu *"
            placeholder="Nhập mật khẩu..."
            error={errorPassword}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
          />

          <Input
            getData={e => this.getData('confirmPass', e)}
            title="Xác nhận mật khẩu *"
            placeholder="Xác nhận mật khẩu ..."
            error={errorConfirmPass}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
          />

          <Button onHandleSubmit={this.onHandleSubmit} />
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  styleClose: {
    fontSize: 30,
    color: 'black',
    flex: 0.2,
    padding: 10,
  },

  styleText: {
    fontSize: 30,
    padding: 10,
    marginLeft: 60,
  },
  styleHeader: {
    flexDirection: 'row',
  },
});

export default SignUpC2;
