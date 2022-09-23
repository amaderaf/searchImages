export type SpaceProps = {
    p?: string;
    px?: string;
    py?: string;
    pt?: string;
    pr?: string;
    pb?: string;
    pl?: string;
    m?: string;
    mx?: string;
    my?: string;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
}

export type DivProps = {
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    textAlign?: 'center' | 'end' | 'start' | 'left' | 'right'
}

export type FlexProps = {
    column?: boolean;
    align?: 'center' | 'flex-start' | 'flex-end'
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between'
}