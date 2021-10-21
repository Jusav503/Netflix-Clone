import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10
    },
    headerContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    posterContainer: {
        width: 150,
        height: 80,
        borderRadius: 5,
    },
    numberEpisode: {
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    whiteText: {
        color: "white",
        letterSpacing: 0.5
    },
})

export default styles;