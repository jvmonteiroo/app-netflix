import { Text, View, StyleSheet, Image } from "react-native";
import Input from "../../components/Input";
import ButtonPrimary from "../../components/ButtonPrimary";
import { images } from "../../../images";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation<any>()
    return(
        <View style={styles.container}>
            <Image source={images.logo} style={styles.logo} resizeMethod="resize" resizeMode="contain"/>
            <Text style={styles.text}>
                Entrar
            </Text>
            <Input placeholder="Email ou número de telefone"/>
            <Input placeholder="Senha" securityKeyboard={true}/>
            <ButtonPrimary style={{borderWidth:1}} onPress={() => navigation.navigate("Home")}>
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