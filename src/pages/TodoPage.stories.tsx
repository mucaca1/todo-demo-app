import type { Meta, StoryObj } from '@storybook/react';
import TodoPage from './TodoPage';
import { QueryRows } from '@evolu/common';
import { TodoId } from '../evolu-db/evolu-db';

// Mock todo rows
const mockTodoRows: QueryRows = [
  {
    id: '1' as TodoId,
    title: 'Learn Storybook',
    description: 'Create stories for all components',
    isCompleted: false,
    isDeleted: 0,
    completeAt: null,
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: '2' as TodoId,
    title: 'Build React app',
    description: 'Create a todo application with React',
    isCompleted: false,
    isDeleted: 0,
    completeAt: null,
    createdAt: '2024-01-02T00:00:00.000Z',
  },
  {
    id: '3' as TodoId,
    title: 'Write tests',
    description: 'Add unit and integration tests',
    isCompleted: true,
    isDeleted: 0,
    completeAt: '2024-01-03T00:00:00.000Z',
    createdAt: '2024-01-03T00:00:00.000Z',
  },
  {
    id: '4' as TodoId,
    title: 'Deploy to production',
    description: 'Deploy the application',
    isCompleted: true,
    isDeleted: 0,
    completeAt: '2024-01-04T00:00:00.000Z',
    createdAt: '2024-01-04T00:00:00.000Z',
  },
];

const meta = {
  title: 'Pages/TodoPage',
  component: TodoPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TodoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTodos: Story = {
  args: {
    todoRows: mockTodoRows,
  },
};

export const Empty: Story = {
  args: {
    todoRows: [],
  },
};

export const OnlyActive: Story = {
  args: {
    todoRows: [
      {
        id: '1' as TodoId,
        title: 'Active task 1',
        description: 'Description for active task',
        isCompleted: false,
        isDeleted: 0,
        completeAt: null,
        createdAt: '2024-01-01T00:00:00.000Z',
      },
    ],
  },
};

export const OnlyFinished: Story = {
  args: {
    todoRows: [
      {
        id: '1' as TodoId,
        title: 'Finished task 1',
        description: 'Description for finished task',
        isCompleted: true,
        isDeleted: 0,
        completeAt: '2024-01-01T00:00:00.000Z',
        createdAt: '2024-01-01T00:00:00.000Z',
      },
      {
        id: '2' as TodoId,
        title: 'Finished task 2',
        description: 'Another finished task',
        isCompleted: true,
        isDeleted: 0,
        completeAt: '2024-01-02T00:00:00.000Z',
        createdAt: '2024-01-02T00:00:00.000Z',
      },
    ],
  },
};
