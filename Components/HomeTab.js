import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../Screens/Product/ProductScreen";
import ProductDetail from "../Screens/Product/ProductDetail";
import Settings from "../Screens/Setting/Settings";
import Cart from "../Screens/Cart/Cart";
import { Button } from "react-native";

const BottomTab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()


//this stack is for First tab Home
const HomeStackScreen = () => {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="ProductScreen" component={ProductScreen} />
            <HomeStack.Screen
                name="ProductDetail"
                component={ProductDetail}
                // options={{
                //     // headerRight: () => (
                //     //     <Button  title="OK" />
                //     // ),
                // }}
            />
        </HomeStack.Navigator>
    )
}

// options={{
//                 headerShown: false,
//                 headerLeft: () => {<Button>Update</Button>},
//             }}

const HomeTab = () => {
    return (
        <BottomTab.Navigator initialRouteName="HomeStackScreen" >
            <BottomTab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false, title: "Home" }} />
            <BottomTab.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
            <BottomTab.Screen name="Settings" component={Settings} options={{ title: 'Setting' }} />
        </BottomTab.Navigator>
    );
}
export default HomeTab;

