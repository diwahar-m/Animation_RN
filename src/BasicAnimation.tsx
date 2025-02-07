import { useRef } from "react"
import { Animated, Button, Easing, ScrollView, StyleSheet, Text, View } from "react-native"

const BasicAnimation =() => {

    const fadeAnim = useRef(new Animated.Value(0)).current
    const translateAnim = useRef(new Animated.Value(0)).current
    const scaleAnim = useRef(new Animated.Value(1)).current
    const rotateAnim = useRef(new Animated.Value(0)).current
    const springAnim = useRef(new Animated.Value(0)).current
    const bounceAnim = useRef(new Animated.Value(0)).current

    const handleFadeIn = ()=> {
        Animated.timing(fadeAnim, {
            toValue : 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }
    const handleFadeOut = ()=> {
        Animated.timing(fadeAnim, {
            toValue : 0, 
            duration: 1000, 
            useNativeDriver: true
        }).start()
    }

    const handleTranslate = () => {
        Animated.timing(translateAnim, {
            toValue: 100, 
            duration: 1000, 
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            useNativeDriver: true
        }).start()
    }

    const handleScale = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.5, 
                duration: 500, 
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1, 
                duration: 500, 
                useNativeDriver: true,
            })
        ]).start()
    }

    const handleRotate = () => {
        Animated.timing(rotateAnim, {
            toValue: 1, 
            duration:1000, 
            useNativeDriver: true
        })
    }

    const spin = rotateAnim.interpolate({
        inputRange:[0,1], 
        outputRange:['0deg', '360deg']
    })

    const handleSpring = () => {{
        Animated.spring(springAnim, {
            toValue: 100, 
            friction: 5, 
            tension: 40,
            useNativeDriver: true, 
            duration: 1000,
        }).start(()=> {
            springAnim.setValue(0)
        })
    }}

    const handleBounce = ()=> {
        Animated.sequence([
            Animated.spring(bounceAnim, {toValue: -20, useNativeDriver: true}), 
            Animated.spring(bounceAnim, {toValue: 0, useNativeDriver: true})
        ]).start()
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerTxt}>Basic Animation Demo</Text>
            {/* Fade Animation Demo */}
            <View style={styles.demoContainer}>
                <Text style={styles.headerTxt}>Fade In & Fade Out Demo</Text>
                <Animated.View style={[styles.box, styles.fadeBox, {opacity: fadeAnim}]}></Animated.View>
                <View style={styles.buttonContainer}>
                    <Button onPress={handleFadeIn} title="Fade In" />
                    <Button onPress={handleFadeOut} title="Fade Out" />
                </View>
     
            </View>
            {/* Translate Animation Demo */}
            <View style={styles.demoContainer}>
                <Text style={styles.headerTxt}>Translate Animation Demo</Text>
                <Animated.View style={[styles.box, styles.translateBox, {transform: [{
                    translateX: translateAnim
                }]}]}></Animated.View>
                <Button title="Translate" onPress={handleTranslate}/>
            </View>
            {/* Scaling Animation Demo */}
            <View style={styles.demoContainer}>
                <Text style={styles.headerTxt}>Scaling  Demo</Text>
                <Animated.View style={[styles.box, styles.scaleBox, {transform: [{
                    scale: scaleAnim
                }]}]}></Animated.View>
                <Button title="Scale" onPress={handleScale}/>
            </View>
            {/* Rotate Animation Demo */}
            <View style={styles.demoContainer}>
                <Text style={styles.headerTxt}>Rotate  Demo</Text>
                <Animated.View style={[styles.box, styles.scaleBox, {transform: [{
                    rotate: spin
                }]}]}></Animated.View>
                <Button title="Rotate" onPress={handleRotate}/>
            </View>
             {/* Spring Animation Demo */}
            <View style={styles.demoContainer}>
                <Text style={styles.headerTxt}>Spring  Demo</Text>
                <Animated.View style={[styles.box, styles.scaleBox, {transform: [{
                    translateX: springAnim
                }]}]}></Animated.View>
                <Button title="Spring" onPress={handleSpring}/>
            </View>
            {/* Bounce Animation Demo */}
            <View style={styles.demoContainer}>
                <Text style={styles.headerTxt}>Bounce  Demo</Text>
                <Animated.View style={[styles.box, styles.scaleBox, {transform: [{
                    translateY: bounceAnim
                }]}]}></Animated.View>
                <Button title="Bounce" onPress={handleBounce}/>
            </View>
        </ScrollView>
    )
}

const styles =  StyleSheet.create({
    container: {
       flexGrow: 1, 
       alignItems: 'center', 
    paddingVertical: 20, 
    backgroundColor: '#f0f0f0',
    padding: 20
    }, 
    headerTxt: {
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 20
    }, 
    demoContainer: {
        alignItems:'center', 
        marginBottom: 20, 
        width:' 100%'
    } ,
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%', 
        marginTop: 10,
        marginHorizontal: 20
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
    fadeBox: {
        backgroundColor: '#3498db'
    },
    translateBox: {
        backgroundColor: '#3498db'
    }, 
    scaleBox : {
        backgroundColor: '#3498db'
    }
})
export default BasicAnimation