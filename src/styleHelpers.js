function paddingX(value){
    return {
        paddingLeft: value,
        paddingRight: value,
    }
}

function paddingY(value){
    return {
        paddingTop: value,
        paddingBottom: value,
    }
}

function marginLeft(value, side){
    return {
        marginLeft: value,
    }
}

export {paddingX, paddingY, marginLeft}