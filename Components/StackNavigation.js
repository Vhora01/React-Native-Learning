import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../Screens/SignIn/SignIn";
import Registeration from "../Screens/SignIn/Registeration";
import ProductScreen from "../Screens/Product/ProductScreen";
// import DrawerNavigation from "./DrawerNavigation";
import { useNavigation } from "@react-navigation/native";
import ProductDetail from "../Screens/Product/ProductDetail";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    // const [isLogin, setIsLogin] = useState(false);
      const navigation = useNavigation()
    
    const siginInPress = () => {
        console.log('sigin iiiinnsidsdf');
        // setIsLogin(true);
        navigation.navigate('ProductScreen')
    }

    // console.log(isLogin);

    return (
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} initialParams={{ onClick: siginInPress }} />
            <Stack.Screen name="Registeration" component={Registeration} />
            <Stack.Screen  name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            {/* <Stack.Screen name="ProductScreen" component={DrawerNavigation} /> */}
        </Stack.Navigator>
    );
}
export default StackNavigation;

// npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
// npm install react-native-gesture-handler react-native-reanimated react-native-worklets
// npm install react-native-reanimated