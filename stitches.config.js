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
        fontWeights: {
            buttonWeight: 600
        },
        fonts: {},
        transitions: {
            allFast: 'all 100ms ease-in-out'
        },
        shadows: {},
        space: {
            sm: `${defaultSpace * 0.5}px`,
            md: `${defaultSpace * 0.75}px`,
            reg: `${defaultSpace}px`,
            lg: `${ defaultSpace * 2 }px`,
            xl: `${ defaultSpace * 4 }px`,
        },
        borderRadius: {
            button: 0
        },
        borderWidths: {
            button: 4
        },
        borderStyles: {
            button: 'solid'
        }
    },
    media: {},
    utils: {
        px: value => {
            return {
                paddingLeft: value,
                paddingRight: value,
            }
        }
    }
})