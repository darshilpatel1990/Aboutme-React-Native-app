import { View, StyleSheet, Button, Text } from "react-native";
import { Input } from "react-native-elements";

const ContactScreen = () => {
    return (
        <View style={styles.form}>
            <Text style={styles.formTitle}>
                Feel free to contact me
            </Text>
            <Input
                placeholder='First Name'
                leftIconContainerStyle={{ paddingRight: 10 }}
                // onChangeText={(author) => setAuthor(author)}
                value=''
            />
            <Input
                placeholder='Last Name'
                leftIconContainerStyle={{ paddingRight: 10 }}
                // onChangeText={(text) => setText(text)}
                value=''
            />
            <Input
                placeholder='Contact No.'
                leftIconContainerStyle={{ paddingRight: 10 }}
                value=''
            />
            <Input
                placeholder='Message'
                leftIconContainerStyle={{ paddingRight: 10 }}
                value=''
            />
            <View style={{ margin: 10 }}>
                <Button
                    title='Submit'
                    color='#5637DD'
                // onPress={() => {
                //     handleSubmit();
                //     resetForm();
                // }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formTitle: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        color: '#151539'
    },
    form: {
        justifyContent: 'center',
        margin: 20
    }
});

export default ContactScreen;
