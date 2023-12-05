import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert, Image, ImageBackground } from "react-native"
import { images } from "../../../images"

export default function Home(){

    const navigation = useNavigation<any>()
    const navigateToMovie = (item: any) => {
        navigation.navigate("Movie", item)
    } 

    const movies = [
        {
            image: images.movie1,
            id:1,
            title: "Top Gun",
            gender: "Ação - Comédia - Aventura",
            sinop: "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite."
        },
        {
            image: images.movie2,
            id:2,
            title: "Top Gun",
            gender: "Ação - Comédia - Aventura",
            sinop: "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite."
        },
        
        {
            image: images.movie3,
            id:3,
            title: "Top Gun",
            gender: "Ação - Comédia - Aventura",
            sinop: "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite."
        },
        
        {
            image: images.movie4,
            id:4,
            title: "Top Gun",
            gender: "Ação - Comédia - Aventura",
            sinop: "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite."
        },
      
        {
            image: images.movie5,
            id:5,
            title: "Top Gun",
            gender: "Ação - Comédia - Aventura",
            sinop: "A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite."
        },
        
    ]

    return(
        <View style={styles.container}>
            <ImageBackground 
            source={images.movie6} 
            style={styles.movieBackground}
            resizeMethod="resize"
            resizeMode="cover">
                
            </ImageBackground>
            <View style={styles.movieBox}>
                <Text style={styles.gender}>
                    Suspense no ar. Detetive amadores
                </Text>
                <View style={styles.movieGroupButtons}>
                    <TouchableOpacity style={styles.movieButton}>
                        <Image source={images.mais} style={{width:20, height:20, }} />
                        <Text style={styles.movieButtonText}>
                            Assistir
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.movieButtonPlay}>
                        <Image source={images.play} style={{width:20, height:20, }}/>
                        <Text style={{color: "black", fontWeight: "bold"}}>
                            Assistir
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.movieButton}>
                        <Image source={images.information} style={{width:20, height:20, }}/>
                        <Text style={styles.movieButtonText}>
                            Saiba mais
                        </Text>
                    </TouchableOpacity>
                    
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
                            <Image source={item.image} 
                            style={styles.movieCardImage}
                            resizeMethod="resize"
                            resizeMode="cover"/>
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
        movieBackground: {
            flex:1,
            width:"100%",
        },
        movieBox: {
            width:"100%",
            position:"absolute",
            bottom:0,
            left:0,
            paddingBottom:20,
        },
        gender: {
            color: "white",
            fontSize:12,
            width:"100%",
            textAlign:"center",
            marginBottom:10,
        },
        movieGroupButtons: {
            height:50,
            width:"100%",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"black"
        },
        movieButton: {
            flex:1,
            alignItems:"center",
            justifyContent:"center",
        },
        movieButtonText: {
            color:"white",
            fontSize:12,

        },
        movieButtonPlay: {
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"white",
            borderRadius: 8,
            height:35,
            flexDirection:"row",
            gap:5,
        },
        movieTitle:{
            color:"white",
            fontWeight:"bold",
            fontSize:18,
            paddingVertical:8,
            backgroundColor:"black"
        },
        movieList: {
            width:"100%",
            backgroundColor:"black"
        },
        movieCard: {
            width:100,
            height:180,
            marginRight:10,
        },
        movieCardImage : {
            width:"100%",
            height:"100%",
            borderRadius:8,
        }
    }
)