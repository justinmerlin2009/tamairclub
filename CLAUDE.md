# TAM AIR Club Website Project

## Project Overview
Modern, responsive website rebuild for TAM AIR Club (tamairclub.com) - a student-led non-profit organization using 3D printed drone technology to conserve nature and protect Marin County's landscapes from wildfires and pollution.

**Original Site:** https://tamairclub.com (built with 101domain templates)
**New Site:** Static HTML/CSS/JS with modern design, light/dark mode, responsive layout

## Technology Stack
- HTML5, CSS3 (with CSS custom properties for theming)
- Vanilla JavaScript
- Font Awesome icons (CDN)
- Google Fonts (Inter)
- Formspree for contact form (needs user's form ID)
- Render for deployment (render.yaml included)

## Features Implemented
- **Light/Dark Mode Toggle** - Sun/moon icon in navbar, saves preference to localStorage. **Default: Dark mode**
- **Fully Responsive** - Mobile-first design for phones, tablets, laptops, desktops
- **9 Complete Pages** - About (with Contact), Projects, Conrad Challenge, Services, Events, Research, Fundraising, Links
- **Contact Form** - Integrated into About Us page, ready for Formspree
- **YouTube Integration** - Video thumbnails with play button overlays
- **CAL FIRE Research Showcase** - Wildfire prediction research with interactive visualizations

## Navigation Structure (8 items)
```
About Us | Projects | Conrad Challenge | Services | Events | Research | Fundraising | Links
```
- Home link removed (logo links to homepage)
- Contact merged into About Us page

## Pages & Content

### Homepage (index.html)
- Hero section with logo and mission tagline
- Social media links (Instagram, YouTube)
- News & Updates (September 2025, Summer 2025)
- Explore TAM AIR section (Projects, Services, Research cards)
- Donate section with GoFundMe link

### About Us (about.html)
- Mission statement and goals
- Values section (Conservation, Innovation, Education, Community)
- Team members with real photos:
  - Justin Merlin - Founder & Leader
  - David De Zafra - Founder, Chief of Aviation
  - Gideon Palestrant - Founder, Chief of Technology
  - Vaughn Neumann - Founder, Chief of Media
- **Contact section** (merged from contact.html):
  - Contact form (Name, Email, Subject, Message)
  - Social media links
  - FAQ section

### Projects (projects.html)
- 3D Printed UAV overview
- FPV Drone Operations
- Learning Log with 4 flight entries (each with YouTube video):
  - Flight 1 (May 4, 2025): Foam Plane Practice - https://youtu.be/Rhc1tHht2uM
  - Flight 2 (May 31, 2025): Lark Takeoff & Landing - https://youtu.be/XherKA5kSXw
  - Flight 3 (June 7, 2025): Three Complete Flights - https://youtu.be/SXyiF1K7Kt8
  - Flight 4 (July 6, 2025): Hill Takeoffs - https://youtu.be/SXyiF1K7Kt8
- Beach Cleanup Initiative

### Conrad Challenge (conrad.html)
- Competition overview and categories
- Sylva project feature (environmental monitoring solution)
- Link to sylva-us.com
- Competition progress tracker

### Services (services.html)
- Photography & Video (DJI Mini 4 Pro, GoPro)
- Sample work videos:
  - PAASS Soccer Event: https://youtu.be/5k33WtXZ7eY
  - Mill Valley Fall Art Festival: https://youtu.be/W44d068C-jI
  - Bay Area Surf Soccer Training: https://youtu.be/nOzHA3pQB9k
- Geo-mapping services

### Events (events.html)
- UC Berkeley Engineering 2025 (Justin Merlin)
- Toulouse Aeronautic 2025 (Justin Merlin) - includes rocket launch video
- EAA AirVenture 2025 (David De Zafra) - Zipline & Wing connections
- Timeline of achievements
- **STEM Education programs** (moved from Services):
  - School Workshops
  - Community Programs

### Research (research.html)
- CAL FIRE wildfire research collaboration showcase
- TAM AIR Club × CAL FIRE × UCSF × UCI partnership
- Key findings: 4.2M acres burned in 2020, 84% damage June-Sept, etc.
- Featured visualizations:
  - Executive Dashboard (10-panel overview)
  - Fire Clock (seasonal patterns)
  - Cumulative Risk Map (California heatmap)
  - Trend Analysis (acceleration evidence)
- Interactive mega-fires map (35MB Folium map)
- PDF research report download
- Project roadmap (EDA complete, Grid Creation next)
- Source: /Users/olivier/Documents/CLAUDE/wildfire_prediction_model_california/

### Fundraising (fundraising.html)
- Dedicated GoFundMe campaign page
- Progress indicator ($3,000+ raised)
- How donations help (equipment, materials, education)
- Other ways to help (spread word, get involved)

### Links (links.html)
- External resources (Flightory - 3D printed UAV models)
- Andrew Newton YouTube (INAV tutorials)
- Partner organizations (Conrad Challenge, Sylva)
- Social media links

## File Structure
```
tamairclub/
├── index.html
├── about.html              # Includes Contact section
├── projects.html
├── conrad.html
├── services.html           # Photography, Geo-mapping only
├── events.html             # Includes STEM Education
├── research.html           # CAL FIRE research showcase
├── fundraising.html        # GoFundMe/donation page
├── links.html              # External resources
├── css/
│   ├── styles.css          # Main styles + theme variables
│   └── responsive.css      # Media queries
├── js/
│   ├── main.js             # Navigation, scroll effects
│   ├── theme.js            # Light/dark mode toggle
│   └── contact.js          # Form handling (Formspree)
├── images/
│   ├── logo.png            # TAM AIR Club logo
│   ├── video-thumbnail.jpg # YouTube video thumbnail
│   ├── gofundme-logo.png
│   ├── hero/
│   │   └── hero-bg.jpg
│   ├── team/
│   │   ├── justin-merlin.jpg
│   │   ├── david-dezafra.jpg
│   │   ├── gideon-palestrant.jpg
│   │   └── vaughn-neumann.jpg
│   ├── projects/
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   ├── learning-log/
│   │   ├── flight1.jpg
│   │   ├── flight2.jpg
│   │   ├── flight3.jpg
│   │   └── flight4.jpg
│   ├── events/
│   │   ├── berkeley.jpg
│   │   ├── toulouse.jpg
│   │   └── airventure.jpg
│   └── services/
│       └── photography-video.png
├── research/               # Research assets
│   ├── figures/
│   │   ├── executive-dashboard.png
│   │   ├── fire-clock.png
│   │   ├── risk-map.png
│   │   └── trend-analysis.png
│   ├── interactive/
│   │   └── mega-fires-map.html  # 35MB interactive Folium map
│   └── CALFIRE_Analysis_Report.pdf
├── render.yaml             # Render deployment config
├── .gitignore
├── README.md
└── CLAUDE.md               # This file
```

## Next Steps to Deploy

1. **Set up Formspree:**
   - Create account at formspree.io
   - Create new form, get form ID
   - Replace `YOUR_FORMSPREE_ID` in about.html and js/contact.js

2. **Initialize Git:**
   ```bash
   cd /Users/olivier/Documents/CLAUDE/tamairclub
   git init
   git add .
   git commit -m "Initial TAM AIR Club website"
   ```

3. **Push to GitHub:**
   - Create new repository on GitHub
   - Follow GitHub's instructions to push existing repo

4. **Deploy to Render:**
   - Connect GitHub repo to Render
   - Render auto-detects render.yaml
   - Site goes live!

5. **Configure subdomain:**
   - Set up as new.tamairclub.com for comparison with original

## Social Links
- Instagram: https://instagram.com/tamairclub
- YouTube: https://youtube.com/@TamAirNonProfit
- GoFundMe: https://www.gofundme.com/f/support-tam-air-protect-marin-from-wildfires
- Sylva Project: https://www.sylva-us.com
- Conrad Challenge: https://conrad.spacecenter.org/

## Development Notes
- All images extracted from original tamairclub.com CloudFront CDN
- YouTube video embeds replaced with clickable thumbnails (original embed had Error 153)
- Contact form uses Formspree (similar to sylva-us.com implementation)
- CSS uses custom properties for easy theme switching
- Mobile navigation uses hamburger menu below 1024px
- **Default theme: Dark mode** - All HTML files have `data-theme="dark"` and theme.js defaults to dark when no user preference is saved
- Logo in navbar links to homepage (no separate Home menu item)
- Contact section accessible via about.html#contact
