import { NavigationContainer } from "@react-navigation/native";
import Deliveries from "../screens/Home/Deliveries";
import HomePage from "../screens/Home/HomePage";
import User from "./user";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const BottomTab = () => {
    const Tab = createBottomTabNavigator()
    return (
            <Tab.Navigator>
                <Tab.Screen name="HomePage" component={HomePage}></Tab.Screen>
                <Tab.Screen name="Deliveries" component={Deliveries}></Tab.Screen>
                <Tab.Screen name="User" component={User}></Tab.Screen>
            </Tab.Navigator>
    )
}
export default BottomTab