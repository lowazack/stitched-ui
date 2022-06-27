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
            body: '#f6f9f8',
            offBodyDark: '#e1e9ec',
            offBodyLight: '#ffffff',
            border: '#808e9b',
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
            allFast: 'all 200ms ease-in-out'
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
            button: 0,
            checkbox: 0,
            input: 0,
        },
        borderWidths: {
            button: '2px',
            checkbox: '2px',
            input: '2px',
        },
        borderStyles: {
            button: 'solid',
            checkbox: 'solid',
            input: 'solid',
        },
        sizes: {
            checkbox: '20px'
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