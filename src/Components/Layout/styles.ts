import styled from 'styled-components'

type SpaceProps = {
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

function spacing(space: SpaceProps) {
    return `
        padding: ${xyAxis(space.p, space.py, space.px)};
        padding-top: ${space.pt ?? ''};
        padding-right: ${space.pr ?? ''};
        padding-bottom: ${space.pb ?? ''};
        padding-left: ${space.pl ?? ''};
        margin: ${xyAxis(space.m, space.my, space.mx)};
        margin-top: ${space.mt ?? ''};
        margin-right: ${space.mr ?? ''};
        margin-bottom: ${space.mb ?? ''};
        margin-left: ${space.ml ?? ''};
    `
}

function xyAxis(total?: string, y?: string, x?: string) {
    return total ?? ((y || x) ? `${y ?? '0px'} ${x ?? '0px'}` : '')
}

type DivProps = {
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    textAlign?: 'center' | 'end' | 'start' | 'left' | 'right'
}

export const Div = styled.div<DivProps & SpaceProps>`
    width: ${({ width }) => typeof width === 'number' ? `${width}px` : width};
    height: ${({ height }) => typeof height === 'number' ? `${height}px` : height};
    width: ${({ width }) => typeof width === 'number' ? `${width}px` : width};
    height: ${({ height }) => typeof height === 'number' ? `${height}px` : height};
    text-align: ${({ textAlign }) => textAlign};
    ${props => spacing(props)}
`

type FlexProps = {
    column?: boolean;
    align?: 'center' | 'flex-start' | 'flex-end'
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between'
}

export const Flex = styled(Div) <FlexProps>`
    display: flex;
    flex-direction: ${({ column }) => column ? 'column' : undefined};
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};
`