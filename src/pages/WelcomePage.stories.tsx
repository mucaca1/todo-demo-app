import type { Meta, StoryObj } from '@storybook/react';
import { WelcomePage } from './WelcomePage';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../context/ThemeContext';
import i18n from '../i18n/i18n';
import { createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const meta = {
  title: 'Pages/WelcomePage',
  component: WelcomePage,
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
} satisfies Meta<typeof WelcomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ ...mockThemeValue, mode: 'dark' }}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
              <Story />
            </ThemeProvider>
          </I18nextProvider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    ),
  ],
};
