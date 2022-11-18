import {StyleSheet, View} from 'react-native';
import AllMenu from './AllMenu';
import Recomended from './Recomended';

const Content = () => {
  return (
    <View style={styles.container}>
      <Recomended />
      <View>
        <AllMenu />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {marginHorizontal: 15, marginTop: 10},
});
