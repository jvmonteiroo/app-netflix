import { Text, View, StyleSheet, Image } from "react-native";
import Input from "../../components/Input";
import ButtonPrimary from "../../components/ButtonPrimary";
import { images } from "../../../images";

export default function Login(){
    return(
        <View style={styles.container}>
            <Image source={images.logo} style={styles.logo} resizeMethod="resize" resizeMode="contain"/>
            <Text style={styles.text}>
                Entrar
            </Text>
            <Input placeholder="Email ou número de telefone"/>
            <Input placeholder="Senha"/>
            <ButtonPrimary style={{borderWidth:1}}>
                Entrar
            </ButtonPrimary>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: "center",
            justifyContent: "center",
            flex:1,
            gap:10,
            padding:10,
            backgroundColor:"#000",
        },
        logo: {
            width:120,
            height:45,
            marginBottom:30,
        },
        text: {
            color: "white",
            fontWeight: "bold",
            fontSize:18,
            width: "100%",
            marginBottom:10,
            paddingLeft:3,
        }
    }
)