import {styled, theme} from "../../stitches.config";

export default function Toast(){
    const ToastContainer = styled('div', {
        position: 'fixed',
        right: theme.space.reg,
        bottom: theme.space.reg,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.space.sm,
    })
    const ToastBox = styled('div', {
        backgroundColor: theme.colors.light,
        padding: theme.space.lg,
        boxShadow: theme.shadows.reg,
        borderWidth: theme.borderWidths.toastBox,
        borderStyle: theme.borderStyles.toastBox,
        borderColor: theme.colors.primary,
        width: theme.sizes.toastWidth,

    })
    const ToastHead = styled( 'h3', {
        margin: 0,
        fontSize: theme.fontSizes.p1,
        marginBottom: theme.space.sm
    })
    const ToastMessage = styled('p', {
        margin: 0,
    })
    return (
        <ToastContainer>
            <ToastBox>
                <ToastHead>Head Here</ToastHead>
                <ToastMessage>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </ToastMessage>
            </ToastBox>
        </ToastContainer>
    )
}