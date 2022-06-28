import {styled, theme} from "../../stitches.config";

export default function Chip({
                                 label
}){
    const ChipComponent = styled('span', {
        backgroundColor: theme.colors.primary,
        color: theme.colors.textLight,
        px: theme.space.reg,
        py: theme.space.sm,
        borderRadius: 10000
    })

    return (
        <ChipComponent>
            {label}
        </ChipComponent>
    )
}