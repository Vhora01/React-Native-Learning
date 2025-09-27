import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import  {addItemToCart} from "../../Redux/Slice";
// import {removeFromCart} from "../../Redux/Slice";

import { addItemToCart, removeProductFromCart } from "../../Redux/Slice";
// import { setUser } from '../../Redux/userSlice'
const ProductDetail = ({ route }) => {
    const [product, setProduct] = useState({});
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const clickHandler = () => { 
        // alert("This is a button!"); 
        alert("here!");

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => <Button title="OK" onPress={clickHandler} />
            ,
        })
    },[navigation]);

    useEffect(() => {
        setProduct(route.params.product)
    }, [navigation, route]);


    const addProductToCart = () => {
        dispatch(
            addItemToCart({ product: product })
        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="center" />
                <Text style={styles.title}>{product.title}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.categoryTitle}>Category :-</Text>
                    <Text style={styles.category}>{product.category}</Text>
                </View>
                <Text style={styles.description}>{product.description}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.categoryTitle}>Price :-</Text>
                    <Text style={styles.category}>{product.price}</Text>
                </View>
                <TouchableOpacity style={[styles.button]} onPress={addProductToCart}>
                    <Text style={styles.buttonText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: { height: 300, width: '100%' },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 8
    },
    description: {
        fontSize: 15,
        padding: 10
    },
    categoryTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10
    },
    category: {
        fontSize: 15,
        paddingVertical: 10
    },
    priceContainer: { flexDirection: 'row', marginTop: 10 },
    button: {
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});