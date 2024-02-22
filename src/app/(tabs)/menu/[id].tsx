import { Stack, useLocalSearchParams } from "expo-router";
import {StyleSheet ,View, Text,  } from "react-native"

 const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title:'Details'}}/>
        <Text style={styles.id}>{id}</Text>
    </View>
  )
}
export default ProductDetailsScreen;

const styles = StyleSheet.create({
  id:{
    color:"white",
  }

})