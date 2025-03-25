// app/services/api.ts
const API_URL = 'http://localhost:8000/api';

export interface Item {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

export async function getItems(): Promise<Item[]> {
  const response = await fetch(`${API_URL}/items/`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
}

export async function createItem(item: Omit<Item, 'id' | 'created_at'>): Promise<Item> {
  const response = await fetch(`${API_URL}/items/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error('Failed to create item');
  }
  return response.json();
}