import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
type ProductListItemProps = {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
          <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} resizeMode='contain' />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price} >${product.price}</Text>
          </View>
        </Pressable>
    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    maxWidth:"50%",
    flex:1,
  },
  textContainer:{
    marginVertical:10,
    flexDirection:'column',
    justifyContent:"space-around",
    alignItems:"center"
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontSize:14
  }
});
