import {styled, theme} from "../../stitches.config";

const BasicInput = styled('input',{
    padding: theme.space.md,
    fontSize: theme.fontSizes.reg,
    borderRadius: theme.borderRadius.input,
    borderStyle: theme.borderStyles.input,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.body,
    transition: theme.transitions.allFast,

    maxWidth: 'unset',
    display: 'block',
    width: '100%',
    outline: 'none',
    '&:focus': {
        borderColor: theme.colors.primary,
    }
})

export default BasicInput;