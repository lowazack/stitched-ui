import Switch from "../Switch";
import {setGlobalStyles} from "../helpers";

export default  {
    title: 'Inputs/Switch',
    component: Switch
}

const Template = (args) => {
    setGlobalStyles();

    return (
        <>
            <Switch/>
        </>
    )
}

export const Primary = Template.bind({});