import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Home"
import BasicAnimation from "./BasicAnimation"
import Interpolation from "./Interpolation"
import CombinedAnimation from "./CombinedAnimation"
import GestureAnimation from "./GestureAnimation"
import ReanimatedCoreConcepts from "./ReanimatedCoreConcepts"
import ReanimatedAnimationTypes from "./reanimated/ReanimatedAnimationTypes"
import ReanimatedGuestures from "./reanimated/ReanimatedGuestures"
import ReanimatedFormValidation from "./reanimated/ReanimatedFormValidation"

export type RootStackParamsList = {
    Home: undefined 
    BasicAnimation: undefined
    InterpolationDemo: undefined
    CombinedAnimation: undefined
    GestureAnimation: undefined
    ReanimatedCoreConcepts: undefined
    ReanimatedAnimationTypes:undefined
    ReanimatedGuestures: undefined
    ReanimatedFormValidation: undefined
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
            <Stack.Screen name="ReanimatedGuestures" component={ReanimatedGuestures} />
            <Stack.Screen name="ReanimatedFormValidation" component={ReanimatedFormValidation} />
        </Stack.Navigator>
    )
}

export default RootNavigator