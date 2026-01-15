# TAM AIR Club Website Project

## Project Overview
Modern, responsive website rebuild for TAM AIR Club (tamairclub.com) - a student-led non-profit organization using 3D printed drone technology to conserve nature and protect Marin County's landscapes from wildfires and pollution.

**Original Site:** https://tamairclub.com (built with 101domain templates)
**New Site:** https://new.tamairclub.com (Static HTML/CSS/JS with modern design)
**GitHub:** https://github.com/justinmerlin2009/tamairclub
**Render:** https://tamairclub.onrender.com

## Deployment Status: LIVE
- Site deployed to Render (auto-deploys on git push)
- Custom subdomain configured: new.tamairclub.com
- SSL certificate active via Let's Encrypt
- Formspree contact form integrated (ID: xeeonjnz)

## Technology Stack
- HTML5, CSS3 (with CSS custom properties for theming)
- Vanilla JavaScript
- Font Awesome icons (CDN)
- Google Fonts (Inter)
- Formspree for contact form (ID: xeeonjnz)
- Render for deployment (render.yaml included)
- Git LFS for large files (35MB interactive map)

## Features Implemented
- **Light/Dark Mode Toggle** - Sun/moon icon in navbar, saves preference to localStorage. **Default: Dark mode**
- **Fully Responsive** - Optimized for desktop, laptop, iPad, iPhone with specific breakpoints
- **9 Complete Pages** - About (with Contact), Projects, Services, Events, Conrad Challenge, Fundraising, Research, Links
- **Contact Form** - Integrated into About Us page with Formspree
- **YouTube Integration** - Playable embedded videos and thumbnails with play button overlays
- **CAL FIRE Research Showcase** - Wildfire prediction research with interactive visualizations
- **California Government Partners** - Logos and links for CAL FIRE, Caltrans, Keep California Beautiful, Clean California

## Navigation Structure (8 items)
```
About Us | Projects | Services | Events | Conrad Challenge | Fundraising | Research | Links
```
- Home link removed (logo links to homepage)
- Contact merged into About Us page
- Navbar vertically aligned using flexbox with `display: contents` on li elements

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
  - Contact form (Name, Email, Subject, Message) - Formspree ID: xeeonjnz
  - Social media links
  - FAQ section

### Projects (projects.html)
- 3D Printed UAV overview
- FPV Drone Operations
- **Learning Log** - Full detailed entries with:
  - Flight title, Date, Present (attendees), Location, Weather
  - Detailed bullet-point notes
  - Video thumbnail on right side
  - Flights documented:
    - Flight 1 (May 4, 2025): Foam Plane Practice & Failed Lark Maiden Flight
    - Flight 2 (May 31, 2025): Difficult Lark Takeoff & Landing
    - Flight 3 (June 7, 2025): Successful Lark: 3 Complete Flights
    - Flight 4 (July 6, 2025): Hill Takeoffs & Turn Issues
- Beach Cleanup Initiative

### Services (services.html)
- Photography & Video intro section with equipment list (DJI Mini 4 Pro, GoPro)
- **Large playable YouTube videos** with descriptions:
  - PAASS Soccer Event (October 2025): https://youtube.com/embed/5k33WtXZ7eY
  - Mill Valley Fall Art Festival (September 2025): https://youtube.com/embed/W44d068C-jI
  - Bay Area Surf Soccer Training (September 2025): https://youtube.com/embed/nOzHA3pQB9k
- Request Services CTA
- Note: Geo-mapping section removed per user request

### Events (events.html)
- **STEM Education Programs** (moved from Services, at top of page):
  - School Workshops
  - Community Programs
- UC Berkeley Engineering 2025 (Justin Merlin)
- Toulouse Aeronautic 2025 (Justin Merlin) - includes rocket launch video
- EAA AirVenture 2025 (David De Zafra) - Zipline & Wing connections
- Timeline of achievements

### Conrad Challenge (conrad.html)
- Competition overview and categories
- Sylva project feature (environmental monitoring solution)
- **Sylva video**: https://youtu.be/mdnOKHkWWx4 (embedded player)
- Link to sylva-us.com
- **Competition progress tracker**:
  - Registration: Completed
  - Proposal: Completed
  - Semifinals: Upcoming
  - Innovation Summit: Goal

### Research (research.html)
- CAL FIRE wildfire research collaboration showcase
- TAM AIR Club × CAL FIRE × UCSF × UCI partnership
- Key findings: 4.2M acres burned in 2020, 84% damage June-Sept, etc.
- Featured visualizations:
  - Executive Dashboard (10-panel overview)
  - Fire Clock (seasonal patterns)
  - Cumulative Risk Map (California heatmap)
  - Trend Analysis (acceleration evidence)
- Interactive mega-fires map (35MB Folium map via Git LFS)
- PDF research report download
- Project roadmap (EDA complete, Grid Creation next)

### Fundraising (fundraising.html)
- Dedicated GoFundMe campaign page
- Progress indicator ($3,000+ raised) with green gradient box
- How donations help (equipment, materials, education)
- Other ways to help (spread word, get involved)

### Links (links.html)
- **California Government Partners** (with official logos):
  - CAL FIRE: https://www.fire.ca.gov/
  - Caltrans: https://dot.ca.gov/
  - Keep California Beautiful: https://keepcabeautiful.org/
  - Clean California: https://cleancalifornia.dot.ca.gov/
- 3D Printed UAV Resources:
  - Flightory: https://flightory.com
  - Andrew Newton YouTube (INAV tutorials)
- Partner organizations (Conrad Challenge, Sylva, GoFundMe)
- Social media links

## File Structure
```
tamairclub/
├── index.html
├── about.html              # Includes Contact section
├── projects.html           # Detailed Learning Log
├── conrad.html             # Competition progress tracker
├── services.html           # Large playable YouTube videos
├── events.html             # Includes STEM Education at top
├── research.html           # CAL FIRE research showcase
├── fundraising.html        # GoFundMe/donation page
├── links.html              # CA Gov partners + resources
├── css/
│   ├── styles.css          # Main styles + theme variables
│   └── responsive.css      # Media queries for all devices
├── js/
│   ├── main.js             # Navigation, scroll effects
│   ├── theme.js            # Light/dark mode toggle
│   └── contact.js          # Form handling (Formspree)
├── images/
│   ├── logo.png
│   ├── partners/           # CA Government partner logos
│   │   ├── calfire-logo.png
│   │   ├── caltrans-logo.png
│   │   ├── clean-california-logo.png
│   │   └── keep-ca-beautiful-logo.png
│   ├── team/
│   ├── projects/
│   ├── learning-log/
│   ├── events/
│   └── services/
├── research/               # Research assets
│   ├── figures/
│   │   ├── executive-dashboard.png
│   │   ├── fire-clock.png
│   │   ├── risk-map.png
│   │   └── trend-analysis.png
│   ├── interactive/
│   │   └── mega-fires-map.html  # 35MB (Git LFS)
│   └── CALFIRE_Analysis_Report.pdf
├── render.yaml             # Render deployment config
├── .gitattributes          # Git LFS config
├── .gitignore
└── CLAUDE.md               # This file
```

## Responsive Design
Optimized breakpoints for all platforms:
- **Desktop** (1280px+): Full layout, 4-column grids
- **Laptop** (1024px+): Side-by-side layouts, full navigation
- **iPad Landscape** (1024-1366px): Adjusted spacing, compact nav
- **iPad Portrait** (768-1024px): Stacked layouts, 2-column grids
- **Mobile** (below 768px): Single column, hamburger menu
- **Small iPhone** (below 480px): Compact UI, larger touch targets

Features:
- iOS safe area support (iPhone X+ notch/home indicator)
- Touch-friendly minimum 44px tap targets
- Video grids stack vertically on mobile
- Partner logos: 4 cols → 2 cols → 1 col responsive

## Git & Deployment

### SSH Configuration
Using SSH key for GitHub (configured in ~/.ssh/config):
```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/tamairclub_key
  IdentitiesOnly yes
```

### Git LFS
Large file storage enabled for interactive map:
```
research/interactive/mega-fires-map.html filter=lfs diff=lfs merge=lfs -text
```

### Deploy Commands
```bash
# Push changes (auto-deploys to Render)
git add .
git commit -m "Your message"
git push

# If LFS issues
git lfs install
git lfs track "research/interactive/*.html"
```

## Social Links
- Instagram: https://instagram.com/tamairclub
- YouTube: https://youtube.com/@TamAirNonProfit
- GoFundMe: https://www.gofundme.com/f/support-tam-air-protect-marin-from-wildfires
- Sylva Project: https://www.sylva-us.com
- Conrad Challenge: https://conrad.spacecenter.org/

## Development Notes
- All images extracted from original tamairclub.com CloudFront CDN
- YouTube videos use iframe embeds for playability
- Contact form uses Formspree (ID: xeeonjnz)
- CSS uses custom properties for easy theme switching
- Mobile navigation uses hamburger menu below 1024px
- **Default theme: Dark mode** - All HTML files have `data-theme="dark"`
- Logo in navbar links to homepage (no separate Home menu item)
- Contact section accessible via about.html#contact
- Navbar uses flexbox centering with min-height: 64px

## Recent Changes (January 2026)
1. Deployed to new.tamairclub.com via Render
2. Integrated Formspree contact form (ID: xeeonjnz)
3. Added California Government Partners to Links page
4. Redesigned Services page with large playable YouTube videos
5. Redesigned Learning Log with full flight details
6. Reordered navigation menu
7. Added comprehensive responsive design for all devices
8. Marked Conrad Challenge Proposal as completed
9. Set up Git LFS for 35MB interactive map
10. Added Sylva video to Conrad Challenge page

## Known Issues / TODO
- **Navbar vertical alignment**: FIXED (Jan 2026)
  - Root cause: Fixed `height: 40px` on all nav elements was fighting against flexbox centering
  - Also: Text had `line-height: 1.6` from body, creating extra vertical space
  - Solution implemented:
    1. Removed all fixed heights from nav-menu, nav-menu li, nav-link, nav-actions
    2. Added `line-height: 1` to nav-logo and nav-link
    3. Changed `.nav-menu li` to `display: contents` (removes li from layout, nav-links align directly)
    4. Changed nav-link from fixed height to padding-based sizing (`padding: 0.625rem 0.85rem`)
    5. Added `min-height: 64px` to nav-container for consistent navbar height
- Font size: 1rem for nav-link (readable and proportionate)
