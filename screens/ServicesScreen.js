import { Card } from "react-native-elements";
import { Text, ScrollView, StyleSheet, Image } from "react-native";
import frontend from '../assets/img/frontend.png';
import backend from '../assets/img/backend.png';
import mobileapp from '../assets/img/mobileapp.png';
import webdesign from '../assets/img/webdesign.png';

const ServicesScreen = () => {
    return (
        <ScrollView>
            <Card containerStyle={{ padding: 0 }}>
                <Image source={frontend} style={styles.serviceImg} />
                <Text style={styles.cardText}>
                    Front-End Development
                </Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Image source={backend} style={styles.serviceImg} />
                <Text style={styles.cardText}>
                    Back-End Development
                </Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Image source={webdesign} style={styles.serviceImg} />
                <Text style={styles.cardText}>
                    Web Designing
                </Text>
            </Card>
            <Card containerStyle={{ padding: 0 }}>
                <Image source={mobileapp} style={styles.serviceImg} />
                <Text style={styles.cardText}>
                    Mobile Application
                </Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    serviceImg: {
        width: 250,
        height: 170,
        alignSelf: 'center'
    },
    cardText: {
        margin: 10,
        fontSize: 20,
        alignSelf: 'center',
        padding: 0
    }
});

export default ServicesScreen;