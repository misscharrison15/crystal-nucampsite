import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from '../../shared/baseUrl';
import * as Animatable from 'react-native-animatable'


const RenderCampsites = (props) => {
  const { campsite } = props;

  if (campsite) {
    return (
      <Animatable.View 
        animation='fadeInDownBig'
        duration={2000}
        delay={1000}
      >
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={{ uri: baseUrl + campsite.image }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={[
                styles.cardText
              ]}
            >
              {campsite.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{campsite.description}</Text>

        <View>
          <Icon
            name={props.isFavorite ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            raised
            reverse
            onPress={() =>
              props.isFavorite
                ? console.log("Already set as favorite")
                : props.markFavorite()
            }
          />
          <Icon
            type="font-awesome"
            name="pencil"
            color="#5637DD"
            raised
            reverse
            onPress={props.onShowModal}
          />
        </View>
      </Card>
      </Animatable.View>
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
cardRow: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  flexDirection: 'row',
  margin: 20
},
cardText: {
  textShadowColor: 'rgba(0, 0, 0, 1)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 20,
  textAlign: 'center',
  color: 'white',
  fontSize: 20
}


})

export default RenderCampsites;
