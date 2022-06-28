import {styled, theme} from "../../stitches.config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";


const Badge = ({
                   icon = faBell,
                   value = Number,
                   limit = 99
               }) => {

    const BadgeContainer = styled('span', {
        color: theme.colors.text,
        fontSize: theme.sizes.badgeIconSize,
        // fontFamily: theme.fonts.body,
        display: 'inline-flex',
        position: 'relative',

    })

    const NumberContainer = styled('span', {
        backgroundColor: theme.colors.primary,
        fontSize: theme.fontSizes.n2,
        color: theme.colors.textLight,
        borderRadius: 99999,
        padding: '2px',
        lineHeight: 1,
        position: 'absolute',
        top: -3,
        right: -3,
    })

    function formattedValue() {

        return (value <= limit) ? value : `${limit}+`
    }

    return (
        <BadgeContainer>
            {(value > 0) ? <NumberContainer>
                {formattedValue()}
            </NumberContainer> : null}
            <FontAwesomeIcon icon={icon}/>
        </BadgeContainer>
    )
}

export default Badge;