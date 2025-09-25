import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


const { width } = Dimensions.get('window');
const itemMargin = 10; // Margin between items
const numColumns = 2;
const itemWidth = (width - (itemMargin * (numColumns + 1)))

const ProductCell = ({ item, onProductPress }) => {
    return (
        <TouchableOpacity onPress={() => onProductPress(item)}>
            <View style={styles.container}>
                <Text numberOfLines={1}>{item.title}</Text>
                <Image source={{ uri: item.image }} style={styles.image} resizeMode="stretch" />
                <Text style={styles.textPrice}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default ProductCell;

const styles = StyleSheet.create({
    container: {
        width: itemWidth / 2,
        height: 200,
        borderColor: '#b8b0b0ff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        shadowColor: '#000',
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
    },
    image: { flex: 1, marginTop: 5 },
    textPrice: { textAlign: 'center', fontSize: 15, fontWeight: 'bold' }
});

