// Define the types for the priority and status
export type Priority = 'low' | 'medium' | 'high';
export type Status = 'pending' | 'completed';

// Interface for a Todo item
export interface Todo {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: Status;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
