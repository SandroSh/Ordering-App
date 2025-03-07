import { withLayoutContext } from 'expo-router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context';
const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);


const OrderListNavigator = () => {
  return (
        <SafeAreaView edges={['top']} style={{flex:1}}>
            <TopTabs/>
        </SafeAreaView>
     
    
  )
}

export default OrderListNavigator