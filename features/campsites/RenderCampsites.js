import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from '../../shared/baseUrl';


const RenderCampsites = (props) => {
  const { campsite } = props;
  if (campsite) {
    return (
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={{ uri: baseUrl + campsite.image }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {campsite.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{campsite.description}</Text>
        <Icon 
            name={props.isFavorite ? "heart" : "heart-o"}
            type="font-awesome" 
            color="#f50" 
            raised 
            reverse 
            onPress={() => props.isFavorite ? console.log('Already set as favorite') : props.markFavorite()}
            />
      </Card>
    );
  }

  return <View />;
};
const styles = StyleSheet.create({
  commentsTitle: {
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43484D',
    padding: 10,
    paddingTop: 30
},

})

export default RenderCampsites;
