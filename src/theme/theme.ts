/* eslint-disable @typescript-eslint/naming-convention */
import { Dimensions } from 'react-native'
 
const { width, height } = Dimensions.get('window')

const defaultProperties = {
    fonts: {
        regular: 'Lato-Regular',
        italic: 'Lato-Italic',
        bold: 'Lato-Bold',
    },
    sizes: {
        // global sizes
        base: 8,
        font: 14,
        radius: 12,
        padding: 24,
        margin: 20,

        // font sizes
        largeTitle: 40,
        h1: 30,
        h2: 22,
        h3: 16,
        h4: 14,
        h5: 12,
        body1: 30,
        body2: 22,
        body3: 18,
        body4: 14,
        body5: 12,

        // app dimensions
        width,
        height,
    },
}

const lightThemeColors = {
    primary: '#7C0A73',
    primary_light: '#A473A0',
    primary_dark: '#64035C',

    secondary: '#078EC8',
    secondary_light: '#00B2FF',
    secondary_dark: '#016D9B',

    default: '#343434',

    success: '#12A454',
    seccess_light: 'rgba(18, 164, 84, 0.5)',

    attention: '#d6014f',
    attention_light: '#ff2a71',
    attention_dark: '#ac033c',

    shape: '#F6F6F6',
    shape_dark: '#EEF0F4',

    title: '#252525',
    text: '#000000',
    text_light: '#8D8D8D',
    background: '#FFFFFF',
    background_dark: '#FeFeFe',

    header: '#FFFFFF',
    footer: '#FFFFFF',
    round_photo_border: '#fff',

    input_border: '#e1e1e1',
}

const darkThemeColors = {
    primary: '#bb86fc',
    primary_light: '#9e55fc',
    primary_dark: '#8f55d7',

    secondary: '#078EC8',
    secondary_light: '#00B2FF',
    secondary_dark: '#016D9B',

    default: '#FFFFFF',

    success: '#12A454',
    seccess_light: 'rgba(18, 164, 84, 0.5)',

    attention: '#d6014f',
    attention_light: '#ff2a71',
    attention_dark: '#ac033c',

    shape: '#292929',
    shape_dark: '#222',

    title: '#FFF',
    text: '#F6F6F6',
    text_light: '#F1F1F1',
    background: '#121212',
    background_dark: '#000',

    header: '#292929',
    footer: '#292929',
    round_photo_border: '#e1e1e1',

    input_border: '#e1e1e1',
}

const defaultTheme = {
    id: 'light',
    barStyle: 'dark-content',
    colors: {
        ...lightThemeColors,
    },
    ...defaultProperties,
}

const lightTheme = {
    id: 'light',
    barStyle: 'dark-content',
    colors: {
        ...lightThemeColors,
    },
    ...defaultProperties,
}

const darkTheme = {
    id: 'dark',
    barStyle: 'light-content',
    colors: {
        ...darkThemeColors,
    },
    ...defaultProperties,
}

export const defaultThemeShadow = `
    shadow-color: #000;
    shadow-offset: 0 1px;
    shadow-opacity: 0.2;
    shadow-radius: 1.4px;
    elevation: 2;
`

export type TTheme = typeof defaultTheme

export const LightTheme: TTheme = {
    ...lightTheme,
}

export const DarkTheme: TTheme = {
    ...darkTheme,
}
