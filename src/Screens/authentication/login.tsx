import React, {useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {navigationRef, resetRoot} from '../../Navigation';
import axios from 'axios';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import qs from 'qs';

const LoginScreen = () => {
  const [otp, sendOTP] = useState<boolean>(true);
  const [phone, setPhone] = useState('');
  const [otpValue, setOTPValue] = useState('');
  const otpGenerated = useRef<String>('');
  const {height, width} = useWindowDimensions();

  const generateRandomString = (length: Int32) => {
    let result = '';
    const characters = '0123456789'; // Characters to choose from

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  const pressButton = async () => {
    if (otp) {
      const otpGen = generateRandomString(6);
      otpGenerated.current = otpGen;
      let phoneEdit = phone;
      if (phone.startsWith('0')) {
        phoneEdit = phone.replace('0', '95');
      }
      if (phone.startsWith('+')) {
        phoneEdit = phone.replace('+', '');
      }
      const data = {
        to: '09696783333',
        message:
          'သင်၏ (Shwe News) ကုတ်မှာ 568942 ဖြစ်ပါသည်။ OTP ကုတ်အားမည်သူမျှ မပေးပါနှင့်။ရွှေသတင်း မှ ကြိုဆိုပါ၏။'.replace(
            '[OTP]',
            otpGen,
          ),
        sender_id: 'shwe news',
        otp: otpGen,
      };
      const params = new URLSearchParams();
      params.append('to', phoneEdit);
      params.append(
        'message',
        'သင်၏ (Shwe News) ကုတ်မှာ [OTP] ဖြစ်ပါသည်။ OTP ကုတ်အားမည်သူမျှ မပေးပါနှင့်။ရွှေသတင်း မှ ကြိုဆိုပါ၏။'.replace(
          '[OTP]',
          otpGen,
        ),
      );
      params.append('sender_id', 'Shwe News');
      params.append('otp', otpGen);
      console.log(params);
      console.log(1);
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      // const response = await axios.post(
      //   'http://43.231.65.136:8080/mesage_api/SendMessage2',
      //   params,
      //   config,
      // );
      let data1 = qs.stringify({
        to: '959698075558',
        message:
          'သင်၏ (Shwe News) ကုတ်မှာ [OTP] ဖြစ်ပါသည်။ OTP ကုတ်အားမည်သူမျှ မပေးပါနှင့်။ရွှေသတင်း မှ ကြိုဆိုပါ၏။'.replace(
            '[OTP]',
            otpGen,
          ),
        sender_id: 'Shwe News',
        otp: otpGen,
      });

      let config2 = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://43.231.65.136:8080/mesage_api/SendMessage2',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data1,
      };

      const response = await axios.request(config2);
      console.log(response.data);
      console.log(response.data);

      if (response.data == '1') {
        Toast.show({
          type: 'success',
          text1: 'OTP Sent',
          text2: 'We have send a otp code to your phone',
        });
        sendOTP(false);
        return;
      } else {
        Toast.show({
          type: 'error',
          text1: 'OTP Sent Unsuccess',
          text2: 'There maybe some problem, please try a gain',
        });
        return;
      }
    }
    if (otpValue.trim() == otpGenerated.current) {
      Toast.show({
        type: 'success',
        text1: 'Welcome to Shwe News',
        text2: 'Login success',
      });
      navigationRef.reset({index: 0, routes: [{name: 'All'}]});
    } else {
      Toast.show({
        type: 'error',
        text1: 'Login fail',
        text2: 'OTP not correct',
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ff3a6f'}}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 50,
          marginTop: height / 6,
          fontStyle: 'italic',
        }}>
        Shwe News
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          top: height / 2.8,
          width: width - 16,
          marginHorizontal: 8,
          borderRadius: 8,
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}>
        <Text
          style={{
            color: '#ff3a6f',
            alignSelf: 'center',
            fontSize: 24,
          }}>
          Login
        </Text>
        <View style={{marginTop: 16}}>
          <Text style={{marginLeft: 16, color: '#ff3a6f'}}>Phone number</Text>
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 4,
              borderColor: 'rgba(0,0,0,0.2)',
              marginHorizontal: 16,
              maxHeight: 40,
              borderBottomWidth: 1,
              color: 'black',
            }}
            placeholder="09687035768"
            focusable={otp}
            keyboardType={'number-pad'}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
        {!otp ? (
          <View style={{marginTop: 16}}>
            <Text style={{marginLeft: 16, color: '#ff3a6f'}}>OTP code</Text>
            <TextInput
              style={{
                flex: 1,
                paddingLeft: 4,
                borderColor: 'rgba(0,0,0,0.2)',
                marginHorizontal: 16,
                maxHeight: 40,
                borderBottomWidth: 1,
                color: 'black',
              }}
              value={otpValue}
              onChangeText={text => setOTPValue(text)}
              keyboardType={'number-pad'}
            />
          </View>
        ) : null}

        {phone.length > 8 ? (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: otp ? 10 : 15,
              backgroundColor: '#ff3a6f',
              borderRadius: 8,
              marginTop: 24,
            }}
            onPress={pressButton}>
            <Text style={{color: 'white', fontWeight: '500'}}>
              {otp ? 'Send OTP' : 'Login'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default LoginScreen;
