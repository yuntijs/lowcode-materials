import { Button as OriginalButton, ButtonProps as OriginalButtonProps } from '@yuntijs/ui';
import React, { useMemo } from 'react';

export interface ButtonProps extends OriginalButtonProps {
  __designMode?: string;
}

export const Button: React.FC<ButtonProps> = ({ __designMode, ...props }) => {
  const designProps = useMemo(() => {
    return {
      href: __designMode === 'design' ? undefined : props.href,
    };
  }, [__designMode, props.href]);

  if (props.disabled) {
    return <OriginalButton {...props} {...designProps} />;
  }
  return <OriginalButton {...props} {...designProps} />;
};
