import PropTypes from 'prop-types';
import {styled, theme} from "/stitches.config.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const CheckboxContainer = styled('span', {
    display: 'inline-flex',
    height: theme.sizes.checkbox,
    width: theme.sizes.checkbox,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
})

const CheckboxInput = styled('input', {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    '&:checked': {
        '+ span': {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
            'svg': {
                opacity: 1
            }
        }
    }})

const CheckboxStyled = styled('span', {
    display: 'flex',
    width: theme.sizes.checkbox,
    height: theme.sizes.checkbox,
    borderWidth: theme.borderWidths.checkbox,
    borderStyle: theme.borderStyles.checkbox,
    borderColor: theme.colors.border,
    borderRadius:  theme.borderRadius.checkbox,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    color: theme.colors.textLight,
    transition: theme.transitions.allFast,
    'svg': {
        opacity: 0,
        transition: theme.transitions.allFast,
    }
})

const Checkbox = () => (
    <CheckboxContainer>
        <CheckboxInput type="checkbox"/>
        <CheckboxStyled>
            <FontAwesomeIcon icon={faCheck} />
        </CheckboxStyled>
    </CheckboxContainer>
)
export default Checkbox;