import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ProfileScreen } from "../screens/ProfileScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { PoliticyScreen } from "../screens/PoliticyScreen";

import { Menu } from "../components/home/Menu";
import { NavigationTab } from "./NavigationTab";
import { ProccessNavigationStack } from "./ProccessNavigationStack";
import { BlockerDetailsNavigationStack } from "./BlockerDetailsStack";
import { ContactNavigationStack } from "./ContactStack";
import { SuccessNavigationStack } from "./SuccessStack";


const MainDrawer = createDrawerNavigator();

export const MainNavigationDrawer = () => {

    return(
        <MainDrawer.Navigator
                drawerContent={ (props) => <Menu {...props} /> }
        >
            <MainDrawer.Screen name="Home" component={ NavigationTab } />
            <MainDrawer.Screen name="Profile" component={ ProfileScreen } />
            <MainDrawer.Screen name="Terms" component={ TermsScreen } />
            <MainDrawer.Screen name="Politicy" component={ PoliticyScreen } />
            <MainDrawer.Screen name="Proccess" component={ ProccessNavigationStack } />
            <MainDrawer.Screen name="BlockerDetailsNav" component={ BlockerDetailsNavigationStack } />
            <MainDrawer.Screen name="ContactNav" component={ ContactNavigationStack } />
        </MainDrawer.Navigator>
    );
}