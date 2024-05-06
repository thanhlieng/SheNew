import {Image, Pressable, View} from 'react-native';
import React from 'react';
import HeaderComponent from './header';

const CommonComponent = ({back}: any) => {
  const data = [
    {
      image:
        'https://shwenews.com.mm/wp-content/uploads/2024/03/nicolehomepage-scaled-1.jpg',
      id: 1,
    },
    {
      image:
        'https://shwenews.com.mm/wp-content/uploads/2024/03/phong-cach-Lifestyle-1.jpg',
      id: 2,
    },
    {
      image:
        'https://shwenews.com.mm/wp-content/uploads/2024/03/Louis-Vuittons-spring-2020-show.-vogue-scaled.jpg',
      id: 3,
    },
  ];

  return (
    <View>
      <HeaderComponent back={back} />
      <View
        style={{backgroundColor: 'white', marginHorizontal: 24, marginTop: 10}}>
        {data.map(ele => (
          <Pressable style={{width: '100%'}} key={ele.id}>
            <Image
              src={ele.image}
              style={{width: '100%', aspectRatio: 1.5, marginBottom: 20}}
              resizeMode={'cover'}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CommonComponent;
