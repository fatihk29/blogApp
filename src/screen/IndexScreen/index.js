import React, {useContext} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import BlogContext from '../../context/BlogContext';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screeen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
