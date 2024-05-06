/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, useColorScheme} from 'react-native';
import {navigationRef, useBackButtonHandler} from './navigationUtilities';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/home';
import DetailScreen from '../Screens/detail';
import NewsScreen from '../Screens/news';
import HeaderComponent from '../Components/header';
import RegisterScreen from '../Screens/authentication/register';
import PreLoginScreen from '../Screens/authentication/pre-login';
import LoginScreen from '../Screens/authentication/login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Detail: {text: string; image: string};
  Home: undefined;
  NewsS: undefined;
  Register: undefined;
  Registers: undefined;
  New: undefined;
  HomeS: undefined;
  PreLogin: undefined;
  Login: undefined;
  All: undefined;
  Call: {
    url: string;
    token: string;
    urlApi: string;
    room: string;
  };
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
};

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator();

function StackHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeS" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function StackNews() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsS" component={NewsScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function StackRegister() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Registers" component={RegisterScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#ff3a6f'}}>
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={StackNews}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={StackRegister}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme} {...props}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PreLogin" component={PreLoginScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="All" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
