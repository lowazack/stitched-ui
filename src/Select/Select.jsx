import {styled, theme} from "../../stitches.config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function Select({
                                   placeholder = 'Placeholder'
}) {

    const SelectContainer = styled('div', {
        display: 'inline-flex',
        fontSize: theme.fontSizes.reg,
        borderWidth: theme.borderWidths.input,
        borderStyle: theme.borderStyles.input,
        alignItems: 'center',
        padding: theme.space.sm,
        position: 'relative',
        cursor: 'pointer',
        svg: {
            fontSize: '0.7rem',
            marginLeft: theme.space.sm,

        }
    })

    const SelectInput = styled('input', {})

    const MenuContainer = styled('div', {
        position: 'absolute',
        top: 'calc(100% + 2px)',
        backgroundColor: theme.colors.offBodyDark,
        left: -2,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows.reg
    })

    const MenuButton = styled('button', {
        backgroundColor: 'transparent',
        border: 0,
        display: 'flex',
        fontSize: theme.fontSizes.reg,
        py: theme.space.sm,
        px: theme.space.md,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: theme.transitions.allFast,
        '&:hover': {
            backgroundColor: '#bdc7ca',
        }
    })

    const [open, setOpen] = useState(false)

    const [value, setValue] = useState(null)

    return (
        <SelectContainer>
            <label onClick={() => setOpen(!open)}>
                {value? value : placeholder}
                <FontAwesomeIcon icon={open? faCaretUp: faCaretDown}/>
                <SelectInput type="hidden"/>
            </label>

            {open? <MenuContainer>
                <MenuButton>Value</MenuButton>
            </MenuContainer> : null}
        </SelectContainer>
    )
}