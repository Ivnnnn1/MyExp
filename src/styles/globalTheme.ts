import { StyleSheet } from 'react-native';

export const globalTheme = {
    colors: {
        primary: '#007AFF',
        background: '#ffffff',
        surface: '#f8f9fa', // Lighter gray for the background so the white card pops
        text: '#1c1c1e',
        textLight: '#8e8e93',
        border: '#e5e5ea',  // Soft border for separators
        danger: '#ff3b30',
        success: '#34c759',
        avatarBg: '#e5f0ff', // Very light blue for avatars
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 48,
    },
};

export const globalStyles = StyleSheet.create({
    // Main Screen Container
    screen: {
        flex: 1,
        backgroundColor: globalTheme.colors.surface,
        padding: globalTheme.spacing.l,
    },
    
    // Typography
    headerContainer: {
        alignItems: 'center',
        marginBottom: globalTheme.spacing.xl,
    },
    eyebrow: {
        fontSize: 13,
        fontWeight: '700',
        color: globalTheme.colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        marginBottom: globalTheme.spacing.s,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: globalTheme.colors.text,
    },
    subTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: globalTheme.colors.text,
    },

    // Card Container
    card: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 24,
        padding: globalTheme.spacing.l,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 4, // Android shadow
        marginBottom: globalTheme.spacing.xl,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: globalTheme.colors.text,
        marginBottom: globalTheme.spacing.m,
    },

    // List Items
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: globalTheme.colors.border,
    },
    memberItemLast: {
        borderBottomWidth: 0, // Removes the line for the last item
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: globalTheme.colors.avatarBg,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: globalTheme.spacing.m,
    },
    avatarText: {
        color: globalTheme.colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    memberName: {
        fontSize: 16,
        fontWeight: '500',
        color: globalTheme.colors.text,
    },

    // Custom Button
    primaryButton: {
        backgroundColor: globalTheme.colors.primary,
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
        shadowColor: globalTheme.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    },

    // Home Screen Styles
    homeHeader: {
        marginBottom: globalTheme.spacing.l,
    },


// Home Card
    homeCard: {
        backgroundColor: '#4A148C', // Deep dark violet
        borderRadius: 24,
        padding: globalTheme.spacing.l,
        shadowColor: '#2a0657', // Tinting the shadow matches the card for a premium glow
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.50, // Increased slightly so the dark shadow is visible
        shadowRadius: 16,
        elevation: 12, // Increased slightly for Android
        marginBottom: globalTheme.spacing.xl,
    },

    homeCardNetworth:{
        fontSize: 16,
        color: '#ffffff',
    },
    homeCardBalance:{
        marginTop: globalTheme.spacing.m,
        fontSize: 42,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    homeCardPercentage:{
        marginTop: globalTheme.spacing.s,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#34c759',
    },

// Home Recent Transaction Container
    recentTransaction: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 24,
        padding: globalTheme.spacing.m, // Slightly tighter padding looks better for lists
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // Softened the shadow to match the clean look
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2, 
        marginBottom: globalTheme.spacing.s,
        
        // This makes it a row with space between the left and right groups
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    // Left Group
    transactionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: globalTheme.colors.text,
        marginBottom: 4,
    },
    transactionSubtitle: {
        fontSize: 14,
        color: globalTheme.colors.textLight,
        fontWeight: '400',
    },
    
    // Right Group (Amounts)
    transactionRight: {
        alignItems: 'flex-end', // Aligns the text to the right side
    },
    transactionAmount: {
        fontSize: 17,
        fontWeight: '500',
        color: globalTheme.colors.text,
    },


// Inside globalStyles = StyleSheet.create({ ... })

    // Container for the selector tabs
    transactionTypeCard: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 24,
        padding: 6, // Tighter padding for a pill container look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2, 
        marginBottom: globalTheme.spacing.m,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // Individual tab button style
    typeButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 18,
    },

    // Text active state
    activeText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

    // Text inactive state
    inactiveText: {
        color: globalTheme.colors.textLight,
        fontWeight: '500',
    },


    // Container for the amount card
    transactionAmountCard: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 24,
        padding: globalTheme.spacing.l,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 11,
        elevation: 2, 
        marginBottom: globalTheme.spacing.m,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: globalTheme.spacing.xxl,
    },

    // Plus and Minus button styling
    amountBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: globalTheme.colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
    },

    amountBtnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: globalTheme.colors.text,
    },

    // Labels inside the amount card
    amountCardLabel: {
        fontSize: 12,
        color: globalTheme.colors.textLight,
        fontWeight: '600',
        marginBottom: 4,
        letterSpacing: 1,
    },

    amountCardValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: globalTheme.colors.text,
    },

    catagory: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: globalTheme.spacing.m,
    },

    catagorySelection: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 24,
        padding: 10, // Tighter padding for a pill container look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2, 
        marginBottom: globalTheme.spacing.m,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },

    catagoryColumn: {
        flexDirection: 'row',
    },

    categoryList: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
    },

    descripText: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 20,
        padding: 20, // Tighter padding for a pill container look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        paddingVertical: globalTheme.spacing.l,
    },

    dateSelection: {
        flexDirection: 'row',
        alignContent: 'space-evenly',
        gap: 5,
        marginTop: globalTheme.spacing.m,
    },

    dateBox: {
        backgroundColor: globalTheme.colors.background,
        borderRadius: 20,
        padding: 20, // Tighter padding for a pill container look
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        paddingHorizontal: globalTheme.spacing.l,
        flex: 1,
    },

    saveTrans: {
        backgroundColor: globalTheme.colors.primary,
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
        shadowColor: globalTheme.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        marginTop: globalTheme.spacing.xl,    
    }
});