import RenderCampsites from "../features/campsites/RenderCampsites";

const CampisteInfoScreen = ({ route }) => {
    const { campsite }= route.params;
    return <RenderCampsites campsite={campsite} />
}

export default CampisteInfoScreen;