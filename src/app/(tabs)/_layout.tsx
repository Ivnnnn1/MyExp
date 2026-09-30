import { Tabs } from 'expo-router';
import { globalTheme } from '../../styles/globalTheme'; // Assuming you configured the @ alias

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: globalTheme.colors.primary,
                tabBarInactiveTintColor: globalTheme.colors.textLight,
                headerStyle: {
                    backgroundColor: globalTheme.colors.background,
                },
                headerTintColor: globalTheme.colors.text,
            }}>
            <Tabs.Screen
                name="Home"
                options={{ title: 'Home',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name='Transaction'
                options={{ title: 'hi',
                    headerShown: false
                }}
            />
        </Tabs>
    );
}