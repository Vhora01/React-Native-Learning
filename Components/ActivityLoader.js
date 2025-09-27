import { ActivityIndicator, StyleSheet, View } from "react-native";

const ActivityLoader = ({color,size}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} hidesWhenStopped={true}/>
        </View>
    );
}
export default ActivityLoader

const styles = StyleSheet.create({
    container:{flex:1,alignItems:'center',justifyContent:'center'},
});