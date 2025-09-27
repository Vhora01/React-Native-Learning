import { StyleSheet, Text, View,} from "react-native";
// import { useSelector } from "react-redux";


const Settings = () => {
    // const cart = useSelector((state) => state.addItem.cart);
//    console.log(cart[1])
    return (
        <View style={styles.container }>
           <Text>Setting Screen</Text>
        </View>
    );
}

export default Settings

const styles = StyleSheet.create({
    container: { flex: 1,  marginVertical:20 },
    
});