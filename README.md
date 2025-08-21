# 🛍️ An E‑commerce Product Page with Interactive Gallery
This is a responsive, accessible shopping interface featuring a fullscreen lightbox viewer, thumbnail carousel, quantity controls, and live cart updates, optimized for a seamless shop‑anywhere experience.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge
Users should be able to:
- View the optimal layout for their device (mobile → desktop)
- See hover states on all interactive elements
- Open a fullscreen lightbox from the main product image
- Switch product images via clickable thumbnails
- Add items to the cart with quantity control
- View the cart contents and remove items dynamically

### Screenshot
![](/public/images/e-commercepage.gif)
![](/public/images/e-commercesh.png)



### LinkS
- **Solution URL:** [GitHub Repository](https://github.com/teesmile/e-commerce-product-page)  
- **Live Site URL:** [View Live Demo](https://e-commerce-product-page-one-ashy.vercel.app/)

## 🛠 My process

### Built with
- **Next.js** - React framework for SSR & SSG
- **TypeScript** - Static typing for better scalability
- **Tailwind CSS** - Utility‑first, responsive styling
- **Zustand** - Lightweight state management
- **Mobile‑first workflow** with responsive breakpoints
- **Semantic HTML5** with accessible ARIA roles
- **Shadcn** - A lightweight UI library for my dialog component
- **Sonner** - For my Toast notification UI implementation

## 📚 What I Learned

This project was a huge leap forward for me — my first time building with **TypeScript** and **Next.js** after coming from a React + JavaScript background. I went from feeling like I was “just getting things to work” to understanding *why* certain approaches are more maintainable and scalable.

Some of my key takeaways:  

- **Leveling up with TypeScript** - Learning to add static typing made my codebase far more predictable. It caught potential bugs early and gave me confidence when refactoring components or working with complex props and state.  
- **Mastering Next.js basics** - Understanding how to use Next.js for both **SSR** (Server‑Side Rendering) and **SSG** (Static Site Generation) taught me how to balance performance with fresh data needs.  
- **State management with Zustand** - I learned how to manage global state without the overhead of larger libraries, keeping the cart logic simple, clear, and reactive.  
- **Responsive design mindset** - I built layouts that adapt elegantly from mobile to desktop using a mobile‑first approach and Tailwind’s responsive utility classes.  
- **Accessible UI patterns** - Implemented an accessible lightbox gallery with keyboard navigation, ensuring a better experience for all users.  
- **Integrating UI component libraries** - First time working with **shadcn/ui** and **sonner**. I learned how to incorporate third‑party component libraries seamlessly into my Next.js project and customize them to match my design.  
- **Utility‑first styling** - Tailwind CSS helped me style quickly without bloating my CSS, while still keeping the design consistent and clean.  

**Example snippet:**  
```tsx
const addToCart = (item) => set((state) => ({
  cart: [...state.cart, item]
}));
```
```tsx
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
  })
  clearCart: () => set({ items: [], count: 0, total: 0 })
}));
```

## 🚀 Continued development  

Now that I’ve tackled my first project with **Next.js** and **TypeScript**, I want to keep building on that momentum and sharpen both my technical depth and workflow efficiency. My next steps include:  

- **Deepening TypeScript mastery** - Continue improving type safety with more advanced generics, utility types, and strict mode patterns to reduce runtime errors.  
- **Exploring more of Next.js** - Dive into API routes, middleware, and advanced data‑fetching strategies (ISR, incremental builds) to serve more complex use cases.  
- **Enhancing UI/UX polish** - Expand my use of component libraries like **shadcn/ui** and **sonner** to create richer, more consistent interfaces, while still custom‑styling them to match a unique brand feel.  
- **Strengthening accessibility** - Push beyond basic ARIA roles to handle more nuanced interaction patterns, ensuring a truly inclusive experience.  
- **Performance tuning** - Experiment with image optimization, code‑splitting, and caching strategies to hit excellent Lighthouse scores.  
- **State management patterns** - Explore combining Zustand with other patterns like React Query or server actions for more robust data workflows.  

### 📌 Useful resources  

- [Next.js Docs](https://nextjs.org/docs) – Core reference for routing and optimization  
- [Zustand Docs](https://docs.pmnd.rs/zustand) – Clear examples for managing state  
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – Rapid utility styling guide  
- [TypeScript Docs](https://www.typescriptlang.org/) – Official documentation for learning and refining TypeScript skills  

---

## 👤 Author  

- **Name:** Anthony Ugwuja  
- **GitHub (Main Profile):** [@Oluwasetemi](https://github.com/Oluwasetemi)  
- **GitHub (Project Repo):** [@teesmile](https://github.com/teesmile)  
