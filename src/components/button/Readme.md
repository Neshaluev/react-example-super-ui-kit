# Button

## Usage examples

### Plain button

```tsx
import React from 'react';
import {Button} from 'react-example-ui-kit';

const button = <Button>Action</Button>;
```

## Props

```tsx
type ButtonColor = 'base' | 'primary' | 'success' | 'error';
type ButtonSize = 's' | 'm' | 'l' | 'xl';
type ButtonWidth = undefined | 'auto' | 'max';

interface ButtonProps extends PropsWithChildren, DOMProps {
  size?: ButtonSize;
  width?: ButtonWidth;
  color?: ButtonColor;
  icon?: React.ReactNode;
  onlyIcon?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
  outline?: boolean;
  className?: string;
  full?: boolean;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
```
