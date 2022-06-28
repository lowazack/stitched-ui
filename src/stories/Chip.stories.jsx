import Chip from "../Chip";
import {setGlobalStyles} from "../helpers";
import {styled, theme} from "../../stitches.config";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Display/Chip',
    component: Chip
}

const Template = (args) => {
    setGlobalStyles();

    const FlexGrid = styled('div', {
        display: 'flex',
        gap: theme.space.md
    })

    return (
        <FlexGrid>
            <Chip label="Chip Fill" />
            <Chip label="Chip Button" onClick={()=> {alert('Chip Button')}} icon={faTimes}/>
            <Chip label="Chip Button" href={'https://www.google.com'}/>
        </FlexGrid>

    )
}

export const Primary = Template.bind({});