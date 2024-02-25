import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrdersListItem';
import Colors from '@/src/constants/Colors';
import OrderItemListItem from '@/src/components/OrderItemListIrem';

const OrderDetailsScreen = () => {
    const {id} = useLocalSearchParams();
    const order = orders.find( (order) => order.id.toString() === id);
    if(!order){
        return <Text style={{color:'white'}}>Order not Found</Text>
    }
  return (
    <View style={{flex:1, backgroundColor:Colors.light.myBackground, padding:10}}>
        <Stack.Screen options={{title:`Order: #${id}`}}/>
        <OrderListItem order={order}/>
        <FlatList data={order.order_items}  renderItem={({item}) => <OrderItemListItem item={item}/>}  contentContainerStyle={{gap:10, marginTop:10}} />

    </View>
  )
}

export default OrderDetailsScreen;