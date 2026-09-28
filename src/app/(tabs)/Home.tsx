import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles, globalTheme } from '../../styles/globalTheme';

export default function HomeScreen() {
    return (
        <SafeAreaView style={globalStyles.screen}>
            <View style={globalStyles.homeHeader}>
                <Text style={globalStyles.subTitle}>Good Morning,</Text>
                <Text style={globalStyles.title}>Jeremy Lobos</Text>
            </View>

            {/* MainCard Sections */}
            <View style={globalStyles.homeCard}>
                <Text style={globalStyles.homeCardNetworth}>Networth</Text>
                <Text style={globalStyles.homeCardBalance}>₱124,247.85</Text>
                <Text style={globalStyles.homeCardPercentage}> +12% this month</Text>
            </View>

            <Text style={globalStyles.subTitle}>Recent Transaction</Text>
            <ScrollView style={{ marginTop: 12}}>
                {/* Recent Transaction history */}
                <View style={globalStyles.recentTransaction}>
                    {/* Left Side: Icon and Details */}
                    <View style={globalStyles.transactionLeft}>
                        <View>
                            <Text style={globalStyles.transactionTitle}>Expense</Text>
                            <Text style={globalStyles.transactionSubtitle}>today</Text>
                        </View>
                    </View>
                    {/* Right Side: Amount */}
                    <View style={globalStyles.transactionRight}>
                        <Text style={globalStyles.transactionAmount}>- ₱1000.00</Text>
                    </View>
                </View>
                <View style={globalStyles.recentTransaction}>
                    {/* Left Side: Icon and Details */}
                    <View style={globalStyles.transactionLeft}>
                        <View>
                            <Text style={globalStyles.transactionTitle}>Expense</Text>
                            <Text style={globalStyles.transactionSubtitle}>yesterday</Text>
                        </View>
                    </View>
                    {/* Right Side: Amount */}
                    <View style={globalStyles.transactionRight}>
                        <Text style={globalStyles.transactionAmount}>- ₱1230.00</Text>
                    </View>
                </View>
                <View style={globalStyles.recentTransaction}>
                    {/* Left Side: Icon and Details */}
                    <View style={globalStyles.transactionLeft}>
                        <View>
                            <Text style={globalStyles.transactionTitle}>Expense</Text>
                            <Text style={globalStyles.transactionSubtitle}>01/03/2027</Text>
                        </View>
                    </View>
                    {/* Right Side: Amount */}
                    <View style={globalStyles.transactionRight}>
                        <Text style={globalStyles.transactionAmount}>- ₱2466.35</Text>
                    </View>
                </View>
                <View style={globalStyles.recentTransaction}>
                    {/* Left Side: Icon and Details */}
                    <View style={globalStyles.transactionLeft}>
                        <View>
                            <Text style={globalStyles.transactionTitle}>Income</Text>
                            <Text style={globalStyles.transactionSubtitle}>01/02/2027</Text>
                        </View>
                    </View>
                    {/* Right Side: Amount */}
                    <View style={globalStyles.transactionRight}>
                        <Text style={globalStyles.transactionAmount}>+ ₱1500.00</Text>
                    </View>
                </View>
                <View style={globalStyles.recentTransaction}>
                    {/* Left Side: Icon and Details */}
                    <View style={globalStyles.transactionLeft}>
                        <View>
                            <Text style={globalStyles.transactionTitle}>Expense</Text>
                            <Text style={globalStyles.transactionSubtitle}>01/01/2027</Text>
                        </View>
                    </View>
                    {/* Right Side: Amount */}
                    <View style={globalStyles.transactionRight}>
                        <Text style={globalStyles.transactionAmount}>- ₱530.65</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
