import {create} from 'zustand';
import {CartItem} from '@/types';

type CartState = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  count: 0,
  total: 0,
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i),
        count: state.count + 1,
        total: state.total + item.price
      };
    }
    return {
      items: [...state.items, { ...item, quantity: 1 }],
      count: state.count + 1,
      total: state.total + item.price
    };
  }),
  removeItem: (id) => set((state) => {
    const item = state.items.find(i => i.id === id);
    if (!item) return state;
    return {
      items: state.items.filter(i => i.id !== id),
      count: state.count - item.quantity,
      total: state.total - (item.price * item.quantity)
    };
  }),
  clearCart: () => set({ items: [], count: 0, total: 0 })
}));
