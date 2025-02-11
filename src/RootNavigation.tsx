import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Home"
import BasicAnimation from "./BasicAnimation"
import Interpolation from "./Interpolation"
import CombinedAnimation from "./CombinedAnimation"
import GestureAnimation from "./GestureAnimation"
import ReanimatedCoreConcepts from "./ReanimatedCoreConcepts"
import ReanimatedAnimationTypes from "./reanimated/ReanimatedAnimationTypes"

export type RootStackParamsList = {
    Home: undefined 
    BasicAnimation: undefined
    InterpolationDemo: undefined
    CombinedAnimation: undefined
    GestureAnimation: undefined
    ReanimatedCoreConcepts: undefined
    ReanimatedAnimationTypes:undefined
}

const Stack = createStackNavigator<RootStackParamsList>()


const RootNavigator =() => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
            <Stack.Screen name="InterpolationDemo" component={Interpolation} />
            <Stack.Screen name="CombinedAnimation" component={CombinedAnimation} />
            <Stack.Screen name="GestureAnimation" component={GestureAnimation} />
            <Stack.Screen name="ReanimatedCoreConcepts" component={ReanimatedCoreConcepts} />
            <Stack.Screen name="ReanimatedAnimationTypes" component={ReanimatedAnimationTypes} />
        </Stack.Navigator>
    )
}

export default RootNavigator