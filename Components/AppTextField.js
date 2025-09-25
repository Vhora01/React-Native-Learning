import React from "react";
import { StyleSheet, TextInput } from "react-native";
import AppColors from "../Utilities/Colors";


function AppTextField({ text, onTextChange, placeHolder,secureTextEntry = false ,style}) {
    return (
        <TextInput
            value={text}
            secureTextEntry={secureTextEntry}
            onChangeText={onTextChange}
            placeholder={placeHolder}
            style={[styles.textField, style]}
        />
    );
}

export default AppTextField;

const styles = StyleSheet.create({
    textField: {
        height: 40,
        width: '80%',
        borderColor: AppColors.blackColor,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingStart: 20,
        borderRadius: 20,
        // marginBottom:20,
    }
});