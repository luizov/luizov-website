---
title: 'Tailwind Animated Striped Background'
description: 'Create an animated striped background utility class using only a linear gradient.'
logo: 'tailwind.png'
---

```html
<div class="min-h-screen flex items-center justify-center bg-cyan-100">
  <div class="relative p-2 border border-cyan-400 overflow-hidden rounded-lg shadow-sm">
    <!-- Striped background layer -->
    <div class="absolute inset-0 bg-striped animate-slide"></div>
    <!-- Content layer -->
    <button
      class="relative bg-teal-300 font-medium inline-flex items-center justify-center border border-transparent rounded-lg leading-snug transition duration-200 px-7 py-5 text-lg"
    >
      Default button
    </button>
  </div>
</div>
```

```css
.bg-striped {
  background-color: #f9feff;
  background-image: repeating-linear-gradient(-45deg, #f0fcff, #f0fcff 10px, #68ddfd 10px, #68ddfd 20px);
  background-size: 200% 200%;
}

.animate-slide {
  animation: slide 10s linear infinite;
}

@keyframes slide {
  100% {
    background-position: 100% 100%;
  }
}
```

A cool looking striped background.

[See it in Tailwind Play](https://play.tailwindcss.com/uS91qI4mOH)
