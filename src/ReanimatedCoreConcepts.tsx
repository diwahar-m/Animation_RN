import { Pressable, StyleSheet, Text, View } from "react-native"
import Animated, { cancelAnimation, Easing, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated"


const ReanimatedCoreConcepts = () => {

    const offset = useSharedValue(0);
    const rotation = useSharedValue(0);
    const scale = useSharedValue(1)

    const animatedRef = useAnimatedRef<Animated.View>()

    const opacity = useDerivedValue(()=> { // used to access useSharedValue
        return Math.sin((rotation.value * Math.PI) / 100) / 2 + 0.5 ;
    })

    const boxStyle = useAnimatedStyle(()=> {
        return {
            transform: [
                {
                    translateX: offset.value,
                }, 
                {
                    rotate: `${rotation.value}deg`,
                }, 
                {
                    scale: scale.value,
                }
            ], 
            opacity: opacity.value
        };
    })

    const textStyle = useAnimatedStyle(()=> {
        return {
            transform:[
                {
                    scale: 1 / scale.value,
                }
            ]
        }
    })

    const handleStartAnimation =() => {
        offset.value = withSpring( Math.random()*200-100)

        rotation.value = withRepeat(withTiming(360, {
            duration: 2000, 
            easing: Easing.linear,
        }), -1, false)

        scale.value = withRepeat(withTiming(1.5, {
            duration: 1000, 
            easing: Easing.linear,
        }), -1,true)
    }

    const handleStopAnimation = () => {
        cancelAnimation(offset);
        cancelAnimation(rotation)
        cancelAnimation(scale)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.headerTxt}>ReanimatedCoreConcepts</Text>
            <Animated.View style={[styles.box, boxStyle]} ref={animatedRef}>
                <Animated.Text style={[textStyle]}>Animated Box</Animated.Text>
            </Animated.View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn} onPress={handleStartAnimation}>
                    <Text style={styles.btnTxt}>Start Animation</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={handleStopAnimation}>
                    <Text style={styles.btnTxt}>Start Animation</Text>
                </Pressable>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold'
    } ,
    box:{
        height: 150, 
        width: 150, 
        backgroundColor: '#1d31e4' , 
        alignItems: 'center', 
        justifyContent: 'center'
    },  
    boxTxt: {
        fontSize: 18, 
        fontWeight: 'bold', 
        backgroundColor: '#fff'
    },
    btnContainer: {
        flexDirection: 'row', 
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#0ebc05', 
        margin:10, 
        padding: 5, 
        borderRadius: 5
    },
    btnTxt: {
        color:'#fff', 
        fontWeight: 'bold'
    },

})

export default ReanimatedCoreConcepts