/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Exercise1 from './src/Exercise1/exercise1';
import signUp from './src/Exercise2/signUp';
import signUpC2 from './src/Exercise2/signUpC2';
//import Exercise2 from './src/Exercise1/exercise2';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => signUp);
