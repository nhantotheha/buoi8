import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DATA = [
  { id: '1', title: 'Food 1', subtitle: 'By Viet Nam', count: '19' },
  { id: '2', title: 'Food 2', subtitle: 'By Viet Nam', count: '35' },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.itemImage}
      />
      <View style={styles.itemText}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        <Text style={styles.itemCount}>{item.count}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorer</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search meals or area"
          placeholderTextColor="#999"
        />
      </View>
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Burger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Steak</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    color: '#666',
  },
  itemCount: {
    color: '#FF6347',
  },
});

export default HomeScreen;