import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const PageComponent = (props: any) => {
  const {maxPage, currentPage, setCurrentPage} = props;

  const ButtonChangePage = ({text, onPress, disable, opacity}: any) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          width: 70,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          opacity,
        }}
        disabled={disable}
        onPress={onPress}>
        <Text style={{color: 'white'}}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <ButtonChangePage
        text={'Previous'}
        onPress={() => setCurrentPage(currentPage - 1)}
        disable={currentPage == 1}
        opacity={currentPage == 1 ? 0 : 1}
      />
      <Text style={{marginHorizontal: 20, fontSize: 16}}>{currentPage}</Text>
      <ButtonChangePage
        text={'Next'}
        onPress={() => setCurrentPage(currentPage + 1)}
        disable={currentPage == maxPage}
        opacity={currentPage == maxPage ? 0 : 1}
      />
    </View>
  );
};

export default PageComponent;
