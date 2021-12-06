import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, Dimensions } from 'react-native';

export default function App() {
  const users = [{
    id: 1,
    name: 'Muhammed',
    image: 'https://static.wikia.nocookie.net/despicableme/images/1/1f/Ice_Cream_Minion.jpg/revision/latest?cb=20210217230051',
  }, {
    id: 2,
    name: 'Ibrahim',
    image: 'https://www.fromthemovie.com/wp-content/uploads/2015/07/Minions.jpg',
  }, {
    id: 3,
    name: 'Hewr',
    image: 'https://i.ytimg.com/vi/TjAg-8qqR3g/maxresdefault.jpg',
  }]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) =>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'skyblue', padding: 10, paddingHorizontal: 15, marginVertical: 10, borderRadius: 10, alignItems: 'center', width: Dimensions.get('screen').width * 0.8 }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Image style={{ width: 50, height: 50, borderRadius: 99 }} source={{ uri: item.image }} />

          </View>
        }
      />
    </SafeAreaView>
  );
}


