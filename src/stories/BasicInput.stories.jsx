import {globalCss, styled, theme} from "../../stitches.config";
import BasicInput from "../BasicInput";

export default {
    title: 'Form/BasicInput',
    component: BasicInput
}


const globalStyles = globalCss({
    html: {
        fontSize: '16px',
    },
    "*": {
        boxSizing: 'border-box'
    }
});

const InputCont = styled('div',{
    backgroundColor: theme.colors.offBodyDark,
    padding: theme.space.reg,
    maxWidth: 500
})


const Template = (args) => {
    globalStyles();
    return (
        <InputCont>
            <BasicInput placeholder="Basic Input"/>
        </InputCont>

    )
};

export const Primary = Template.bind({});