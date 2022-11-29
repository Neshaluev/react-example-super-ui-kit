export interface DOMProps {
    style?: React.CSSProperties;
    className?: string;
    'data-testid'?: string;
}

export interface ControlProps
    extends Pick<
        React.InputHTMLAttributes<HTMLInputElement>,
        | 'name'
        | 'value'
        | 'id'
        | 'checked'
        | 'onChange'
        | 'onFocus'
        | 'onBlur'
        | 'disabled'
        | 'defaultChecked'
    > {
    indeterminate?: boolean;
    onUpdate?: (checked: boolean) => void;
    controlProps?: Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        | 'name'
        | 'value'
        | 'id'
        | 'onFocus'
        | 'onBlur'
        | 'disabled'
        | 'type'
        | 'onChange'
        | 'defaultChecked'
        | 'checked'
        | 'aria-checked'
    >;
    controlRef?: React.Ref<HTMLInputElement>;
}
