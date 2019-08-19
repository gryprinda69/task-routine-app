import {NativeModules} from 'react-native'
import Config from '../Config/DebugConfig'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (Config.useReactotron) {
    const scriptURL = NativeModules.SourceCode.scriptURL
    const scriptHostname = scriptURL.split('://')[1].split(':')[0]
    // https://github.com/infinitered/reactotron for more options!
    Reactotron
        .configure({ name: 'App', host: scriptHostname })
        .useReactNative()
        .use(reduxPlugin({
            onRestore: ({nav, state}) => ({ ...Immutable(state), nav })
        }))
        .use(sagaPlugin())
        .connect()

    // Let's clear Reactotron on every time we load the app
    Reactotron.clear()

    // Totally hacky, but this allows you to not both importing reactotron-react-native
    // on every file.  This is just DEV mode, so no big deal.
    console.tron = Reactotron
} else {
    // a mock version should you decide to leave console.tron in your codebase
    console.tron = {
        log: () => false,
        warn: () => false,
        error: () => false,
        display: () => false,
        image: () => false
    }
}

