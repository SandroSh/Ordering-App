import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text, Platform, FlatList } from "react-native";
import {useCart} from "@/src/Providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";


const CartScreen = () => {
  const {items, totalPrice} = useCart();
  
  return (
    <View style={styles.mainContainer}>
        <FlatList
          data={items}
          renderItem={({item}) => <CartListItem cartItem={item}/>}
          numColumns={1}
        />
        <Text style={styles.totalPriceText}>Total: ${totalPrice.toFixed(2)}</Text>
        <Button text={"Checkout"}/>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#efefed',
    padding:10
  },
  totalPriceText:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'monospace'
  }
  



})  
{/* <View style={styles.itemsContainer}>
        
          <View style={styles.itemContainer}>
            <Text >Cart Screen {items.length}</Text>
          </View>
      </View> */}