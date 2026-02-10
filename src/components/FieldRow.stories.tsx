import type { Meta, StoryObj } from '@storybook/react';
import { SettingRow } from './FieldRow';
import { TextField } from '@mui/material';

const meta = {
  title: 'Components/FieldRow',
  component: SettingRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SettingRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Example Label',
    children: <TextField placeholder="Enter value..." />,
  },
};

export const WithInput: Story = {
  args: {
    label: 'Username',
    children: <TextField defaultValue="john.doe" />,
  },
};

export const WithSelect: Story = {
  args: {
    label: 'Language',
    children: (
      <TextField select value="en">
        <option value="en">English</option>
        <option value="sk">Slovak</option>
      </TextField>
    ),
  },
};
