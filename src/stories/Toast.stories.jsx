import Toast from "../Toast";
import {setGlobalStyles} from "../helpers";
import {styled, theme} from "../../stitches.config";

export default {
    title: 'Display/Toast',
    component: Toast
}

const Template = (args) => {
    setGlobalStyles();

    const FlexGrid = styled('div', {
        display: 'flex',
        gap: theme.space.md,
        height: 300
    })

    return (
        <>
            <FlexGrid>
            </FlexGrid>
            <Toast/>
        </>
    )
}

export const Primary = Template.bind({});