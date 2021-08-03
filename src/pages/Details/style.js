import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: '#fff',

    },
    label:{
        width:"90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: "#F92E6A",
    },
    input:{
        width:"90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#F92E6A",
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonNewTask:{
        width:60,
        height:60,
        position: "absolute",
        bottom:30,
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#F92e6A"
    },
    iconButton:{
        color:"#ffffff",
        fontSize: 16,
        fontWeight: "bold",

    }
})

export default styles;