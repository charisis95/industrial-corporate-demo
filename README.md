# Industrial Corporate Website Demo

A responsive corporate landing page built with **HTML, CSS, and vanilla JavaScript**.

The design is inspired by modern engineering, energy, and infrastructure websites, with large typography, project showcases, hover interactions, scroll effects, and animated business metrics.

## Features

- Full-screen hero section
- Responsive desktop and mobile navigation
- Scroll progress indicator
- Scroll-triggered reveal animations
- Animated metric counters
- Interactive project slider
- Hover effects on cards, links, and buttons
- Smooth anchor navigation
- Responsive layout for desktop, tablet, and mobile

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Intersection Observer API
- `requestAnimationFrame`

## Project Structure

```text
industrial-corporate-demo/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Run Locally

No installation or build process is required.

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser.

For a better development experience, you can use the **Live Server** extension in Visual Studio Code.

## Animated Metrics

The target values are stored in the HTML using a `data-counter` attribute:

```html
<span data-counter="12500">0</span>
```

JavaScript detects when each counter becomes visible and animates it from `0` to its target value.

```javascript
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    const counter = entry.target;
    const targetValue = Number(counter.dataset.counter ?? 0);

    animateCounter(counter, targetValue);
    observer.unobserve(counter);
  });
});
```

## Publish with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Press **Save**.

Your website will then be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/industrial-corporate-demo/
```

## Customization

You can update:

- Website content in `index.html`
- Colors, layout, and animations in `styles.css`
- Counters, navigation, and interactions in `script.js`

## Author

**Theodoros Charisis**  
Frontend Developer

## License

This project is available for educational and portfolio use.
