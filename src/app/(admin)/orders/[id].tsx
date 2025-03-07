import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrdersListItem';
import Colors from '@/src/constants/Colors';
import OrderItemListItem from '@/src/components/OrderItemListIrem';
import { OrderStatusList } from '@/src/types';

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
        <FlatList data={order.order_items}  renderItem={({item}) => <OrderItemListItem item={item}/>}  contentContainerStyle={{gap:10, marginTop:10}} 
            ListFooterComponent={() => (

                                      <>
                          <Text style={{ fontWeight: 'bold' }}>Status</Text>
                          <View style={{ flexDirection: 'row', gap: 5 }}>
                            {OrderStatusList.map((status) => (
                              <Pressable
                                key={status}
                                onPress={() => console.warn('Update status')}
                                style={{
                                  borderColor: Colors.light.tint,
                                  borderWidth: 1,
                                  padding: 10,
                                  borderRadius: 5,
                                  marginVertical: 10,
                                  backgroundColor:
                                    order.status === status
                                      ? Colors.light.tint
                                      : 'transparent',
                                }}
                              >
                                <Text
                                  style={{
                                    color:
                                      order.status === status ? 'white' : Colors.light.tint,
                                  }}
                                >
                                  {status}
                                </Text>
                              </Pressable>
                            ))}
                          </View>
                        </>

            )}  
        />

    </View>
  )
}

export default OrderDetailsScreen;