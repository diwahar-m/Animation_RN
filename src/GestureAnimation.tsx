import { StyleSheet, Text, View } from "react-native"


const GestureAnimation = () => {

    return <View style={styles.container}>
        <Text style={styles.headerTxt}>Gesture Animation Demo</Text>
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
        fontWeight: 'bold'
    }
})

export default GestureAnimation