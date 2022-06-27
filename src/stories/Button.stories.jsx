import React from 'react';

import Button from '../Button';
import {globalCss} from "../../stitches.config";

export default {
    title: 'Button',
    component: Button,
    argTypes : {
        size: {
            control: {type: 'radio'},
            options: ['sm', 'reg', 'lg']
        }
    }
};

const globalStyles = globalCss({
    html: {
        fontSize: '16px',
    }
});

const Template = (args) => {
    globalStyles();
    return <Button {...args}>Button</Button>
};

export const Primary = Template.bind({});
Primary.args = {
};





