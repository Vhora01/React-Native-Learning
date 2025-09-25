import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppColors from "../Utilities/Colors";

function AppButton({ title, onButtonPress,style }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onButtonPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
export default AppButton;

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '80%',
        // backgroundColor:'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    text: {
        color: AppColors.whiteColor,
        fontSize: 16,
        fontWeight: 'bold'
    }
});