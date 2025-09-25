/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Components/StackNavigation";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import ProductDetail from "./Screens/Product/ProductDetail";
// import DrawerNavigation from "./Components/DrawerNavigation";
// import { useState } from "react";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // const navigation = useNavigation()
  // const siginInPress = () => {
  //       console.log('sigin iiiinnsidsdf');
  //       // setIsLogin(true);
  //     navigation.navigate("ProductScreen");
  //   }
  return (


    // <GestureHandlerRootView style={{ flex: 1 }}>
    //  {
       <NavigationContainer >
        {
          // isLogin ? 
          <StackNavigation />
          // :
          //  <DrawerNavigation />
        }
      </NavigationContainer>
    //  }
    // </GestureHandlerRootView>

  );
}

export default App;
