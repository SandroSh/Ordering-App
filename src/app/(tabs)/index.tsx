import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';


export default function MenuScreen() {
  return (
    <ScrollView style= {styles.mainContainer}>
      <ProductListItem product = {products[0]}/>
      <ProductListItem product = {products[1]}/>
      <ProductListItem product = {products[2]}/>
     
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:20,
  },
 
});
