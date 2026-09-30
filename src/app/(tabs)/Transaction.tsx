import { View, Text, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles, globalTheme } from '../../styles/globalTheme';
import { useState } from 'react';

export default function TransactionScreen() {

    const [transactionType, setTransactionType] = useState<'Expense' | 'Income'>('Expense'); 
    const [amount, setAmount] = useState<number>(0);

    // Dynamic amount
    // Helper functions to change amount with the + and - buttons
    const incrementAmount = () => setAmount(prev => prev + 1.5);
    const decrementAmount = () => setAmount(prev => (prev >= 1.0 ? prev - 1 : 0));
    

    return (
        <SafeAreaView style={globalStyles.screen}>
            <View style={globalStyles.homeHeader}>
                <Text style={globalStyles.subTitle}>Transactions</Text>
            </View>

            {/* Transaction Type Selector */}
            <View style={globalStyles.transactionTypeCard}>
                <Pressable
                    style={[
                        globalStyles.typeButton,
                        transactionType === 'Expense' && { backgroundColor: globalTheme.colors.danger }
                    ]}
                    onPress={() => setTransactionType('Expense')}
                >
                    <Text style={[
                        transactionType === 'Expense' ? globalStyles.activeText : globalStyles.inactiveText
                    ]}>
                        Expense
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        globalStyles.typeButton,
                        transactionType === 'Income' && { backgroundColor: globalTheme.colors.success }
                    ]}
                    onPress={() => setTransactionType('Income')}
                >
                    <Text style={[
                        transactionType === 'Income' ? globalStyles.activeText : globalStyles.inactiveText
                    ]}>
                        Income
                    </Text>
                </Pressable>
            </View>

            {/* Amount Transaction */}
{/* Dynamic Amount Card */}
            <View style={globalStyles.transactionAmountCard}>
                <Pressable
                    style={globalStyles.amountBtn}
                    onPress={decrementAmount}
                >
                    <Text style={globalStyles.amountBtnText}>-</Text>
                </Pressable>
                
                <View style={{ alignItems: 'center' }}>
                    <Text style={globalStyles.amountCardLabel}>AMOUNT SPENT</Text>
                    <Text style={globalStyles.amountCardValue}>
                        ₱{amount.toFixed(2)}
                    </Text>
                </View>

                <Pressable 
                    style={globalStyles.amountBtn}
                    onPress={incrementAmount}
                >
                    <Text style={globalStyles.amountBtnText}>+</Text>
                </Pressable>
            </View>

            <View>
                <Text style={globalStyles.catagory}>SELECT CATAGORY</Text>
            </View>

            <View style={globalStyles.categoryList}>
                <View style={globalStyles.catagoryColumn}>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12,}}>FOOD</Text></View>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>TRANS</Text></View>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>SHOP</Text></View>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>BILLS</Text></View>
                </View>
                <View style={globalStyles.catagoryColumn}>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>GAMES</Text></View>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>HEALTH</Text></View>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>HOME</Text></View>
                    <View style={globalStyles.catagorySelection}><Text style={{ fontSize: 12}}>EDU</Text></View>
                </View>
            </View>

            <View>
                <TextInput style={globalStyles.descripText}
                    placeholder='Add Description'
                />
            </View>

            <View style={globalStyles.dateSelection}>
                <TextInput style={globalStyles.dateBox}
                    placeholder='Day'
                />
                <TextInput style={globalStyles.dateBox}
                    placeholder='Month'
                />
                <TextInput style={globalStyles.dateBox}
                    placeholder='Year'
                />
            </View>

            <View>
                <Pressable style={globalStyles.saveTrans}>
                    <Text>
                        Save transaction
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}