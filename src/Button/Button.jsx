import PropTypes from 'prop-types';
import {styled, theme} from "/stitches.config.js";

const Button = styled('button', {
    borderRadius: theme.borderRadius.button,
    backgroundColor: theme.colors.primary,
    border: 'none',
    fontSize: theme.fontSizes.reg,
    color: theme.colors.textLight,
    padding: theme.space.md,

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
    }
})


Button.propTypes = {
    size: PropTypes.oneOf(['sm', 'reg', 'lg']),
};

Button.defaultProps = {
    size: 'reg',
};

export {Button}
