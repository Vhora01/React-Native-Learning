import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../Screens/Product/ProductScreen";
import ProductDetail from "../Screens/Product/ProductDetail";
import Settings from "../Screens/Setting/Settings";
const BottomTab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

const HomeTab = () =>{
return(
    <BottomTab.Navigator initialRouteName="HomeStackScreen" screenOptions={{headerShown:false }} >
        <BottomTab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ title:'Home'}}/>
        <BottomTab.Screen name="Settings" component={Settings} options={{}}/>
    </BottomTab.Navigator>
);
}
export default HomeTab;


const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="ProductScreen" component={ProductScreen}  />
            <HomeStack.Screen name="ProductDetail" component={ProductDetail} />
        </HomeStack.Navigator>
    )
}