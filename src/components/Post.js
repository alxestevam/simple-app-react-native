import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    minHeight: 150,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#342E37',
  },
  author: {
    color: '#555',
  },
  description: {
    color: '#555',
  },
});

const Post = ({ title, author, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.separator} />
    <Text style={styles.description}>{description}</Text>
  </View>
);

Post.defaultProps = {
  title: 'Aprendendo React Native',
  author: 'Alexandre Estevam',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem feugiat, tempor felis in, consequat odio. Maecenas suscipit enim vel ex eleifend egestas et sed orci. Quisque massa tellus, consectetur cursus condimentum ac, molestie id ex. Etiam eleifend imperdiet gravida. Curabitur libero mi, dapibus sit amet tortor non, sollicitudin molestie massa.',
};

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Post;
