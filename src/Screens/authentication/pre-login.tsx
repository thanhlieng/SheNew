import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CommonComponent from '../../Components/common-component';
import {navigate} from '../../Navigation';

const PreLoginScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <CommonComponent />
        <View style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>
            Please purchase to read full article
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: 10,
              backgroundColor: '#ff3a6f',
              borderRadius: 8,
              marginTop: 16,
            }}
            onPress={() => navigate({name: 'Login', key: 'Login'})}>
            <Text style={{color: 'white', fontWeight: '500'}}>Go to Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 50, backgroundColor: 'white'}}></View>
      </ScrollView>
    </View>
  );
};
export default PreLoginScreen;
