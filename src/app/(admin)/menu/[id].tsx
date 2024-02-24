import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {StyleSheet ,View, Text, Image, Pressable } from "react-native";
import { useCart } from "@/src/Providers/CartProvider";
import { PizzaSize } from "@/src/types";
import { FontAwesome } from "@expo/vector-icons";
const sizes: PizzaSize[] = ["S", "M", "L", "XL"]

 const ProductDetailsScreen = () => {

  const {id} = useLocalSearchParams();
  const {addItem} = useCart();
  const chosenProduct = products.find((p) => p.id.toString() == id);
const  router = useRouter();
  const[selectedSize, setSelectedSize] = useState<PizzaSize>('M');

  if(chosenProduct == null){
    return <Text>Product not Found</Text>
  }

 const addToCart = () => {
  if(!chosenProduct){
    return;
  }
    addItem(chosenProduct, selectedSize);
    router.push('/cart');
 }


  return (
    <View style={styles.container} >
       <Stack.Screen 
                options=
                  {{  title:"Menu",
                      headerRight: () => (
                        <Link href={`/(admin)/menu/create?id=${id}`} asChild>
                          <Pressable>
                            {({ pressed }) => (
                              <FontAwesome
                                name="pencil"
                                size={25}
                                color={"white"}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                              />
                            )}
                          </Pressable>
                        </Link>
                    )
                }}
            />


      <Stack.Screen options={{title:chosenProduct?.name}}/>
      <Image source={{uri:chosenProduct.image || defaultPizzaImage }} style={styles.image} resizeMode="contain" />
      
    
      <View style={styles.textContainer}>
        <Text style={styles.title}>{chosenProduct.name}</Text>
        <Text style={styles.title}>${chosenProduct.price}</Text>
      </View>

    </View>
  )
}
export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container:{
    padding:5,
    backgroundColor:'white',
    flex:1,
  },
  textContainer:{
    marginVertical:10,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-around"
  },
  title:{
    fontSize:30,
    fontFamily:"monospace",
    fontWeight:"bold",
    marginVertical:10
  },
  image:{
    width:"100%",
    aspectRatio:1,
  },

  

})