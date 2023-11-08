import { View, StyleSheet } from "react-native";
import MenuList, { MenuListProps } from "../../components/MenuList";

export default function Account(){

    const menu : MenuListProps[] = [
        {
            title: "Notificações",
        },
        {
            title: "Minha lista"
        },
        {
            title: "Configurações"
        },
        {
            title: "Conta"
        }
    ]
    return(
        <View style={styles.container}>
            {
                menu.map(item => (
                    <MenuList title={item.title}/>
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

    }
)