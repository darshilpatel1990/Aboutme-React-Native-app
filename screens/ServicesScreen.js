import { Card } from "react-native-elements";
import { Text, ScrollView, StyleSheet } from "react-native";
import frontend from '../assets/img/frontend.png';
import backend from '../assets/img/backend.png';
import mobileapp from '../assets/img/mobileapp.png';
import webdesign from '../assets/img/webdesign.png';

const ServicesScreen = () => {
    return (
        <ScrollView>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={frontend} />
                <Text style={styles.cardText}>
                    Front-End Development
                </Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={backend} />
                <Text style={styles.cardText}>
                    Back-End Development
                </Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={webdesign} />
                <Text style={styles.cardText}>
                    Web Designing
                </Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={mobileapp} />
                <Text style={styles.cardText}>
                    Mobile Application
                </Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // cardImg: {
    //     flex: 7
    // },
    cardText: {
        margin: 20,
        fontSize: 20,
        alignSelf: 'center'
    }
});

export default ServicesScreen;