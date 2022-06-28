import Button from '../Button';
import {globalCss} from "../../stitches.config";

export default {
    title: 'Inputs/Button',
    component: Button,
    argTypes : {
        size: {
            control: {type: 'radio'},
            options: ['sm', 'reg', 'lg']
        }
    }
};


const Template = (args) => {
    setGlobalStyles();
    return <Button {...args}>Button</Button>
};

export const Primary = Template.bind({});






