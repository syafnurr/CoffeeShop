import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const AllMenu = () => {
  const [artikel, setArtikel] = useState([
    {
      judul: 'Americano',
      price: 'Rp. 35.000',
      image: require('../Image/image1.jpg'),
      rating: '4.9',
    },
    {
      judul: 'Exresso',
      price: 'Rp. 35.000',
      image: require('../Image/image2.jpg'),
      rating: '4.6',
    },
    {
      judul: 'Kopi Susu',
      price: 'Rp. 35.000',
      image: require('../Image/image3.jpg'),
      rating: '4.1',
    },
    {
      judul: 'Kopi Pasundan',
      price: 'Rp. 35.000',
      image: require('../Image/image4.jpg'),
      rating: '4.5',
    },
  ]);

  return (
    <View>
      <Text style={styles.recomended}>
          All Menu
        </Text>
      <FlatList
        style={styles.item}
        data={artikel}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardArticel}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{height: 180}}>
                <ImageBackground
                  imageStyle={{
                    borderRadius: 13,
                  }}
                  source={item.image}
                  style={styles.cardBackground}
                />
              </View>
              <View style={styles.cardTitle}>
                <Text style={styles.title}>{item.judul}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.ratingBox}>
                  <View style={styles.ratingIcon}>
                    <Image source={require('../Icon/star.png')} />
                  </View>
                  <Text style={styles.deskripsi}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AllMenu;

const styles = StyleSheet.create({
  recomended: {color: '#bfbfbf', marginTop: 20, fontWeight: 'bold',fontSize: 14, marginBottom: 5},
  container: {marginTop: -20, marginBottom: 15},
  cardArticel: {
    paddingBottom: 10,
    marginRight: 10,
    backgroundColor: '#0d0d0d',
    borderRadius: 15,
    height: 150,
    marginBottom: 20
  },
  item: {marginTop: 10},
  cardBackground: {
    flex: 1,
    borderRadius: 10,
    width: 120,
    height: 120,
    marginVertical: 15,
    marginLeft: 15,
  },
  cardTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    marginTop: 30
  },
  cardAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  title: {fontWeight: 'bold', fontSize: 18, color: 'white', marginTop: 5},
  price: {color: 'white', marginTop: 8},
  deskripsi: {color: '#FFA800'},
  ratingIcon: {marginRight: 5, justifyContent: 'center'},
  ratingBox: {flexDirection: 'row', marginTop: 8}
});
