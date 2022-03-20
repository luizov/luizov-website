---
title: "Tailwind Inset Shadow"
description: "Create a cool looking card with full image background and an inset shadow effect."
logo: "tailwind.png"
---

```html
<div class="min-h-screen flex items-center justify-center bg-slate-800">
	<div class="relative w-96 h-96 overflow-hidden rounded-3xl ">
		<!-- Image layer -->
		<div class="absolute inset-0 flex justify-center items-center">
			<img src="your-image.jpg" />
		</div>
		<!-- Ring layer -->
		<div class="absolute inset-0 rounded-3xl shadow-inset"></div>
	</div>
</div>
```

```css
.shadow-inset {
	box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
		inset 0 -1px 0 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05),
		0 3px 2px rgba(0, 0, 0, 0.1);
}
```

A subtle border/shadow effect. Used on this site on product and article cards.

[See it in Tailwind Play](https://play.tailwindcss.com/oZUz2dDNe6)
