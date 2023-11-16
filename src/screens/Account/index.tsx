import { View, StyleSheet, Image } from "react-native";
import MenuList, { MenuListProps } from "../../components/MenuList";
import { images } from "../../../images";

export default function Account(){

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
                    <Image source={images.selfie}  resizeMethod='resize' resizeMode='contain'/>

                </View>
                <View style={[styles.avatar, styles.avatarProfilePlus]} >
                    <Image source={images.mais}  resizeMethod='resize' resizeMode='contain' />

                </View>
            </View>
            {
                menu.map(item => (
                    <MenuList icone={item.icone} title={item.title}/>
                ))
            }
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
            backgroundColor:'#e50914',
        },
        avatarProfilePlus: {
            backgroundColor: "#202020",
        }

    }
)