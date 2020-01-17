import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import './config/ReactotronConfig';
import './config/ReactDevToolsConfig';
import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  postsContainer: {
    backgroundColor: '#3C91E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Learning Node',
      author: 'Alexandre Estevam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem feugiat, tempor felis in, consequat odio. Maecenas suscipit enim vel ex eleifend egestas et sed orci. Quisque massa tellus, consectetur cursus condimentum ac, molestie id ex. Etiam eleifend imperdiet gravida. Curabitur libero mi, dapibus sit amet tortor non, sollicitudin molestie massa.',
    },
    {
      id: Math.random(),
      title: 'Learning React',
      author: 'Alexandre Estevam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem feugiat, tempor felis in, consequat odio. Maecenas suscipit enim vel ex eleifend egestas et sed orci. Quisque massa tellus, consectetur cursus condimentum ac, molestie id ex. Etiam eleifend imperdiet gravida. Curabitur libero mi, dapibus sit amet tortor non, sollicitudin molestie massa.',
    },
    {
      id: Math.random(),
      title: 'Learning React Native',
      author: 'Alexandre Estevam',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem feugiat, tempor felis in, consequat odio. Maecenas suscipit enim vel ex eleifend egestas et sed orci. Quisque massa tellus, consectetur cursus condimentum ac, molestie id ex. Etiam eleifend imperdiet gravida. Curabitur libero mi, dapibus sit amet tortor non, sollicitudin molestie massa.',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learning Basic App</Text>
      </View>
      <ScrollView>
        <View style={styles.postsContainer}>
          {posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
