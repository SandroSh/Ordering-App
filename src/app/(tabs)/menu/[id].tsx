import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/button";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {StyleSheet ,View, Text, Image, Pressable } from "react-native";
const sizes = ["S", "M", "L", "XL"]

 const ProductDetailsScreen = () => {

  const {id} = useLocalSearchParams();
  const chosenProduct = products.find((p) => p.id.toString() == id);

  const[selectedSize, setSelectedSize] = useState('M');

  if(chosenProduct == null){
    return <Text>Product not Found</Text>
  }

 const addToCart = () => {
  console.warn("Add to Cart");
 }


  return (
    <View style={styles.container} >
      <Stack.Screen options={{title:chosenProduct?.name}}/>
      <Image source={{uri:chosenProduct.image || defaultPizzaImage }} style={styles.image} resizeMode="contain" />
      
    
      <View style={styles.textContainer}>
        <Text style={styles.title}>{chosenProduct.name}</Text>
        <Text style={styles.title}>${chosenProduct.price}</Text>
      </View>

      
      <View style={styles.sizesMainContainer}>
        <Text style={[styles.title, {textAlign:'center'}]}>Select Size</Text>
        <View style={styles.sizesContainer} >

          {sizes.map((item) => (
            <Pressable 
              key={item} 
              style={
                [ styles.sizeContainer, 
                  {backgroundColor: selectedSize === item ? 'black': 'white'},
                ]
              }
              onPress={() => setSelectedSize(item)}
            > 
              <Text style={[styles.sizeText, {color: item == selectedSize ? 'white': 'black'}]}>{item}</Text> 

            </Pressable> 
          ))}
        </View>
      </View>
      <Button onPress={addToCart} text="Add to Cart"/>
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
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  },
  title:{
    fontSize:20,
    fontFamily:"monospace",
    fontWeight:"bold",
    marginVertical:10
  },
  image:{
    width:"100%",
    aspectRatio:1,
  },
  sizesMainContainer:{
    flexDirection:'column',
    marginVertical:20
  },
  sizesContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    
  },
  sizeContainer:{
    
    width:"15%",
    aspectRatio:1,
    flexDirection:"column",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50
  },
  sizeText:{
    fontSize:22,
    color:'black',
    fontWeight:'bold',
    fontFamily:"monospace",
  }
  

})