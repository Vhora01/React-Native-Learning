import { useEffect, useState } from "react";
import {  FlatList, StyleSheet, View } from "react-native";
import { APIManager } from '../../Utilities/APIManager';
import { useNavigation } from "@react-navigation/native";
import ProductCell from "../../Components/ProductCell";
// import ProductDetail from "./ProductDetail";

// const { width } = Dimensions.get('window');
const itemMargin = 10; // Margin between items
const numColumns = 2;
// const itemWidth = (width - (itemMargin * (numColumns + 1))) 

// const itemWidth = (width - (itemMargin * (numColumns + 1)))

const ProductScreen = () => {
    const [products, setProducts] = useState([{}]);
    const [error, setError] = useState('');
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({ headerShown: true, headerBackVisible: false, title: 'Products' });
        APIManager(
            {
                url: 'https://fakestoreapi.com/products',
                onSuccess: (result) => {
                    setProducts(result)
                },
                onError: (err) => {
                    setError(err);
                }
            }
        );
    }, [error, navigation]);

    
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id}
                numColumns={numColumns}
                renderItem={ (product) => <ProductCell item={product.item} onProductPress={ (selectedItem) => 
                    navigation.navigate('ProductDetail',{product:selectedItem})
                }/>}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    flatListContainer: {
        paddingHorizontal: itemMargin / 2, // Adjust padding to center items with margins
    },
    columnWrapper: {
        justifyContent: 'space-between', // Distribute items evenly in a row
        marginBottom: itemMargin, // Margin between rows
    },
});
