import classNames from "classnames";
import { cloneElement, ReactElement } from "react";
import styled from "styled-components";

const CloneChild = ({
  className,
  children,
}: {
  className?: string;
  children: ReactElement;
}) =>
  cloneElement(children, {
    className: classNames(children.props.className, className),
  });

export const spacings = {
  "xx-small": "4px",
  "x-small": "8px",
  "0.5x-small": "12px",
  small: "16px",
  medium: "24px",
  large: "32px",
  "x-large": "48px",
  "xx-large": "56px",
};
export type SpacingType = keyof typeof spacings;

interface SpacingProps {
  top?: SpacingType;
  right?: SpacingType;
  bottom?: SpacingType;
  left?: SpacingType;
}
const Spacing = styled(CloneChild)<SpacingProps>`
  && {
    ${(props) => props.top && `margin-top: ${spacings[props.top]};`}
    ${(props) => props.right && `margin-right: ${spacings[props.right]};`}
          ${(props) =>
      props.bottom && `margin-bottom: ${spacings[props.bottom]};`}
          ${(props) => props.left && `margin-left: ${spacings[props.left]};`}
  }
`;

export default Spacing;
