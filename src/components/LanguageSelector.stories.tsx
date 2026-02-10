import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector, Language } from './LanguageSelector';

const mockOnChange = () => {};

const meta = {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {
  args: {
    value: 'en' as Language,
    onChange: mockOnChange,
  },
};

export const Slovak: Story = {
  args: {
    value: 'sk' as Language,
    onChange: mockOnChange,
  },
};
