import {Text, TouchableOpacity, View} from 'react-native';
import {onPressToDetail} from '../Utils';

const RecentPost = () => {
  const data = [
    {
      text: 'အချိန်မရှိသူတို့ စာပိုဖတ်နိုင်ဖို့ နည်းလမ်း (၂) မျိုး',
      image: 'https://shwenews.com.mm/wp-content/uploads/2024/03/98.jpg',
    },
    {
      text: 'နွားနို့ပူပူလေးကို ညဘက်မှာသောက်ခြင်းရဲ့ အကျိုးကျေးဇူးများ',
      image: 'https://shwenews.com.mm/wp-content/uploads/2024/03/97.jpg',
    },
    {
      text: 'ဆယ်ကျော်သက်တွေအတွက် အသားအရေထိန်းသိမ်းနည်းများ',
      image: 'https://shwenews.com.mm/wp-content/uploads/2024/03/96.jpg',
    },
    {
      text: 'ကမ်းခြေတွေ ‌ရေကူးကန်တွေမှာ ဝတ်သင့်တဲ့ ဒီဇိုင်းများ',
      image: 'https://shwenews.com.mm/wp-content/uploads/2024/03/95.jpg',
    },
    {
      text: 'အိမ်မှာ မရှိသင့်တာ နဲ့ မထားသင့် သော အရာများ',
      image: 'https://shwenews.com.mm/wp-content/uploads/2024/03/94.jpg',
    },
  ];

  return (
    <View style={{marginHorizontal: 24}}>
      <Text style={{marginBottom: 5, fontWeight: '500'}}>Recent Posts</Text>
      <View
        style={{
          width: '100%',
          backgroundColor: 'black',
          height: 1,
          marginBottom: 15,
        }}></View>
      {data.map((ele, index) => {
        return (
          <TouchableOpacity
            style={{marginBottom: 10}}
            key={index}
            onPress={() => {
              onPressToDetail({text: ele.text, image: ele.image});
            }}>
            <Text style={{marginBottom: 5}}>{ele.text}</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: 'black',
                height: 1,
                opacity: index == data.length - 1 ? 0 : 0.2,
              }}></View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default RecentPost;
