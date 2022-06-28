import Chip from "../Chip";
import {setGlobalStyles} from "../helpers";

export default {
    title: 'Display/Chip',
    component: Chip
}

const Template = (args) => {
    setGlobalStyles();

    return (
        <Chip label="Chip Fill"/>
    )
}

export const Primary = Template.bind({});