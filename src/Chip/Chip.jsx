import {styled, theme} from "../../stitches.config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Chip({label, icon, href, onClick}){

    function getElementType(){
        if (!href && !onClick){
            return 'span'
        } else if (!href && onClick){
            return 'button'
        } else {
            return 'a'
        }
    }

    const ChipComponent = styled(getElementType(), {
        backgroundColor: theme.colors.primary,
        color: theme.colors.textLight,
        px: theme.space.reg,
        py: theme.space.sm,
        borderRadius: 10000,
        border: 0,
        textDecoration: 'none',
        cursor: (href || onClick)? 'pointer':'unset',
        svg: {
            ml: theme.space.md
        },
    })

    return (
        <ChipComponent href={href} onClick={onClick}>
            {label}
            {icon? <FontAwesomeIcon icon={icon}/>:null}
        </ChipComponent>
    )
}