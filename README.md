# Cloth Shop Website

A clean, modern, and mobile-responsive website for displaying clothing products with WhatsApp integration.

## Features

- ✅ Clean and professional design
- ✅ Mobile-responsive layout
- ✅ Product grid display
- ✅ Floating WhatsApp button
- ✅ Contact information section
- ✅ Modern Google Fonts (Poppins)
- ✅ Smooth animations and transitions

## File Structure

```
cloth-shop/
├── index.html      # Main HTML file
├── style.css       # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization Guide

### 1. Update Shop Name and Tagline

Edit `index.html`:
- Line 20: Change "Fashion Hub" to your shop name
- Line 21: Update the tagline if needed

### 2. Update WhatsApp Number

**IMPORTANT:** Replace the placeholder WhatsApp number in two places:

1. **Floating Button** (index.html, line 60):
   ```html
   <a href="https://wa.me/91XXXXXXXXXX" ...>
   ```
   Replace `91XXXXXXXXXX` with your actual WhatsApp number (with country code, no + sign)

2. **Contact Section** (index.html, line 44):
   ```html
   <a href="https://wa.me/91XXXXXXXXXX" target="_blank">+91 XXXXXXXXXX</a>
   ```

### 3. Update Contact Information

Edit the contact section in `index.html` (lines 36-52):
- Shop Name
- Phone Number
- WhatsApp Number (display text)
- Email ID
- Address/City

### 4. Customize Products

Edit `script.js` to add/remove/modify products:
- Products array starts at line 4
- Each product has: `name`, `price`, and `imageColor`
- Add more products by adding objects to the array

Example:
```javascript
{
    name: "Your Product Name",
    price: "₹1,299",
    imageColor: "#667eea"  // Hex color for gradient
}
```

### 5. Change Colors

Edit `style.css` - Color variables are at the top (lines 10-18):
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --whatsapp-green: #25d366;
    /* ... */
}
```

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy (no build step needed for static HTML/CSS/JS)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- This is a static website (no backend required)
- No payment gateway or login functionality
- Product images are placeholder gradients (replace with actual images if needed)
- All contact information should be updated before going live

## License

All rights reserved.

