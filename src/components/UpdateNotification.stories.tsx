import type { Meta, StoryObj } from '@storybook/react';
import { UpdateNotification } from './UpdateNotification';

const meta = {
  title: 'Components/UpdateNotification',
  component: UpdateNotification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UpdateNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

// Note: UpdateNotification only renders in Electron environment (window.electron)
// In Storybook (browser), it returns null. This story shows the component exists
// but won't display anything useful outside of Electron.

export const Default: Story = {
  name: 'Not Available in Browser',
  render: () => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>
        <strong>UpdateNotification</strong> only renders in Electron environment
        where <code>window.electron</code> is available.
      </p>
      <p style={{ color: '#666', marginTop: '10px' }}>
        In a browser, this component returns <code>null</code>.
      </p>
    </div>
  ),
};
