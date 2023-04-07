import { Card } from "react-native-elements";
import { Text, ScrollView } from "react-native";
import frontend from '../assets/img/frontend.png';
import backend from '../assets/img/backend.png';
import mobileapp from '../assets/img/mobileapp.png';
import webdesign from '../assets/img/webdesign.png';

const ServicesScreen = () => {
    return (
        <ScrollView>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={frontend} />
                <Text style={{ margin: 20 }}>Front-End Development</Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={backend} />
                <Text style={{ margin: 20 }}>Back-End Development</Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={webdesign} />
                <Text style={{ margin: 20 }}>Web Designing</Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={mobileapp} />
                <Text style={{ margin: 20 }}>Mobile Application</Text>
            </Card>
        </ScrollView>
    );
};

export default ServicesScreen;