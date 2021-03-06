import {Dimensions, StyleSheet} from 'react-native'
import {Fonts, Colors, Metrics, ApplicationStyles} from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    mainContainer: {
        flex: 1,
    },
    topHeaderImage: {
        paddingTop: Metrics.baseMargin,
        height: 2 * Metrics.doubleSection,
        width: Dimensions.get('window').width,
        paddingHorizontal: Metrics.marginFifteen
    },
    userNameContainer: {
        backgroundColor: Colors.semiTransBlack,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.semiTransBlack
    },
    familyTitleContainer: {
        flexDirection: 'row'
    },
    familyName: {
        color: Colors.snow,
        textAlignVertical: 'center',
        textAlign: 'center',
        margin: Metrics.smallMargin,
        fontFamily: Fonts.type.bold
    },
    familyTxt: {
        color: Colors.offWhite,
        fontFamily: Fonts.type.semiBold
    },
    familyMembersContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    expensesRow: {
      flexDirection: 'row'
    },
    categoryBar: {
        padding: 12.5,
        flexDirection: 'row',
        margin: Metrics.smallMargin,
        justifyContent: 'space-between',
        backgroundColor: Colors.primaryColorI,
    },
    categoryText: {
        color: Colors.snow,
        fontSize: Fonts.size.h6
    },
    plusIcon: {
        fontSize: 25,
        color: Colors.snow
    },
    date: {
        textAlign: 'center',
        fontSize: Fonts.size.h5,
        color: Colors.offWhiteII,
        padding: Metrics.smallMargin
    }
})
