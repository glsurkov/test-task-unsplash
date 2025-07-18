import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index.tsx';

const meta = {
    title: 'shared/buttons/button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Кнопка',
    },
};
