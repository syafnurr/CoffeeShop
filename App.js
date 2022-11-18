import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import Content from './src/components/Content';

const App = () => {
  return (
    <View style={{backgroundColor: '#1a1a1a', flex: 1}}>
      <ScrollView>
        <View style={{marginVertical: 15}}>
          <Header />
          <Content />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
