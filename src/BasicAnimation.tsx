import { StyleSheet, Text, View } from "react-native"

const BasicAnimation =() => {

    return (
        <View style={styles.container}>
                <Text style={styles.headerTxt}>Basic Animation</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1, 
        padding:10
    }, 
    headerTxt: {
        fontSize: 16, 
        fontWeight: 'bold'
    },  
})

export default BasicAnimation