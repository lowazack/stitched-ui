import PropTypes from 'prop-types';
import {styled, theme} from "/stitches.config.js";

const Button = styled('button', {
    borderRadius: theme.borderRadius.button,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: theme.borderWidths.button,
    borderStyle: theme.borderStyles.button,
    fontSize: theme.fontSizes.reg,
    color: theme.colors.textLight,
    padding: theme.space.md,
    px: theme.space.lg,
    fontWeight: theme.fontWeights.buttonWeight,
    transition: theme.transitions.allFast,
    cursor: 'pointer',
    '&:active': {
        transform: 'scale(0.95)',
    },
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.colors.primary
    },

    variants: {
        size: {
            sm: {
                fontSize: theme.fontSizes.n1,
            },
            reg: {
                fontSize: theme.fontSizes.reg,
            },
            lg: {
                fontSize: theme.fontSizes.p1,
            },
        }
    },
})

Button.propTypes = {
    size: PropTypes.oneOf(['sm', 'reg', 'lg']),
};

Button.defaultProps = {
    size: 'reg',
};

export {Button}
