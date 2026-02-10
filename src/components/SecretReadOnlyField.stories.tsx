import type { Meta, StoryObj } from '@storybook/react';
import { SecretReadOnlyField } from './SecretReadOnlyField';

const meta = {
  title: 'Components/SecretReadOnlyField',
  component: SecretReadOnlyField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SecretReadOnlyField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldName: 'Mnemonic',
    loading: false,
    secretValue: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
    canBeShowed: true,
    showCopyButton: true,
  },
};

export const Loading: Story = {
  args: {
    fieldName: 'Mnemonic',
    loading: true,
    secretValue: '',
  },
};

export const WithoutCopyButton: Story = {
  args: {
    fieldName: 'API Key',
    loading: false,
    secretValue: 'sk-1234567890abcdefghijklmnopqrstuvwxyz',
    showCopyButton: false,
  },
};

export const CannotBeShown: Story = {
  args: {
    fieldName: 'Password',
    loading: false,
    secretValue: 'my-secret-password-123',
    canBeShowed: false,
  },
};

export const ShortSecret: Story = {
  args: {
    fieldName: 'Token',
    loading: false,
    secretValue: 'abc123',
  },
};
