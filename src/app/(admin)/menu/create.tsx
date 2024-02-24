import {StyleSheet , View, Text, TextInput, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/Button';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';
import { AntDesign} from '@expo/vector-icons';


const CreateProductScreen = () => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const {id} = useLocalSearchParams();
  const isUpdating = !!id;

  const resetFields = () => {
    setName("");
    setPrice("");
  }
  const validateInputs = () => {
    setError('');
    if(!name){
      setError("Please Enter Name");
      return false;
    }
    if(!price){
      setError("Please Enter Price");
      return false;
    }
    if(isNaN(parseFloat(price))){
      setError("Please Enter Valid Price");
      return false;
    }
    return true;
  }
   const onCreate = () => {
    if(!validateInputs()){
      return;
    }
    console.warn(name, price)
    validateInputs();

    resetFields();
  }
  const onUpdateCreate = () => {
    if(!validateInputs()){
      return;
    }
    console.warn("Updating",name, price)
    validateInputs();

    resetFields();
  }
   const onSubmit = () => {
      if(isUpdating){
        onUpdateCreate();
      }else{
        onCreate();
      }
   }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

  

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDelete = () =>{
    console.warn("DELETE!!!")
  }

  const confirmDelete = () =>{
    Alert.alert("Confirm", "Are you sure you want to delete this product?", [
      {
        text:'Cancel'
      },
      {
        text:"Delete",
        style:'destructive',
        onPress:onDelete,
      }
    ])
  }

  return (
    <View style={styles.mainContainer} >
      <Stack.Screen options={{title: isUpdating ? "Update Product" : "Create Product"}} />
      <Image source={{uri: image || defaultPizzaImage}} style={styles.image} />

      <View style={styles.imageContainer}>
        <Text  style={styles.imageText}>Select Image</Text>
        <AntDesign
                name="upload"
                size={25}
                color={Colors.light.tint}
                onPress={pickImage}
        />
      </View>

      <Text style={styles.inputLabel} >Name</Text>
      <TextInput placeholder='Margarita' style={styles.input} value={name} onChangeText={setName}/>

      <Text style={styles.inputLabel} >Price ($)</Text>
      <TextInput placeholder='$17.9' style={styles.input} keyboardType='numeric' value={price} onChangeText={setPrice}/>
      
      <Text style={{color:"red"}}>{error}</Text>
      <Button text={ isUpdating? "Update" : 'Create'} onPress={onSubmit} />
      {isUpdating && <Text  onPress={confirmDelete} style={styles.deleteText} >Delete</Text>}
    </View>
  )
}

export default CreateProductScreen;


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:Colors.light.myBackground,
        justifyContent:'center',
        padding:15,
    },
    imageContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    image:{
      width:'70%',
      aspectRatio:1,
      alignSelf:'center'
    },
    imageText:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20,
      fontFamily:"monospace",
      marginRight:10,
      color:Colors.light.tint
    },
    input:{
      width:'100%',
      padding:15,
      marginVertical:10,
      borderRadius:10,
      backgroundColor:'white'
    },
    inputLabel:{
      fontWeight:'bold',
      fontSize:20,
      fontFamily:"monospace"
    },
    deleteText:{
      color:'red',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20,
      fontFamily:"monospace",
      
      
    }
    
});