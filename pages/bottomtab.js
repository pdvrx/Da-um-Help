import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './tabs'

const bottomtab = () =>{
    return(
        <NavigationContainer>
            <Tabs></Tabs>
        </NavigationContainer>
    );
}