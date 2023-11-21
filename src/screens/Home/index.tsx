import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from "react-native"

export default function Home(){

    const navigation = useNavigation<any>()
    const navigateToMovie = (item: any) => {
        navigation.navigate("Movie", { movie: item })
    } 

    const movies = [
        {
            image:"",
            id:1,
        },
        {
            image:"",
            id:2,
        },
        {
            image:"",
            id:3,
        },
        {
            image:"",
            id:4,
        },
        {
            image:"",
            id:5,
        },
    ]

    return(
        <View style={styles.container}>
            <View style={styles.movieBox}>
                <View style={styles.movieGroupButtons}>

                </View>
                <Text style={styles.movieTitle}>
                    Lançados nos últimos 12 meses
                </Text>
                <ScrollView style={styles.movieList} horizontal={true}>
                    {movies.map(item => (
                        <TouchableOpacity 
                            key={item.id} 
                            style={styles.movieCard} 
                            onPress={() => navigateToMovie(item)}
                        >
                            <Text>
                                filme
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor:"black",

        },
        movieBox: {
            borderWidth:1,
            borderColor:"white",
            width:"100%",
            height:250,
            position:"absolute",
            bottom:20,
            left:0,
        },
        movieGroupButtons: {
            borderWidth:1,
            borderColor:"white",
            height:50,
            width:"100%",

        },
        movieTitle:{
            color:"white",
            fontWeight:"bold",
            fontSize:18,
            marginVertical:8,
        },
        movieList: {
            borderWidth:1,
            borderColor:"white",
            width:"100%",
        },
        movieCard: {
            borderWidth:1,
            borderColor:"white",
            width:100,
            height:250,
            marginRight:10,
        }
    }
)