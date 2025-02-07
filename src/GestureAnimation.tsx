import { useRef } from "react"
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native"


const GestureAnimation = () => {

    const pan = useRef(new Animated.ValueXY()).current 

    const panResponser = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true, 
            onPanResponderMove:Animated.event(
                [
                    null,
                    {
                        dx: pan.x,
                        dy: pan.y,
                    }
                ],
                {
                    useNativeDriver: false,
                }
            ), 
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    useNativeDriver: false, 
                }).start()
            }
        })
    ) .current


    return <View style={styles.container}>
        <Text style={styles.headerTxt}>Gesture Animation Demo</Text>
        <Animated.View 
            {...panResponser.panHandlers} 
            style={[styles.box, pan.getLayout()]}
        >
            <Text style={styles.boxTxt}> Drag Here</Text>
        </Animated.View>
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
        backgroundColor:'#fff'
    },
    boxTxt: {
        fontSize: 18, 
        fontWeight: 'bold'
    }
})

export default GestureAnimation