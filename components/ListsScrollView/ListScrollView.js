import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const ListScrollView = () => {
  const [people, setPeople] = useState([
    {name: 'Armin', id: '1'},
    {name: 'Reza', id: '2'},
    {name: 'Alireza', id: '3'},
    {name: 'Mohammad', id: '4'},
    {name: 'Matin', id: '5'},
    {name: 'Radin', id: '6'},
    {name: 'Ariya', id: '7'},
    {name: 'Ali', id: '8'},
  ]);

  const pressHandler = id => {
    setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      {/* <View>
          <Text style={styles.listHeader}>Students:</Text>
          {people.map(({name, key}) => (
            <View style={styles.listItem} key={key}>
              <Text>{name}</Text>
            </View>
          ))}
        </View> */}
      <Text style={styles.listHeader}>Students:</Text>
      <FlatList
        data={people}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    // </ScrollView>
  );
};

export default ListScrollView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  listHeader: {
    fontSize: 50,
    color: 'skyblue',
    marginBottom: 20,
  },
  listItem: {
    padding: 30,
    backgroundColor: 'skyblue',
    marginBottom: 30,
  },
});
