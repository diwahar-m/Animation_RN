import { useRef } from "react"
import { Animated, Button, StyleSheet, Text, View } from "react-native"


const CombinedAnimation = () => {

    const moveAndRotateAnim = useRef(new Animated.Value(0)).current
    const pulseAnim = useRef(new Animated.Value(1)).current

    const combinedAnimation = () => {
        moveAndRotateAnim.setValue(0); 

        Animated.timing(moveAndRotateAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }).start()
    }

    const pulseAnimation = () => {
       Animated.loop(
        Animated.sequence([
            Animated.timing(pulseAnim, {
                toValue: 1.3,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(pulseAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ])
       ).start()
    }

    const backgroundColor = moveAndRotateAnim.interpolate({
        inputRange: [0 , 0.5, 1],
        outputRange: ['#3af40c', '#f1f807', '#f82807']
    })
    const moveX = moveAndRotateAnim.interpolate({
        inputRange:[0,1],
        outputRange: [0, 100]
    })
    const moveY = moveAndRotateAnim.interpolate({
        inputRange:[0,1], 
        outputRange: [0, 100]
    })
    const rotate = moveAndRotateAnim.interpolate({
        inputRange:[0,1],
        outputRange: ['0deg', '360deg']
    })


    return <View style={styles.container}>
            <Text style={styles.headerTxt}>Combined Animation Demo</Text>
        <Animated.View style={[styles.box, {
            transform: [
              {
                translateX: moveX
              },
              {
                translateY: moveY
              },
              {
                rotate: rotate
              },
              {
                scale: pulseAnim
              },
        ], 
        backgroundColor
        }]}>
        </Animated.View>
        <View style={styles.btnContainer}>
        <Button  title="Move , Rotate & Change color" onPress={combinedAnimation}/>
        <Button  title="Pulse" onPress={pulseAnimation}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems:'center',
        paddingVertical: 20 ,
        backgroundColor: '#f0f0f0'
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
     box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:5,
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default CombinedAnimation