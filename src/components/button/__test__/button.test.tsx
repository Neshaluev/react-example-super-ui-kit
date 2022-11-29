import React, {RefObject} from 'react';
import {render, screen} from '@testing-library/react';
import {ButtonColor, Button, ButtonWidth} from '../button';
import {Settings} from '../../icons';
import userEvent from '@testing-library/user-event';

const qa = 'button-component';
const qaIcon = 'icon-coponent';

describe('Button', () => {
    test('should render button by default', () => {
        render(<Button />);

        const button = screen.getByRole('button');
        expect(button).toBeVisible();
    });

    test.each(new Array<ButtonColor>('base', 'primary', 'error', 'success'))(
        'should render with colors',
        (color) => {
            render(<Button color={color} data-testid={qa} />);

            const button = screen.getByTestId(qa);

            expect(button).toHaveClass(`${color}`);
        },
    );

    test.each(new Array<ButtonWidth>('max', 'auto'))('should render with colors', (width) => {
        render(<Button width={width} data-testid={qa} />);

        const button = screen.getByTestId(qa);

        //   screen.debug();

        expect(button).toHaveClass(`width_${width}`);
    });

    test('should render icon', () => {
        render(
            <Button
                icon={<Settings data-testid={qaIcon} />}
                onlyIcon={true}
                data-testid={qa}
            ></Button>,
        );

        const button = screen.getByTestId(qa);
        const iconComponent = screen.getByTestId(qaIcon);

        expect(iconComponent).toBeVisible();
        expect(button).toContainElement(iconComponent);
    });

    test('should render element with props disabled=true', () => {
        render(<Button disabled={true} />);
        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });

    test('should render element with props disabled=false', () => {
        render(<Button disabled={false} />);
        const button = screen.getByRole('button');

        expect(button).not.toBeDisabled();
    });

    test('should render recived text', () => {
        const content = 'Lorem ipsum.';

        render(<Button>{content}</Button>);
        const text = screen.getByText(content);

        expect(text).toBeVisible();
    });

    test('should render element with added classNames', () => {
        const className = 'my-class';

        render(<Button className={className} data-testid={qa} />);
        const button = screen.getByTestId(qa);

        expect(button).toHaveClass(className);
    });

    test('should render element with  added styles', () => {
        const style = {color: 'red'};

        render(<Button style={style} data-testid={qa} />);
        const button = screen.getByTestId(qa);

        expect(button).toHaveStyle(style);
    });

    test('should return a reference to the component', () => {
        const ref = React.createRef<HTMLButtonElement>();

        render(<Button ref={ref as RefObject<HTMLButtonElement> | undefined} data-testid={qa} />);
        const button = screen.getByTestId(qa);

        expect(ref.current).toBe(button);
    });

    test('call onClick', async () => {
        const user = userEvent.setup();
        const handleOnClick = jest.fn();
        render(<Button onClick={handleOnClick} />);

        const button = screen.getByRole('button');

        await user.click(button);
        expect(handleOnClick).toHaveBeenCalledTimes(1);
    });
});
