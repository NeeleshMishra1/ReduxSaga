import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/home";
import { Cart } from "../../screens/cart";
import { Product } from "../../screens/myProduct";

const Stack = createNativeStackNavigator();

 export const AppNavigation=()=>{
    return(
        <NavigationContainer>
             <Stack.Navigator>
        <Stack.Screen
          name="product"
          component={Product}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="cart"
          component={Cart}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
        </NavigationContainer>
    )
}