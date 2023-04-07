import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import profile3 from '../assets/img/profile3.jpg';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.homePage}>
            <Avatar
                source={profile3}
                size='large'
                rounded
                style={styles.profileImg}
            />
            <View style={styles.textContent}>
                <Text
                    style={styles.textTitle}>
                    Let me introduce myself
                </Text>
                <Text style={styles.textItself}>
                    I'm a Software Developer from Winnipeg, Canada.
                    {"\n"}
                    I have serious passion for designing & creating interactive mobile apps.
                    {"\n"}
                    I create clean, professional, functional mobile apps.
                    {"\n"}
                    Let's make something special.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    homePage: {
        backgroundColor: '#ffe4c4'
    },
    profileImg: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        marginVertical: 40
    },
    textContent: {
        marginHorizontal: 40,
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Georgia',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    textItself: {
        fontSize: 18,
        fontFamily: 'Georgia'
    }
});

export default HomeScreen;