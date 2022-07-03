import {styled} from "@stitches/react";
import {theme} from "../../stitches.config";

export default function Avatar({image}){
    const Container = styled('div', {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: 999999,
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    })

    const Image = styled('img', {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectPosition: 'center center',
        objectFit: 'cover'
    })

    const Initials = styled('span', {})

    return (
        <Container>
            {image? <Image src={image}/> : null}

            <Initials>JL</Initials>
        </Container>
    )
}