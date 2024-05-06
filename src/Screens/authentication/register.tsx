import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RecentPost from '../../Components/recent-post';
import CommonComponent from '../../Components/common-component';
import Toast from 'react-native-toast-message';

const RegisterScreen = () => {
  const form = [
    {label: 'USERNAME', id: 1},
    {label: 'EMAIL', id: 2},
    {label: 'FIRST NAME', id: 3},
    {label: 'LAST NAME', id: 4},
    {label: 'PASSWORD', id: 5},
    {label: 'PASSWORD AGAIN', id: 6},
  ];

  const TextLineData = [
    {label: 'Membership Details', content: null, black: true},
    {label: 'Membership', content: 'Level 1', black: false},
    {label: 'Amount', content: 'free', black: false},
    {label: 'Total Today', content: 'free', black: false},
  ];

  const RadioButton = () => {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          borderWidth: 1,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'blue',
        }}>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 100,
            backgroundColor: 'blue',
          }}></View>
      </View>
    );
  };

  const TextLine = ({label, content, black}: any) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
        }}>
        <Text style={{fontWeight: black ? '500' : '400', marginLeft: 5}}>
          {label}
        </Text>
        {content ? (
          <Text style={{marginRight: 5, paddingVertical: 10}}>{content}</Text>
        ) : null}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <CommonComponent />
        <View
          style={{
            marginHorizontal: 24,
            marginBottom: 30,
            backgroundColor: 'white',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 24}}>Register</Text>
          <Text style={{fontSize: 18, marginVertical: 15}}>
            Register New Account
          </Text>
          {form.map(ele => {
            console.log(ele);
            return (
              <View key={ele.id} style={{marginBottom: 10}}>
                <Text style={{fontSize: 16, marginBottom: 5}}>{ele.label}</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: 'rgba(0,0,0,0.5)',
                  }}
                />
              </View>
            );
          })}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <RadioButton />
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 18}}>LEVEL 1 - FREE - UNLIMITED</Text>
              <Text
                style={{
                  fontSize: 14,
                  borderLeftWidth: 1,
                  borderColor: 'rgba(0,0,0,0.3)',
                }}>
                LEVEL 1
              </Text>
            </View>
          </View>
          <View>
            {TextLineData.map(ele => {
              return (
                <TextLine
                  label={ele.label}
                  content={ele.content}
                  black={ele.black}
                />
              );
            })}
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              marginTop: 30,
              backgroundColor: 'rgb(0, 102, 204)',
              alignSelf: 'flex-start',
            }}
            onPress={() => {
              Toast.show({
                text1: 'Request success',
                type: 'info',
                text2: 'We will consider your register request',
              });
            }}>
            <Text style={{fontWeight: '600', color: 'white'}}>Register</Text>
          </TouchableOpacity>
        </View>
        <RecentPost />
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
