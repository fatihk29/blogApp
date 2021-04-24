import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../../../src/context/BlogContext';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find(blogPosts => {
    return blogPosts.id === navigation.getParam('id');
  });
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
