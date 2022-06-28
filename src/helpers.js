import {globalCss, theme} from "../stitches.config";

const setGlobalStyles = globalCss({
    html: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.body
    },
    "*": {
        boxSizing: 'border-box'
    }
});

export {setGlobalStyles}