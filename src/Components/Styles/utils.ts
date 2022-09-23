import { SpaceProps } from "../../Types"

export const spacing = (space: SpaceProps): string => {
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

export const xyAxis = (total?: string, y?: string, x?: string): string => {
    return total ?? ((y || x) ? `${y ?? '0px'} ${x ?? '0px'}` : '')
}