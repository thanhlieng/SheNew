import React from 'react';
import {Image, ScrollView, Text, View, useWindowDimensions} from 'react-native';
import HeaderComponent from '../../Components/header';
import CommonComponent from '../../Components/common-component';
import RecentPost from '../../Components/recent-post';
import {AppStackScreenProps, NavigationProps} from '../../Navigation';
import {Route, RouteProp} from '@react-navigation/native';

const DetailScreen = ({route}) => {
  const {image, text} = route.params;
  console.log(image, text);

  const {height, width} = useWindowDimensions();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <CommonComponent back={true} />
        <View style={{marginHorizontal: 24}}>
          <Image
            src={image}
            style={{width: '100%', height: width - 48, marginBottom: 15}}
          />
          <Text
            style={{
              fontSize: 20,
              marginBottom: 45,
              textAlign: 'center',
              alignSelf: 'center',
              marginHorizontal: 10,
            }}>
            {text}
          </Text>
          <Text>This content is restricted to subscribers</Text>
        </View>
        <View style={{height: 50}}></View>
        <RecentPost />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
