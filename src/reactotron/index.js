import { NativeModules, Platform } from 'react-native'
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { reactotronRedux } from 'reactotron-redux'

import Reactotron, {
    asyncStorage,
    openInEditor,
    trackGlobalErrors,
    networking,
} from 'reactotron-react-native'

const config = { name: 'my-app' }

/* eslint-disable-next-line no-undef */
if (Platform.OS === 'ios' && __DEV__) {
    const { scriptURL } = NativeModules.SourceCode
    const [, firstPart] = scriptURL.split('://')
    const [hostPart] = firstPart.split(':')
    config.host = hostPart
}

const reactotron = Reactotron.configure(config)
    .use(reactotronRedux())
    .use(asyncStorage())
    .use(openInEditor())
    .use(trackGlobalErrors())
    .use(networking())
    .useReactNative()

/* eslint-disable-next-line no-undef */
if (__DEV__) {
    reactotron.connect()
    reactotron.clear()

    /* eslint-disable-next-line no-console */
    console.tron = reactotron
}

export default reactotron
