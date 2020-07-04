import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TextInput} from 'react-native';

function index() {
  const name = useSelector((state) => state.userReducer.name);

  return (
    <View>
      <Text>teste</Text>
      <Text>-----</Text>
      <Text>teste</Text>
      <Text>{name}</Text>
    </View>
  );
}

export default index;
