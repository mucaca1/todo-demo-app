import type { Meta, StoryObj } from '@storybook/react';
import { RootPage } from './RootPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import { createTheme } from '@mui/material';
import { QueryRows } from '@evolu/common';
import { TodoId } from '../evolu-db/evolu-db';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

const mockThemeValue = {
  mode: 'light' as const,
  setTheme: () => {},
  storeTheme: () => {},
};

// Mock todo rows
const mockTodoRows: QueryRows = [
  {
    id: '1' as TodoId,
    title: 'Sample Todo',
    description: 'This is a sample todo item',
    isCompleted: false,
    isDeleted: 0,
    completeAt: null,
    createdAt: '2024-01-01T00:00:00.000Z',
  },
];

// Mock setting rows
const mockSettingRows: QueryRows = [
  {
    id: '1',
    language: 'en',
    theme: 'light',
    isDeleted: 0,
    createdAt: '2024-01-01T00:00:00.000Z',
  },
];

const meta = {
  title: 'Pages/RootPage',
  component: RootPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={mockThemeValue}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={createTheme()}>
              <Story />
            </ThemeProvider>
          </I18nextProvider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof RootPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [mockTodoRows, mockSettingRows],
  },
};
