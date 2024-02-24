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
        <View style={styles.checkoutContainer}>
          <Button text={"Checkout"}/>
          <Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>
        </View>
        

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
  checkoutContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  totalPriceText:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'monospace',
    marginHorizontal:20
  }
  



})  
{/* <View style={styles.itemsContainer}>
        
          <View style={styles.itemContainer}>
            <Text >Cart Screen {items.length}</Text>
          </View>
      </View> */}