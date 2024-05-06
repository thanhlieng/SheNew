import React, {useCallback, useEffect, useRef, useState} from 'react';
import PostedContent from '../../Components/post';
import {FlatList, Text, View} from 'react-native';
import CommonComponent from '../../Components/common-component';
import {Beauty, Fashion, Lifestyle} from '../../Constant';
import DropDownPicker from 'react-native-dropdown-picker';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import PageComponent from '../../Components/page-component';

const NewsScreen = () => {
  const [listData, setListData] = useState([...Beauty]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(Beauty.length / 10));
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('beauty');
  const [items] = useState([
    {label: 'Beauty', value: 'beauty'},
    {label: 'Fashion', value: 'fashion'},
    {label: 'LifeStyle', value: 'life'},
  ]);
  const ref = useRef();

  useEffect(() => {
    if (value == 'beauty') {
      setListData([...Beauty]);
      setMaxPage(Math.ceil(Beauty.length / 10));
      setCurrentPage(1);
    }
    if (value == 'fashion') {
      setListData([...Fashion]);
      setMaxPage(Math.ceil(Fashion.length / 10));
      setCurrentPage(1);
    }
    if (value == 'life') {
      setListData([...Lifestyle]);
      setMaxPage(Math.ceil(Lifestyle.length / 10));
      setCurrentPage(1);
    }
  }, [value]);

  const renderItem = ({item}: {item: {image: string; text: string}}) => {
    return <PostedContent content={item} />;
  };

  const ListHeaderComponent = useCallback(() => {
    return (
      <View style={{marginBottom: 40}}>
        <CommonComponent />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            alignItems: 'center',
            marginTop: 30,
            flex: 1,
          }}>
          <Text style={{fontSize: 24, fontWeight: '400'}}>Category:</Text>
          <DropDownPicker
            style={{
              alignSelf: 'flex-start',
              flexGrow: 0,
              borderWidth: 0,
              width: 150,
            }}
            dropDownContainerStyle={{width: 150}}
            selectedItemLabelStyle={{color: '#ff3a6f'}}
            showTickIcon={false}
            labelStyle={{fontSize: 24, fontWeight: '400'}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            listMode={'FLATLIST'}
            dropDownDirection={'TOP'}
          />
        </View>
      </View>
    );
  }, [items, open]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        ref={ref}
        style={{backgroundColor: 'white'}}
        data={listData.slice(
          (currentPage - 1) * 10,
          (currentPage - 1) * 10 + 9,
        )}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.text + `${index}`}
        ListHeaderComponent={<ListHeaderComponent />}
        removeClippedSubviews={true}
        ListFooterComponent={
          <>
            <PageComponent
              maxPage={maxPage}
              setCurrentPage={(page: any) => {
                setCurrentPage(page);
                ref.current?.scrollToIndex({index: 0, animated: true});
              }}
              currentPage={currentPage}
            />
            <View style={{height: 80}}></View>
          </>
        }
        onScrollToIndexFailed={({index}) => {
          ref.current?.scrollToOffset({
            offset: index * 0.5,
            animated: true,
          });
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            ref.current?.scrollToIndex({index, animated: true});
          });
        }}
      />
    </View>
  );
};

export default NewsScreen;
