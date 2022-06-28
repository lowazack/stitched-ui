import Badge from "../Badge";
import {setGlobalStyles} from "../helpers";
import {styled, theme} from "../../stitches.config";

export default {
    title: 'Display/Badge',
    component: Badge
}

const Template = (args) => {
    setGlobalStyles();

    const FlexGrid = styled('div',{
        display: 'flex',
        gap: theme.space.reg
    })

    return (
        <FlexGrid>
            <Badge value={44}/>
            <Badge value={900}/>
            <Badge value={111} limit={999}/>
        </FlexGrid>
    )
};

export const Primary = Template.bind({});