import React from 'react';

import {globalCss} from "../../stitches.config";
import Checkbox from "../Checkbox";

export default {
    title: 'Form/Checkbox',
    component: Checkbox
}

const globalStyles = globalCss({
    html: {
        fontSize: '16px',
    },
    "*": {
        boxSizing: 'border-box'
    }
});


const Template = (args) => {
    globalStyles();
    return (
        <Checkbox />
    )
};

export const Primary = Template.bind({});