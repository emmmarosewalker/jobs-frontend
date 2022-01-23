import React, { ChangeEvent, ComponentProps } from "react";
import styled from "styled-components";
import InputAppearance from "../mixins/InputAppearance";
import Tooltip from "../Tooltip";

interface InputProps {
  hasError?: boolean;
  hasIcon?: boolean;
  tooltip?: string;
}

interface IconProps {
  position?: string;
}

const InputWrapper = styled.div<InputProps>`
  position: relative;
`;

const Icon = styled.div<IconProps>`
  position: absolute;
  top: 0.75rem;

  ${(props) =>
    props.position === "right"
      ? `
    right: 1rem;
  `
      : `
    left: 1rem;
  `}
`;

const Input = styled.input<InputProps>`
  ${InputAppearance};
  position: relative;

  ${(props) =>
    props.hasIcon &&
    `
    padding-left: 3rem;
  `}
`;

function TooltipIcon() {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16A8 8 0 108 0a8 8 0 000 16z" fill="#CFD7DF" />
      <path
        d="M6.06 6a2 2 0 013.89.67c0 1.33-2 2-2 2M8 11.33h0"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#F27474" />
        <path
          d="M8 4v4M8 11.7h0"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface OwnProps {
  hasError?: boolean;
  IconComponent?: any;
  tooltip?: string;
  onChange?: (text: string) => void;
}

export default React.forwardRef(
  (props: OwnProps & Omit<ComponentProps<"input">, "onChange">, ref?: any) => {
    const { hasError, IconComponent, tooltip, onChange, ...rest } = props;
    return (
      <InputWrapper hasError={!!hasError}>
        <Input
          hasError={!!hasError}
          hasIcon={!!IconComponent}
          ref={ref}
          {...rest}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(e.target.value)
          }
        />
        {!!tooltip && (
          <Icon position="right">
            <Tooltip.Trigger>
              <TooltipIcon />
              <Tooltip.Message>{tooltip}</Tooltip.Message>
            </Tooltip.Trigger>
          </Icon>
        )}
        {!!IconComponent && (
          <Icon>
            <IconComponent />
          </Icon>
        )}
        {!!hasError && (
          <Icon position="right">
            <AlertIcon />
          </Icon>
        )}
      </InputWrapper>
    );
  }
);
