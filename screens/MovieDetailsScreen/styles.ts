import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 30,
  },
  movieTitle: { 
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    
  },
  headerDetails: {
    flexDirection: "row",
    alignItems: 'center',
  },
  poster: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  match: { 
    color: "lime",
    fontWeight: "bold", 
    fontSize: 18,
  },
  headerTitle: { 
    color: "grey",
    fontSize: 18,
    marginHorizontal: 10,
  },
  age: {
    backgroundColor: "yellow",
    textAlign: "center",
    fontWeight:"bold", 
    fontSize: 16,
    width: 35,
    height: 20,
    letterSpacing: 1,
    borderRadius: 3,
    
  },
  highDefinition:{
    color: "grey", 
    width: 25,
    height: 18,
    textAlign:"center",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "grey",
  },
  playButton:{
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row"
  },
  playTextButton:{
    fontWeight:"bold",
    fontSize: 20,
    marginHorizontal: 10
  },
  downloadButton:{
    width: "100%",
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    flexDirection: "row"
  },
  downoaldTextButton:{
    fontWeight:"bold",
    fontSize: 20,
    color:"white",
    marginHorizontal: 10,
  }
});

export default styles;
