import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamsList } from "./RootNavigation"

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, "Home">

type Prop= {
    navigation: HomeScreenNavigationProp
}

const INITIAL_DATA = [
    {
        id: 1, 
        title: 'Basic Animation Demo',
        screen: 'BasicAnimation'
    },
    {
        id: 2, 
        title: 'Interpolation Demo',
        screen: 'InterpolationDemo'
    },
    {
        id: 3, 
        title: 'Combined Animation Demo',
        screen: 'CombinedAnimation'
    },
    {
        id: 4, 
        title: 'Gesture Animation Demo',
        screen: 'GestureAnimation'
    },
    {
        id: 5, 
        title: 'ReanimatedCoreConcepts',
        screen: 'ReanimatedCoreConcepts'
    },
    {
        id: 6,
        title: 'ReanimatedAnimationTypes',
        screen: 'ReanimatedAnimationTypes'
    },
]

const Home: React.FC<Prop> =({navigation}) => {

    const handleRenderItem =({item}: {item: {id: string, title: string, screen: string}}) => {
        return <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate(item.screen as keyof RootStackParamsList)}>
                <Text style={styles.itemTxt}>{item.title}</Text>
        </TouchableOpacity>
    }

    return (
       <View style={styles.container}>
        <FlatList 
            data={INITIAL_DATA}
            renderItem={handleRenderItem}
        />
       </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#ddd',
        borderBottomWidth: 1, 
        borderBlockColor: '#cdf',
        marginBottom: 20,
        borderRadius: 8
    },
    itemTxt: {
        fontSize: 18, 
        fontWeight: 'bold'
    }
})

export default Home