import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card } from 'react-native-elements';
import nucampwebsite from "../assets/img/nucampwebsite.png";
import Reactwebsite from "../assets/img/Reactwebsite.png";

const ProjectScreen = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Aboutme Website</Text>
                <Image
                    source={Reactwebsite}
                    style={styles.projectImg}
                />
                <View style={styles.textContent}>
                    <Text>A fictional website completely based on Bootstrap and some Javascript code</Text>
                    <Text>Details</Text>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illum, illo autem cupiditate magnam fugit ullam velit voluptate sequi adipisci et consequuntur repellendus excepturi, dolor, nobis impedit doloribus! Dignissimos, soluta.
                    </Text>
                </View>
            </View>
            <Card.Divider style={{ margin: 10 }} />
            <View>
                <Text style={styles.title}>Nucampsite Website</Text>
                <Image
                    source={nucampwebsite}
                    style={styles.projectImg}
                />
                <View style={styles.textContent}>
                    <Text>Nucampsite Website</Text>
                    <Text>A fictional website completely based on Bootstrap and some Javascript code</Text>
                    <Text>Details</Text>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illum, illo autem cupiditate magnam fugit ullam velit voluptate sequi adipisci et consequuntur repellendus excepturi, dolor, nobis impedit doloribus! Dignissimos, soluta.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    projectImg: {
        width: 280,
        height: 350,
        alignSelf: 'center'
    },
    title: {
        alignSelf: 'center',
        margin: 10,
        padding: 5,
        fontWeight: 'bold'
    },
    textContent: {
        alignItems: 'center',
        margin: 10
    }
});

export default ProjectScreen;

