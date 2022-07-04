import Switch from "../Switch";
import {setGlobalStyles} from "../helpers";
import Avatar from "../Avatar";
import {styled, theme} from "../../stitches.config";

export default  {
    title: 'Display/Avatar',
    component: Avatar,
}

const Template = (args) => {
    setGlobalStyles();

    const FlexGrid = styled('div', {
        display: 'flex',
        gap: theme.space.md,
        color: '#ffffff',
        fontSize: '25px'
    })

    return (
        <FlexGrid>
            <Avatar image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"/>
            <Avatar initials="UI"/>
        </FlexGrid>
    )
}

export const Primary = Template.bind({});