import { useRef } from "react"
import { Animated, Button, StyleSheet, Text, View } from "react-native"


const Interpolation = () => {

    const animation = useRef(new Animated.Value(0)).current

    const handleAnimation =() => {
        Animated.timing(animation, {
            useNativeDriver: false, // animation will be run by Javascript thread & not by native device
            toValue: 1, 
            duration: 1000
        }).start(() => setTimeout(()=> {
            animation.setValue(0)
        }, 5000))
    }

    const backgroundColor = animation.interpolate({
        inputRange: [0 , 0.5, 1],
        outputRange: ['#3af40c', '#f1f807', '#f82807']
    })
    const size = animation.interpolate({
        inputRange: [0,1], 
        outputRange: [100, 200]
    })
    const rotate = animation.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '360deg']
    }) 
    const borderRadius = animation.interpolate({
        inputRange: [0,1], 
        outputRange: [4, 100]
    })


    return <View style={styles.container}>
        <Text style={styles.headerText}>Interpolation Demo</Text>
        <Animated.View style={
            [styles.box, 
                {backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                width:size,
                height: size,
                transform: [{ rotate }]}]}
            ><Text style={styles.headerText}>Animate Me</Text></Animated.View>
        <Button title="animate" onPress={handleAnimation}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        flex: 1,
        alignItems: 'center'
    }, 
    headerText:{
        fontSize: 18, 
        fontWeight: 'bold'
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
})


export default Interpolation
