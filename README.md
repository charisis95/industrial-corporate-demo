# Novaxis Industrial Corporate Demo

Novaxis is a responsive, single-page corporate website concept for an engineering, energy, and infrastructure company. It presents the fictional Novaxis brand through animated sections, project showcases, impact metrics, industry insights, and a contact-focused footer.

The project is built with plain HTML, CSS, and JavaScript, so it can run without a build step or package installation.

## Features

- Responsive layouts for mobile, tablet, laptop, and desktop screens
- Fixed header with scroll-aware styling and page progress indicator
- Mobile navigation menu
- Animated hero and scroll-triggered content reveals
- Expertise cards with interactive hover states
- Horizontally scrollable featured-project gallery
- Animated impact counters
- Sticky vision section with motion graphics
- News and insights cards
- Reduced-motion support for accessibility preferences
- Semantic markup and accessible navigation labels

## Technology Stack

- HTML5
- CSS3, including custom properties, Grid, Flexbox, and animations
- Vanilla JavaScript
- Google Fonts: Manrope and Space Grotesk
- Browser APIs: `IntersectionObserver`, `requestAnimationFrame`, and `Intl.NumberFormat`

## Getting Started

No dependencies or environment variables are required.

### Run directly

Open `index.html` in a modern browser.

### Run with a local server

Using a local server is recommended while developing. If Python is installed, run:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

You can also use an editor extension such as Live Server.

## Project Structure

```text
industrial-corporate-demo/
|-- index.html    # Page content and semantic structure
|-- styles.css    # Global, component, animation, and responsive styles
|-- script.js     # Navigation, scrolling, reveal, counter, and gallery behavior
`-- README.md     # Project documentation
```

## Main Sections

- **Hero:** Brand introduction, calls to action, and live-project status card
- **Expertise:** Infrastructure, clean energy, and industrial systems
- **Projects:** Featured engineering projects in Greece, Spain, and the UAE
- **Impact:** Animated company statistics and global delivery metrics
- **Vision:** Novaxis's approach to sustainable, lifecycle-focused engineering
- **Insights:** Example news and thought-leadership content
- **Contact:** Navigation links and a project inquiry email action

## Customization

- Edit page copy, links, and section content in `index.html`.
- Update colors, typography, spacing, and responsive behavior in `styles.css`.
- Adjust animation timing and interactive behavior in `script.js`.
- Change the theme variables in the `:root` block of `styles.css` to quickly restyle the site.

The company, projects, statistics, news items, and email address shown in this demo are fictional and should be replaced before production use.

## Browser Support

The site targets current versions of Chrome, Edge, Firefox, and Safari. JavaScript must be enabled for the navigation menu, animated counters, project controls, and scroll effects.

## Deployment

Because this is a static website, it can be deployed to any static hosting provider, including GitHub Pages, Netlify, Vercel, or a conventional web server. Upload the project files without changing their relative paths.

There is no production build command; the source files are deployment-ready.

## License

No license has been specified. Add a license before distributing or reusing the project outside its intended scope.
