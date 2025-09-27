
import { StyleSheet, Text, View,FlatList, Image } from "react-native";
import { useSelector } from "react-redux";


const Cart = () => {
    const cart = useSelector((state) => state.addItem.cart);
    return (
        <View style={styles.container }>
           <FlatList
           data={cart}
           keyExtractor={(cartItem)=> cartItem.id}
           renderItem={(cartItem) => 
            <View style={styles.cellContainer}>
                <Text style={styles.titleText}>{cartItem.item.title}</Text>
                <Image source={{ uri:cartItem.item.image }} style={styles.image} resizeMode="contain"/>
            </View>
           }
           />
        </View>
    );
}

export default Cart

const styles = StyleSheet.create({
    container: { flex: 1,  marginVertical:20 },
    cellContainer: {
        height: 250,
        borderColor: '#b8b0b0ff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        shadowColor: '#000',
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        marginBottom:10,
        marginHorizontal:10
    },
    titleText:{textAlign:'center',fontSize:20,fontWeight:'bold'},
    image:{flex:1 ,marginHorizontal:16},
});