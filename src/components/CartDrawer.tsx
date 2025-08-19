'use client'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerFooter,
} from '@/components/ui/drawer'
import { useCart } from '@/store/cart'
import { Button } from './ui/button'
// import toast from 'react-hot-toast' // Optional: remove if not using toast

type CartDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, total, removeItem, clearCart } = useCart()

  const handleRemove = (id: string, title: string) => {
    removeItem(id)
    // toast.success(`${title} removed from cart`)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-sm ml-auto h-screen bg-white p-6 overflow-y-auto">
        <DrawerHeader className="flex items-center justify-between mb-4">
          <DrawerTitle className="text-lg font-bold">Cart</DrawerTitle>
          <DrawerClose asChild>
            <Button aria-label="Close cart">
              <img src="/images/icon-close.svg" alt="Close" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        {items.length === 0 ? (
          <p className="text-neutral-700">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-14 rounded"
                  />
                  <div className="text-sm">
                    <div>{item.title}</div>
                    <div className="text-neutral-500">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </div>
                    <span className="font-bold text-neutral-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="ml-auto text-neutral-700 hover:text-brand"
                    onClick={() => handleRemove(item.id, item.title)}
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <img src="/images/icon-delete.svg" alt="Remove item" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <DrawerFooter className="mt-4">
              <Button
                className="w-full bg-brand text-white h-12 rounded-xl font-bold hover:opacity-90"
                onClick={clearCart}
              >
                Checkout
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
}
