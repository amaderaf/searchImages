import styled from 'styled-components'
import { DivProps, FlexProps, SpaceProps } from '../../Types';
import { spacing } from './utils';

export const Div = styled.div<DivProps & SpaceProps>`
    width: ${({ width }) => typeof width === 'number' ? `${width}px` : width};
    height: ${({ height }) => typeof height === 'number' ? `${height}px` : height};
    width: ${({ width }) => typeof width === 'number' ? `${width}px` : width};
    height: ${({ height }) => typeof height === 'number' ? `${height}px` : height};
    text-align: ${({ textAlign }) => textAlign};
    ${props => spacing(props)}
`

export const Flex = styled(Div) <FlexProps>`
    display: flex;
    flex-direction: ${({ column }) => column ? 'column' : undefined};
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};
`