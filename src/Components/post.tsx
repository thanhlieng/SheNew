import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {onPressToDetail} from '../Utils';

interface Props {
  retricted?: Boolean;
  content: {image: string; text: string};
}

const PostedContent = (props: Props) => {
  const {height, width} = useWindowDimensions();
  const {image, text} = props.content;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        marginHorizontal: 24,
        marginBottom: 40,
      }}
      onPress={() => {
        onPressToDetail(props.content);
      }}>
      <Image
        src={image}
        style={{
          width: '100%',
          aspectRatio: 2.5,
          marginBottom: 10,
        }}></Image>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 30,
            textAlign: 'center',
            fontWeight: '200',
          }}>
          {text}
        </Text>
        <Text style={{color: 'rgba(0,0,0,0.5)'}}>
          This content is restricted to subscribers
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default PostedContent;
