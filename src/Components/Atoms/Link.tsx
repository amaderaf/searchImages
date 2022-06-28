import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

const LinkStyledComp = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default function LinkStyled(props: LinkProps): React.ReactElement {
  return <LinkStyledComp {...props}>{props.children}</LinkStyledComp>;
}
