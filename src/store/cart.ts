import {create} from 'zustand';
import {CartItem} from '@/types';

type CartState = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (item: CartItem, quantity: number) => void;
  updateItem: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  count: 0,
  total: 0,
  addItem: (item, quantity = 1) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      const delta = quantity - existingItem.quantity;
      return {
        items: state.items.map(i => i.id === item.id ? { ...i, quantity } : i),
        count: state.count + delta,
        total: state.total + item.price * delta
      };
    }
    return {
      items: [...state.items, { ...item, quantity }],
      count: state.count + quantity,
      total: state.total + item.price * quantity
    };
  }),
  updateItem: (id, quantity) => {
    const item = get().items.find(i => i.id === id);
    if (!item) return ;
    get().addItem(item, quantity);
  },
 

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
