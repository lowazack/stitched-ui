import {createStitches} from '@stitches/react';

const defaultSpace = 10;

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
    utils
} = createStitches({
    theme: {
        colors: {
            primary: '#2d98da',
            textLight: '#ffffff',
        },
        fontSizes: {
            n1: '0.833rem',
            reg: '1rem',
            p1: '1.2rem'
        },
        fontWeights: {},
        fonts: {},
        transitions: {},
        shadows: {},
        space: {
            md: `${defaultSpace * 0.5}px`,
            reg: `${defaultSpace}px`,
            lg: `${ defaultSpace * 2 }px`,
            xl: `${ defaultSpace * 4 }px`,
        },
        borderRadius: {
            button: 0
        },
    },
    media: {},
    utils: {}
})