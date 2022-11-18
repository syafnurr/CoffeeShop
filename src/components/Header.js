import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../Image/avatar.png')} style={styles.avatar} />
        <View style={styles.locationBox}>
          <Image source={require('../Icon/maps.png')} style={styles.maps} />
          <Text style={styles.location}>Sleman, Yogyakarta</Text>
        </View>
      </View>
      <View style={styles.boxTitle}>
        <Text style={styles.title1}>Find the best</Text>
        <Text style={styles.title2}>coffe for you</Text>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.search}>
          <TextInput
            placeholder="Cari Informasi Kesehatan Anda"
            placeholderTextColor={'#bfbfbf'}
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchIcon}>
            {/* <Icon name="search" size={25} color="white" /> */}
            <Image
              source={require('../Icon/search.png')}
              width={23}
              style={{width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  maps: {marginRight: -190},
  locationBox: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  location: {
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 11,
  },
  notification: {width: 25, height: 25},
  boxTitle: {paddingLeft: 25, paddingTop: 10},
  title1: {color: 'white', fontSize: 32, fontWeight: 'bold'},
  title2: {color: 'white', fontSize: 32, fontWeight: 'bold'},
  searchBox: {paddingHorizontal: 15},
  search: {flexDirection: 'row'},
  searchInput: {
    backgroundColor: 'white',
    elevation: 3,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 15,
    flex: 1,
    backgroundColor: '#404040',
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0082F7',
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginLeft: 10,
    elevation: 3,
  },
});
