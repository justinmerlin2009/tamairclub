# TAM AIR Club Website

Modern, responsive website for TAM AIR Non-Profit - a student-led organization using 3D printed drone technology to conserve nature and protect Marin County's landscapes.

## Features

- Responsive design (mobile, tablet, desktop)
- Light/Dark mode toggle with system preference detection
- Contact form with Formspree integration
- Modern CSS with custom properties
- Optimized for performance and accessibility

## Pages

- **Home** - Hero, news updates, mission statement, donate CTA
- **About Us** - Mission, values, team members
- **Projects** - 3D printed UAV, FPV drones, beach cleanup
- **Services** - Photography, geo-mapping, STEM education
- **Events** - UC Berkeley, Toulouse Aeronautic, EAA AirVenture
- **Conrad Challenge** - Competition participation details
- **Contact** - Contact form and social links

## Tech Stack

- HTML5
- CSS3 (with CSS custom properties for theming)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter)
- Formspree for contact form

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tamairclub.git
   cd tamairclub
   ```

2. Set up Formspree:
   - Create a free account at [formspree.io](https://formspree.io)
   - Create a new form and get your form ID
   - Update `contact.html` and `js/contact.js` with your Formspree ID

3. Add images:
   - Add your logo to `images/logo.png`
   - Add hero background to `images/hero/hero-bg.jpg`
   - Add team photos to `images/team/`
   - Add project images to `images/projects/`
   - Add event images to `images/events/`

4. Deploy to Render:
   - Connect your GitHub repository to Render
   - Render will automatically detect the `render.yaml` configuration
   - Your site will be live!

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## File Structure

```
tamairclub/
├── index.html          # Homepage
├── about.html          # About Us page
├── projects.html       # Projects page
├── services.html       # Services page
├── events.html         # Events page
├── conrad.html         # Conrad Challenge page
├── contact.html        # Contact page
├── css/
│   ├── styles.css      # Main stylesheet
│   └── responsive.css  # Media queries
├── js/
│   ├── main.js         # Main JavaScript
│   ├── theme.js        # Theme toggle
│   └── contact.js      # Contact form handler
├── images/
│   ├── logo.png
│   ├── hero/
│   ├── team/
│   ├── projects/
│   └── events/
├── render.yaml         # Render deployment config
├── .gitignore
└── README.md
```

## Customization

### Colors

Edit the CSS custom properties in `css/styles.css`:

```css
:root, [data-theme="light"] {
  --primary: #22c55e;      /* Main green color */
  --background: #ffffff;   /* Page background */
  /* ... */
}

[data-theme="dark"] {
  --primary: #22c55e;
  --background: #0f0f1a;
  /* ... */
}
```

### Content

Update the HTML files directly to change text, images, and links.

## License

Copyright TAM AIR Club. All rights reserved.

## Contact

- Instagram: [@tamairclub](https://instagram.com/tamairclub)
- YouTube: [@TamAirNonProfit](https://youtube.com/@TamAirNonProfit)
- GoFundMe: [Support TAM AIR](https://www.gofundme.com/f/support-tam-air-protect-marin-from-wildfires)
