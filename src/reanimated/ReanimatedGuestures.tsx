import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type ContextType = {
    startX: number;
    startY: number;
}

const ReanimatedGuestures: React.FC = () => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0); 
    const offsetX = useSharedValue(0)
    const offsetY = useSharedValue(0)

   const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            context.startX = translateX.value
            context.startY = translateY.value
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX
            translateY.value = context.startY + event.translationY
        }, 
        onEnd: () => {
            translateX.value = withSpring(0),
            translateY.value = withSpring(0),
        }
   })

   const pan = Gesture.Pan().onChange((event)=> {
        offsetX.value = event.translationX
        offsetY.value = event.translationY
   }).onFinalize(()=> {
        offsetX.value = 0
        offsetY.value = 0 
   })

   const animatedStyle = useAnimatedStyle(()=>{
    return {
        transform: [
            {
                translateX: translateX.value,
            },
            {
                translateY: translateX.value,
            },
        ]
    }
   }) 

    const animatedStyleTwo = useAnimatedStyle(()=>{
    return {
        transform: [
            {
                translateX: offsetX.value,
            },
            {
                translateY: offsetY.value,
            },
        ]
    }
   })

  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.headerTxt}>Reanimated Guestures</Text>
            <Text>Drag the below box</Text>
        </View>
        <PanGestureHandler onGestureEvent={panGestureHandler}>
            <Animated.View  style={[styles.box, animatedStyle]}/>
        </PanGestureHandler> 
        <GestureDetector gesture={pan}>
            <Animated.View  style={[styles.box, animatedStyleTwo]}/>
        </GestureDetector> 
    </GestureHandlerRootView>
  )
}

export default ReanimatedGuestures

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems:'center',
        backgroundColor: '#f0f0f0',
    },
    headerTxt: {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'blue',
        borderRadius: 15,
        marginTop: 20,
    }
})