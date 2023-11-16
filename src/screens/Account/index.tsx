import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import MenuList, { MenuListProps } from "../../components/MenuList";
import { images } from "../../../images";
import { useNavigation } from "@react-navigation/native";
import Login from "../Login";

export default function Account(){
    const navigation = useNavigation<any>() 
    const menu : MenuListProps[] = [
        {
            title: "Notificações",
            icone: "bell"
        },
        {
            title: "Minha lista",
            icone: "list"
        },
        {
            title: "Configurações",
            icone: "setting"
        },
        {
            title: "Conta",
            icone: "user"
        },
        {
            title: "Ajuda",
            icone: "setting"
        }
    ]
    return(
        <View style={styles.container}>
            <View style={styles.avatarBox}>
                <View style={[styles.avatar, styles.avatarAccount]} >
                    <Image style={styles.selfie} source={images.selfie} resizeMethod='resize' resizeMode='cover'/>

                </View>
                <View style={[styles.avatar, styles.avatarProfilePlus]} >
                    <Image style={styles.mais} source={images.mais} resizeMethod='resize' resizeMode='cover' />

                </View>
            </View>
            {
                menu.map(item => (
                    <MenuList icone={item.icone} title={item.title}/>
                ))
            }
            <TouchableOpacity style={styles.buttonSair} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#000000",
            flex:1,
            alignItems: "center",
            justifyContent: "center",
            gap:5,
        },
        avatarBox: {
            height:125,
            width:250,
            flexDirection: "row",
            marginBottom:70,
            gap:10,
        },
        avatar: {
            flex:1,
        },
        avatarAccount: {

        },
        avatarProfilePlus: {
            backgroundColor: "#202020",
            justifyContent:"center",
            alignItems:"center",
        },
        selfie: {
            height:125,
            width:"100%",
            borderRadius:100,
        },
        mais: {
            height:50,
            width:50,
        },
        buttonSair: {
            marginTop: 40,
            width: 100,
            height: 52,
            justifyContent: "center",
            alignItems:"center",
            borderRadius:12,
            backgroundColor:"#333"
        },
        text: {
            color:"white"
        }

    }
)