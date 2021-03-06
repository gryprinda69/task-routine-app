import { Platform } from 'react-native'
import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.transparent
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        logo: {
            width: 100,
            height: 100,
            alignSelf: 'center',
            resizeMode: 'contain',
            marginTop: Metrics.doubleBaseMargin
        },
        container: {
            flex: 1,
            paddingTop: Metrics.baseMargin,
            backgroundColor: Colors.transparent
        },
        section: {
            margin: Metrics.section,
            padding: Metrics.baseMargin
        },
        sectionText: {
            ...Fonts.style.normal,
            paddingVertical: Metrics.doubleBaseMargin,
            color: Colors.snow,
            marginVertical: Metrics.smallMargin,
            textAlign: 'center'
        },
        subtitle: {
            color: Colors.snow,
            padding: Metrics.smallMargin,
            marginBottom: Metrics.smallMargin,
            marginHorizontal: Metrics.smallMargin
        },
        titleText: {
            ...Fonts.style.h2,
            fontSize: 14,
            color: Colors.text
        },
        grayLabel: {
            color: Colors.gray
        },
        notesContainer: {
            marginVertical: Metrics.marginFifteen
        },
        notesInputContainer: {
            borderWidth: 1,
            height: 100,
            textAlignVertical: 'top',
            borderColor: Colors.offWhiteI,
            borderRadius: Metrics.baseMargin,
        }
    },
    darkLabelContainer: {
        padding: Metrics.smallMargin,
        paddingBottom: Metrics.doubleBaseMargin,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
        marginBottom: Metrics.baseMargin
    },
    darkLabel: {
        fontFamily: Fonts.type.bold,
        color: Colors.snow
    },
    groupContainer: {
        margin: Metrics.smallMargin,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    sectionTitle: {
        ...Fonts.style.h4,
        color: Colors.coal,
        backgroundColor: Colors.ricePaper,
        padding: Metrics.smallMargin,
        marginTop: Metrics.smallMargin,
        marginHorizontal: Metrics.baseMargin,
        borderWidth: 1,
        borderColor: Colors.ember,
        alignItems: 'center',
        textAlign: 'center'
    },
    shadow: {
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 3
    },
    imageInitialsContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.themeColor
    },
    imageInitials: {
        fontSize: Fonts.size.h5,
        color: Colors.snow,
        textAlign: 'center',
        ...Platform.select({
            ios: {
                paddingTop: Metrics.smallMargin
            }
        })
    }
}

export default ApplicationStyles
