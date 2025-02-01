import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Home"
import BasicAnimation from "./BasicAnimation"


export type RootStackParamsList = {
    Home: undefined 
    BasicAnimation: undefined
}

const Stack = createStackNavigator<RootStackParamsList>()


const RootNavigator =() => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
        </Stack.Navigator>
    )
}

export default RootNavigator