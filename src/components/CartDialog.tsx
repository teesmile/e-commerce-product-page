'use client'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { useCart } from '@/store/cart'
import { Button } from './ui/button'
// import toast from 'react-hot-toast' // Optional: remove if not using toast

type CartDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CartDialog({ open, onOpenChange }: CartDialogProps) {
  const { items, total, removeItem, clearCart } = useCart()

  const handleRemove = (id: string, title: string) => {
    removeItem(id)
    toast.success(`${title} removed from cart`)
  }
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.info("Your cart is empty")
      return
    }
    clearCart()
    toast.success("Checkout successful! Thank you for your purchase.")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
  <DialogContent
  className={`
    p-0 w-[calc(100%-0.8rem)] max-w-none transition-transform duration-200 ease-out
    fixed top-20 left-1/2 -translate-x-1/2 translate-y-0
    rounded-md
    sm:max-w-sm sm:right-0 sm:left-auto sm:top-14 sm:absolute sm:mx-3
  `}
>
        <div className="p-4">
       <DialogHeader className=" mb-4">
      
          <DialogTitle className="text-left text-lg font-bold">Cart</DialogTitle>

        </DialogHeader>
    <hr />
        {items.length === 0 ? (
          
          <p className="text-neutral-500 h-[20vh] font-bold flex justify-center items-center">Your cart is empty.</p>
        ) : (
          <div className="max-h-[50vh]  overflow-y-auto ">
            <ul className="space-y-4 pt-4">
              {items.map(item => (
                <li key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-14 rounded"
                  />
                  <div className="text-md text-neutral-500">
                    <div className="">{item.title}</div>
                    <div className="text-neutral-500 flex gap-2">
                      ${item.price.toFixed(2)} * {item.quantity}
                       <span className="font-bold text-neutral-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    </div>
                   
                    
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

            <DialogFooter className="mt-4">
              <Button
                className="cursor-pointer w-full bg-orange-400 text-black h-12 rounded-md font-bold hover:outline-amber-700 transition-colors"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </DialogFooter>
          </div>
          
        )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
