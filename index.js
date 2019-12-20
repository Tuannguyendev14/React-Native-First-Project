/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Exercise1 from './src/Exercise1/Exercise1';
import SignUp from './src/Exercise2/SignUp';
import SignUp2 from './src/Exercise2/SignUp2';
import Demo from './src/Exercise3/demo';
import BasicFlatList from './src/FlatList/BasicFlatList';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BasicFlatList);
