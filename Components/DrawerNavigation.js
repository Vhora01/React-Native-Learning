import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductScreen from "../Screens/Product/ProductScreen";
const Drawer = createDrawerNavigator();
const DrawerNavigation = () =>{
return(
    <Drawer.Navigator>
        <Drawer.Screen name="ProductScreen" component={ProductScreen} />
    </Drawer.Navigator>
);
}

export default DrawerNavigation;