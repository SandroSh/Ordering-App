import { FlatList, StyleSheet, View} from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';


export default function MenuScreen() {
  return (
    <View style= {styles.mainContainer}>
      <FlatList
        data={products}
        renderItem={ ({item}) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:10, padding:5}}
        columnWrapperStyle={{gap:10}}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:20,
  },
 
});
