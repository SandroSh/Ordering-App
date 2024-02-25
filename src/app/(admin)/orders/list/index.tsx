import {View, Text, FlatList} from 'react-native'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrdersListItem'
import Colors from '@/src/constants/Colors'
import { Stack } from 'expo-router'

const OrdersScreen = () => {
  return (
    <View  style={{flex:1,backgroundColor:Colors.light.myBackground}}>
        <Stack.Screen options={{title:'Active'}} />
        <FlatList
            data={orders}
            renderItem={({item}) => <OrderListItem order={item}/> }
            contentContainerStyle={{gap:10, padding:10}}
            
        />
    </View>
  )
}

export default OrdersScreen