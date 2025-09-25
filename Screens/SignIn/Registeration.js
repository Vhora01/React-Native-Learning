import { View,  StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AppTextField from "../../Components/AppTextField";
import AppButton from "../../Components/AppButton";
import AppColors from "../../Utilities/Colors";
import AppImages from "../../Utilities/Images";
// import {  } from "../";

const Registeration = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image 
      source={AppImages.logoImage}
      style={styles.logo}
      />
      <AppTextField text={name} onTextChange={setName} placeHolder={'User name'} style={styles.buttonBottom}/>
      <AppTextField text={email} onTextChange={setEmail} placeHolder={'Email'} style={styles.buttonBottom}/>
      <AppTextField text={password} onTextChange={setPassword} placeHolder={'Password'} style={styles.buttonBottom}/>

      <AppButton title={'Create User'} style={[styles.button,styles.firstButton]} onButtonPress={() => {
        // console.log('Sign In Click')
      }} />
      <AppButton title={'Sign In'} style={styles.button} onButtonPress={() => {
        navigation.goBack()
      }} />
    </View>
  );
}

export default Registeration;


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  logo:{height:150,width:150,marginBottom:25,borderRadius:20},
  buttonBottom:{marginBottom:10},
  firstButton:{marginTop:25},
  button:{
    marginBottom:10,
    backgroundColor:AppColors.blackColor
  },
});