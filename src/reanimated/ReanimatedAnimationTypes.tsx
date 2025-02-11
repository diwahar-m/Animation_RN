import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDecay, withDelay, withReanimatedTimer, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'

const ReanimatedAnimationTypes: React.FC = () => {

  const translateX = useSharedValue(0); 
  const scale = useSharedValue(1); 
  const rotate = useSharedValue(0); 

  const boxStyle = useAnimatedStyle(()=> {
    return {
      transform:[
        {
          translateX: translateX.value
        },
        {
          scale: scale.value
        },
        {
          rotate: `${rotate.value}deg`
        },
      ]
    }
  })

  // handle timing Animation 
  const handleTimingAnimation = ()=> {
    translateX.value = withTiming(150, {
      duration: 1500, 
      easing: Easing.out(Easing.exp)
    })
  }
  // handle spring Animation 
  const handleSpringAnimation =() => {
    scale.value = withSpring(1.5, {
      damping: 10, 
      stiffness: 100
    })
  }
 // handle reset animation 
 const handleResetAnimation = () => {
  translateX.value = withTiming(0)
  scale.value  = withTiming(1)
  rotate.value = withTiming(0)
 }

 // decay animation 
 const handleDecayAnimation = () => {
    translateX.value = withDecay({
      velocity: 100, 
      clamp: [0, 300]
    })
 }

 // sequence animation 
 const handleSequenceAnimation = () => {
  rotate.value = withSequence(
    withTiming(180, {duration: 1000}),
    withTiming(0, {duration: 1000}),
  )
 }
 // delay animation 
 const handleDelayAnimation =() => {
  translateX.value = withDelay(1000, withSpring(200))
 }
 // repeat animation
 const handleRepeatAnimation = () => {
  scale.value = withRepeat(withTiming(1.5, {duration: 500}), 5, true)
 }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>ReanimatedAnimationTypes</Text>
      <Animated.View style={[styles.box, boxStyle]}/>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.btn} onPress={handleTimingAnimation}>
          <Text style={styles.btnTxt}>Timing</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSpringAnimation}>
          <Text style={styles.btnTxt}>Spring</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDecayAnimation}>
          <Text style={styles.btnTxt}>Decay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleSequenceAnimation}>
          <Text style={styles.btnTxt}>Sequence</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleRepeatAnimation}>
          <Text style={styles.btnTxt}>Repeat</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleDelayAnimation}>
          <Text style={styles.btnTxt}>Delay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleResetAnimation}>
          <Text style={styles.btnTxt}>Reset</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ReanimatedAnimationTypes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerTxt: {
        fontSize: 18, 
        fontWeight: 'bold'
    }, 
    box: {
      height: 150, 
        width: 150, 
        backgroundColor: '#1d31e4' , 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap',
    },
    btn: {
      backgroundColor: '#0ebc05',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    btnTxt: {
      color: '#fff',
      fontWeight: 'bold'
    }
})