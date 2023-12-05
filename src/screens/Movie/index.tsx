import { useRoute } from "@react-navigation/native"
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,  } from "react-native"
import { images } from "../../../images"

export default function Movie(){

    const route = useRoute<any>()

    return(
        <View style={styles.container}>
            <ImageBackground source={route.params.image} style={styles.movieBackground}>
                <Text>
                    O id do filme é {JSON.stringify(route.params.id)}
                </Text>
                <View style={styles.info}>
                    <View style={styles.description}>
                        <Text style={styles.title}>
                            {route.params.title}
                        </Text>
                        <Text style={styles.gender}>
                            {route.params.gender}
                        </Text>
                        <Text style={styles.sinop}>
                            {route.params.sinop}
                        </Text>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.buttonPlay}>
                            <Image source={images.play} style={{width:20, height:20,}} />
                            <Text>
                                PLAY
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>            
        </View>
    )
}

const styles = StyleSheet.create(
    {
      container: {
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor: "#000",
      },
      movieBackground: {
        flex:1,
        width:"100%"
      },
      info: {
        width:"100%",
        height:250,
        position:"absolute",
        bottom:0,
        gap:25,
      },
      description: {
        gap:10,
        paddingHorizontal:10,
      },
      title: {
        color: "white",
        fontSize:18,
        fontWeight:"bold",
      },
      gender: {
        color: "white",
      },
      sinop: {
        color: "white",
      },
      actions:{
        alignItems: "center",
        justifyContent: "center",
      },
      buttonPlay: {
        backgroundColor: "white",
        width:150,
        height:35,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        gap:10,
        borderRadius:8,
      }  
    }
)