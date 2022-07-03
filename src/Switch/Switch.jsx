import {styled} from "@stitches/react";
import {theme} from "../../stitches.config";
import {lightenDarkenColor} from "../styleHelpers";
import {useState} from "react";

export default function Switch(){

    const [active, setActive] = useState(true)

    const Container = styled('div', {
        display: 'inline-flex'
    });
    const Button = styled('button', {
        position: 'relative',
        height: 18,
        width: 45,
        borderRadius: 99999,
        border: 'none',
        backgroundColor: theme.colors.neutral,
        cursor: 'pointer',
    });
    const Tab = styled('span', {
        position: 'absolute',
        backgroundColor: active? theme.colors.primary: theme.colors.neutral,
        borderColor: lightenDarkenColor(active?theme.colors.primary.value: theme.colors.neutral.value, -25),
        borderWidth: 4,
        borderStyle: 'solid',
        borderRadius: 999999,
        width: 25,
        height: 25,
        left: active? 20:0,
        top: '50%',
        transform: `translateY(-50%)`,
        boxShadow: theme.shadows.sm,
        transition: theme.transitions.allFast,
    });
    const Input = styled('input', {
        position: 'absolute',
        left: 0,
        top: 0,
        width:1,
        height: 1,
        opacity: 0,
    })

    return (
        <Container>
            <Button type="button" onClick={()=> setActive(!active)}>
                <Tab/>
                <Input type="checkbox" checked={active}/>
            </Button>
        </Container>
    )
}