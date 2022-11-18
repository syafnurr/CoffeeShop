import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Recomended = () => {
  const [kategori, setKategori] = useState([
    {namaKategori: 'Cappucino'},
    {namaKategori: 'Latte'},
    {namaKategori: 'Expresso'},
    {namaKategori: 'Flat White'},
    {namaKategori: 'Klinik'},
    {namaKategori: 'Rumah Sakit'},
  ]);

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
      <FlatList
        data={kategori}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardCategory}>
            <Text style={styles.textCategory}>{item.namaKategori}</Text>
          </TouchableOpacity>
        )}></FlatList>
      <Text style={styles.recomended}>Recomended for you</Text>
      <View>
        <FlatList
          style={styles.item}
          data={artikel}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.cardArticel}>
              <View style={{height: 180}}>
                <ImageBackground
                  imageStyle={{
                    borderTopRightRadius: 13,
                    borderTopLeftRadius: 13,
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
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Recomended;

const styles = StyleSheet.create({
  container: {marginHorizontal: 15, marginTop: 10},
  cardCategory: {
    paddingVertical: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 13,
    marginTop: 15,
  },
  textCategory: {fontWeight: 'bold'},
  cardArticel: {
    paddingBottom: 10,
    marginRight: 20,
    backgroundColor: '#0d0d0d',
    borderRadius: 15,
  },
  item: {marginTop: 10},
  cardBackground: {
    flex: 1,
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  cardTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    marginTop: -20,
  },
  cardAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  title: {fontWeight: 'bold', fontSize: 16, color: 'white'},
  price: {color: 'white', marginTop: 2},
  deskripsi: {color: '#FFA800'},
  recomended: {
    color: '#bfbfbf',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 14,
  },
  ratingBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: -5,
    marginTop: 10,
  },
  ratingIcon: {justifyContent: 'center', marginRight: 5},
});
