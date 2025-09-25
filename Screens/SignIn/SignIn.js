import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import AppButton from "../../Components/AppButton";
import AppTextField from '../../Components/AppTextField';
import AppColors from "../../Utilities/Colors";
import AppImages from "../../Utilities/Images";

const SignIn = ({ route }) => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={AppImages.logoImage}
        style={styles.logo}
      />
      <AppTextField text={email} onTextChange={setEmail} placeHolder={'Email'} style={styles.text} />
      <AppTextField text={password} onTextChange={setPassword} placeHolder={'Password'} secureTextEntry={true} style={styles.text} />

      <AppButton title={'Sign In'} style={[styles.button, styles.firstButton]} onButtonPress={route.params.onClick} />
      <AppButton title={'Registeration'} style={styles.button} onButtonPress={() => {
        navigation.navigate('Registeration')
      }} />
    </View>
  );
}

export default SignIn;


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { height: 150, width: 150, marginBottom: 25, borderRadius: 20 },
  button: {
    marginBottom: 10,
    backgroundColor: AppColors.blackColor
  },
  text: { marginBottom: 10 },
  firstButton: { marginTop: 25 },

});