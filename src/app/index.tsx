import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { globalStyles } from '../styles/globalTheme'; // Adjust path if needed

export default function WelcomeScreen() {
  return (
    <View style={globalStyles.screen}>
      
      {/* Header Section */}
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.eyebrow}>MCO 1 Group 4</Text>
        <Text style={globalStyles.title}>Expense Tracker</Text>
      </View>
      
      <View style={globalStyles.card}>
        <Text style={globalStyles.cardTitle}>Team Members</Text>
        
        {/* Member 1 */}
        <View style={globalStyles.memberItem}>
          <View style={globalStyles.avatar}>
            <Text style={globalStyles.avatarText}>JL</Text>
          </View>
          <Text style={globalStyles.memberName}>Jeremy Lobos</Text>
        </View>

        {/* Member 2 */}
        <View style={globalStyles.memberItem}>
          <View style={globalStyles.avatar}>
            <Text style={globalStyles.avatarText}>ET</Text>
          </View>
          <Text style={globalStyles.memberName}>Elesaldy Tarrayo</Text>
        </View>

        {/* Member 3 */}
        <View style={globalStyles.memberItem}>
          <View style={globalStyles.avatar}>
            <Text style={globalStyles.avatarText}>JIM</Text>
          </View>
          <Text style={globalStyles.memberName}>Jeorge Ivan Magbutay</Text>
        </View>

        {/* Member 4 */}
        <View style={globalStyles.memberItem}>
          <View style={globalStyles.avatar}>
            <Text style={globalStyles.avatarText}>JS</Text>
          </View>
          <Text style={globalStyles.memberName}>Juliet Sarmiento</Text>
        </View>

        {/* Member 5 - Array syntax used to apply the 'last item' style */}
        <View style={[globalStyles.memberItem, globalStyles.memberItemLast]}>
          <View style={globalStyles.avatar}>
            <Text style={globalStyles.avatarText}>SR</Text>
          </View>
          <Text style={globalStyles.memberName}>Sophia Rocima</Text>
        </View>
      </View>

      {/* Custom styled button instead of the default native one */}
      <TouchableOpacity 
        style={globalStyles.primaryButton}
        activeOpacity={0.8}
        onPress={() => router.replace('/(tabs)/Home')}
      >
        <Text style={globalStyles.primaryButtonText}>Enter App</Text>
      </TouchableOpacity>

    </View>
  );
}