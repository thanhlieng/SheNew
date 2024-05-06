import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {navigationRef} from '../Navigation';

const HeaderComponent = ({back}: any) => {
  return (
    <View
      style={{
        backgroundColor: '#ff3a6f',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 24,
        }}>
        Shwe News
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 15,
          fontWeight: '300',
        }}>
        Entertainment, Fashion, Lifestyle, Beauty
      </Text>
      {back ? (
        <TouchableOpacity
          style={{position: 'absolute', left: 15, top: 30}}
          onPress={navigationRef.goBack}>
          <Image
            source={require('../Assets/a.png')}
            style={{width: 25, height: 20}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default HeaderComponent;
