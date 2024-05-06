import {FlatList, ScrollView, View} from 'react-native';
import CommonComponent from '../../Components/common-component';
import RecentPost from '../../Components/recent-post';
import {HomeData} from '../../Constant';
import PostedContent from '../../Components/post';
import PageComponent from '../../Components/page-component';
import {useEffect, useRef, useState} from 'react';

const HomeScreen = () => {
  const [listData, setListData] = useState([...HomeData].slice(0, 9));
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage] = useState(Math.ceil(HomeData.length / 10));
  const ref = useRef();

  useEffect(() => {
    setListData(
      [...HomeData].slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 9),
    );
    ref.current.scrollToIndex({index: 0, animated: true});
  }, [currentPage]);

  const renderItem = ({item}: {item: {image: string; text: string}}) => {
    return <PostedContent content={item} />;
  };

  const ListFooterComponent = () => {
    return (
      <View>
        <PageComponent
          maxPage={maxPage}
          setCurrentPage={(page: any) => setCurrentPage(page)}
          currentPage={currentPage}
        />
        <View style={{height: 50}}></View>
        <RecentPost />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        ref={ref}
        ListFooterComponent={<ListFooterComponent />}
        style={{backgroundColor: 'white'}}
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.text + `${index}`}
        ListHeaderComponent={<CommonComponent />}
        removeClippedSubviews={true}
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

export default HomeScreen;
