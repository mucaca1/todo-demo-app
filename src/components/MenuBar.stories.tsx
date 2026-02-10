import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

const meta = {
  title: 'Components/MenuBar',
  component: MenuBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
