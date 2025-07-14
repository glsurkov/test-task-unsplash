import type { Meta, StoryObj } from '@storybook/react';

import { ScaledByHeight } from './index.tsx';

const meta = {
    title: 'shared/misc/scaled-by-height',
    component: ScaledByHeight,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ScaledByHeight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <div
                style={{
                    background: 'yellow',
                    width: 20,
                    height: 20,
                }}
            >
                Иконка
            </div>
        ),
        defaultHeight: 20,
        defaultWidth: 20,
        requiredHeight: 40,
    },
};
