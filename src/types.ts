export type setCard = `${Num}${Shape}${Color}${Fill}`

export enum Shape {
    Oval = 'o',
    Worm = 'w',
    Rombus = 'r',
}

export type Num = '1' | '2' | '3'

export enum Color {
    Red = 'r',
    Purple = 'p',
    Green = 'g'
}

export enum Fill {
    Full = 'f',
    Empty = 'e',
    Striped = 's'
}

export const colorMap:Record<Color, string> = {
    r: '#ce0000',
    p: '#60028c', //TODO: make new color
    g: '#00c400'
}

function correctSet(set1:setCard, set2:setCard, set3:setCard) {
    for (let i = 0; i < 4; i++) {
        if ((set1[i] == set2[i] && set1[i] != set3[i]) || 
            (set2[i] == set3[i] && set2[i] != set1[i]) ||
            (set3[i] == set1[i] && set3[i] != set2[i])) return false
    }
}

