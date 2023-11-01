import { Image, ScrollView, Text, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native"
import { StyleSheet } from "react-native"
import { images } from "../../../images"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { products } from "../../Servidor/pratos"

export default function TabProducts (){
    const navigation = useNavigation<any>()
    const [pratos, setPratos] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    // useEffect(()=> {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setPratos(products)
    //         setLoading(false)
    //     }, 5000)
    // },[])

    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            setTimeout(()=> {
                    setPratos(products);
                    setLoading(false)
            }, 5000);
        },[])
    )
    
    return (
       <View style={styles.container}>
        <View style={styles.header}>
            <Image source={images.logo} resizeMode="contain"resizeMethod="resize" style={styles.logo}/>
            <Text style={styles.logoText}>
                GoRestaurant
            </Text>
        </View>
        <View style={styles.content}>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <ScrollView horizontal={true} style={styles.categoryBox}>
                <View style={styles.categoryIcon}>
                    <Image source={images.group} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
                <View style={styles.categoryIcon}>
                    <Image source={images.pizza} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
                <View style={styles.categoryIcon}>
                    <Image source={images.carnes} resizeMode="contain" resizeMethod="resize" style={styles.categoryIconImage} />
                </View>
            </ScrollView>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pratos</Text>
            <ScrollView style={styles.sectionContent} >
            
            <ActivityIndicator animating={loading} size={"large"} color={"red"}/>
            { pratos.map(item => (
                <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate("ProductDetails",{product: item})}>
                    <View style={styles.productBackground}>
                        <Image source={images.produto} resizeMode="contain" resizeMethod="resize"/>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.textBoxTitle}>{item.title}</Text>
                        <Text style={styles.textBoxDescription}>{item.description}</Text>
                        <Text style={styles.textBoxPrice}>R$ {item.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}

            </ScrollView>
        </View>
        </View>
       </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:"white",
        },
        logo: {
            width: 48
        },
        logoText: {
            flex:1,
            fontSize:28,
            fontWeight:"bold",
            color: "white",
        },
        header: {
            backgroundColor:"#c72828",
            height:150,
            justifyContent:"space-between",
            flexDirection:"row",
            alignItems:"center",
            paddingHorizontal: 15,
            gap:5,
        },
        content: {
            paddingHorizontal:15,
        },
        section: {
            paddingVertical: 15,
        },
        sectionTitle: {
            fontWeight: "bold",
            fontSize: 24,
            color: "#999",
            marginBottom:12,
        },
        categoryBox: {

        },
        categoryIcon: {
            width: 120,
            height: 120,
            marginHorizontal: 12,
            justifyContent:"center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "#f0f0f5"
        },
        categoryIconImage: {
            width: 50,
            height: 50,
        },
        sectionContent: {
            borderColor:"red",
        },
        productItem: {
            height: 120,
            borderRadius:8,
            backgroundColor: "#f0f0f5",
            justifyContent:"space-between",
            flexDirection:"row",
            marginBottom:10,
        },
        productBackground: {
            backgroundColor:"#ffb84d",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius:8,
            borderBottomLeftRadius:8,
        },
        textBox: {
            flex:2,
            paddingHorizontal: 14,
            padding: 14,
            justifyContent:"center",
        },
        textBoxTitle: {
            fontWeight: "bold",
            color:"#3d3d4d",
            fontSize: 18,
        },
        textBoxDescription: {
            color:"#3d3d4d",
            fontSize:16,
        },
        textBoxPrice: {
            fontSize:24,
            color:"#39b100",
            fontWeight:"bold",
        }

    }
)