import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputText } from './index.tsx';

const meta = {
    title: 'shared/inputs/input-text',
    component: InputText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story, { args }) => {
            const [value, setValue] = useState('');

            return (
                <Story
                    args={{
                        value,
                        onChange: (ev) => setValue(ev.target.value),
                        ...args,
                    }}
                />
            );
        },
    ],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Введите текст',
    },
};
