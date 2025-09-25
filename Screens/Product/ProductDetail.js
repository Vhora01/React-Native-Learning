import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const ProductDetail = ({ route }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        navigation.setOptions({ headerShown: true, headerBackVisible: true, title: 'Products Details' });
        setProduct(route.params.product)
    }, [navigation, route]);
    const navigation = useNavigation()
    console.log('product=====', product);

    return (
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
        </View>
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
priceContainer:{ flexDirection: 'row', marginTop: 10 },
});