import {
    Platform,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import Whitelogo from '../assets/img/Whitelogo.png';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerItemList,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ServicesScreen from './ServicesScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#151539',
    headerStyle: { backgroundColor: '#CF8543' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ServicesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Services'
                component={ServicesScreen}
                options={({ navigation }) => ({
                    title: 'Services Provided',
                    headerLeft: () => (
                        <Icon
                            name='wrench'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ProjectsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Projects'
                component={ServicesScreen}
                options={({ navigation }) => ({
                    title: 'Projects',
                    headerLeft: () => (
                        <Icon
                            name='code-fork'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const SkillssNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Skills'
                component={ServicesScreen}
                options={({ navigation }) => ({
                    title: 'Skills',
                    headerLeft: () => (
                        <Icon
                            name='graduation-cap'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Contact'
                component={ServicesScreen}
                options={({ navigation }) => ({
                    title: 'Contact me',
                    headerLeft: () => (
                        <Icon
                            name='phone'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 2 }}>
                    <Image source={Whitelogo} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={styles.drawerHeaderText}>Darshil Patel</Text>
                </View>
            </View>
            <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
        </DrawerContentScrollView>
    );
};

const Main = () => {
    return (
        <View style={{
            flex: 1,
            paddingTop:
                Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#ffe4c4' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Services'
                    component={ServicesNavigator}
                    options={{
                        title: 'Services Provided',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='wrench'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Projects'
                    component={ProjectsNavigator}
                    options={{
                        title: 'Projects',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='code-fork'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Skills'
                    component={ProjectsNavigator}
                    options={{
                        title: 'Skills',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='graduation-cap'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ProjectsNavigator}
                    options={{
                        title: 'Contact me',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='phone'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#151539',
        fontSize: 24
    },
    drawerHeader: {
        backgroundColor: '#CF8543',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.9,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#151539',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'Palatino-Roman'
    },
    drawerImage: {
        margin: 25,
        height: 60,
        width: 60
    }
});

export default Main;