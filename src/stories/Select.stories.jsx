import Select from "../Select";
import {setGlobalStyles} from "../helpers";

export default  {
    title: 'Inputs/Select',
    component: Select
}

const Template = (args) => {
    setGlobalStyles();

    return (
            <>
                <Select placeholder="Select Box"/>
            </>
    )
}

export const Primary = Template.bind({});