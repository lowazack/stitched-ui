import Badge from "../Badge";
import {setGlobalStyles} from "../helpers";

export default {
    title: 'Display/Badge',
    component: Badge
}


const Template = (args) => {
    setGlobalStyles();
    return (
        <>
            <Badge value={44}/>
        </>
    )
};

export const Primary = Template.bind({});