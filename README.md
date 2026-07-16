
if i tell you to write  for me an html with css and have animations ?
i can give you example urls and tell me if you can do it .
https://www.metlen.com/el/
https://www.archirodon.net/
also notice the on hover effects, the scroll effects, and the data displaying on screen.
can you  do it? create for me an html and css file so i can see what you will do 

Worked for 6m 41s
Yes. I created an original corporate engineering website inspired by the large hero sections, project presentation, statistics, and corporate structure of METLEN and Archirodon—not a direct copy. 

It includes:

Full-screen animated hero

St
imations on cards and buttons

Scroll-triggered content reveals

Animated statistics and progress bars

Horizontal projects slider

Responsive mobile navigation

CSS-generated industrial visuals, so no image files are required

Mobile and tablet layouts

A small JavaScript file is included because animated counters, scroll detection, navigation, and the project slider require JavaScript.

Download
Download the complete demo ZIP

Individual files:

index.html

styles.css

script.js

Extract the ZIP and open index.html in your browser. The animations will start automatically.



metrics-grid
how did you do it with the metrics that shows the number go upd visible

I used JavaScript with IntersectionObserver. It detects when each metric enters the screen and then starts counting from 0 to the number inside data-counter.

1. HTML
Each number starts at 0. The final number is stored inside data-counter.

<div class="metrics-grid">
  <article class="metric-card reveal-item">
    <strong>
      <span data-counter="67">0</span>+
    </strong>

    <p>Years of engineering experience</p>
  </article>

  <article class="metric-card reveal-item">
    <strong>
      <span data-counter="12500">0</span>
    </strong>

    <p>People across our global network</p>
  </article>
</div>
For example:

<span data-counter="12500">0</span>
0 is what is displayed initially.

data-counter="12500" is the final number.

2. Detect when the number becomes visible
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const targetValue = Number(counter.dataset.counter);

      animateCounter(counter, targetValue);

      observer.unobserve(counter);
    });
  },
  {
    threshold: 0.7,
  },
);
This part:

if (!entry.isIntersecting) {
  return;
}
means:

Do nothing until the number becomes visible on the screen.

The threshold: 0.7 means that around 70% of the number element must be visible before the animation starts.

3. Animate the number
const animateCounter = (counter, targetValue) => {
  const duration = 1600;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;

    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = 1 - Math.pow(1 - progress, 4);

    const currentValue = Math.round(
      targetValue * easedProgress,
    );

    counter.textContent = new Intl.NumberFormat("en-US").format(
      currentValue,
    );

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  };

  requestAnimationFrame(updateCounter);
};
The important line is:

const currentValue = Math.round(
  targetValue * easedProgress,
);
For a target of 12500, the displayed number changes approximately like this:

0
168
940
3260
7800
10940
12420
12500
It does not increase by exactly 1. Instead, JavaScript calculates the correct value for every animation frame.

4. Observe all counters
document
  .querySelectorAll("[data-counter]")
  .forEach((counter) => {
    counterObserver.observe(counter);
  });
This selects every element containing:

data-counter
and tells the observer to watch it.

Complete simplified version
const formatCounter = (value) => {
  return new Intl.NumberFormat("en-US").format(value);
};

const animateCounter = (counter, targetValue) => {
  const duration = 1600;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = 1 - Math.pow(1 - progress, 4);

    const currentValue = Math.round(
      targetValue * easedProgress,
    );

    counter.textContent = formatCounter(currentValue);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  };

  requestAnimationFrame(updateCounter);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const targetValue = Number(
        counter.dataset.counter ?? 0,
      );

      animateCounter(counter, targetValue);

      observer.unobserve(counter);
    });
  },
  {
    threshold: 0.7,
  },
);

document
  .querySelectorAll("[data-counter]")
  .forEach((counter) => {
    counterObserver.observe(counter);
  });
This line prevents the counter from restarting every time you scroll away and come back:

observer.unobserve(counter);
So the animation runs only once.


7860df8e-1ddf-4a03-ab88-3deecbc02966.png
add a read me file only for the project , dont add this this was private, add read me file only for the project now how to upload 

Worked for 29s
I updated the README.md so it contains only information about the project. I removed the private explanation about how the animated metrics work and the GitHub Pages instructions.

Download the updated project ZIP

README.md

How to upload it to GitHub
1. Create a repository
On GitHub:

Click New repository.

Name it, for example:

industrial-corporate-demo
Choose Public.

Do not add another README, because the project already has one.

Click Create repository.

2. Open the project in VS Code
Extract the ZIP, then open the industrial-corporate-demo folder in VS Code.

The folder should contain:

index.html
styles.css
script.js
README.md
3. Open the terminal in VS Code
Run these commands:

git init
git add .
git commit -m "Add animated corporate website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/industrial-corporate-demo.git
git push -u origin main
Replace:

YOUR-USERNAME
with your GitHub username.

For example:

git remote add origin https://github.com/charisis95/industrial-corporate-demo.git
After the final command, refresh the GitHub repository and all four project files should appear.


README.md


# Novaxis Corporate Website

A responsive corporate landing page for an engineering, energy, and infrastructure company, built with HTML, CSS, and vanilla JavaScript.

The project focuses on a modern visual experience with large typography, animated content, interactive project sections, and responsive layouts.

## Features

- Full-screen hero section
- Responsive desktop and mobile navigation
- Smooth scrolling navigation
- Scroll progress indicator
- Scroll-triggered reveal animations
- Animated statistics counters
- Interactive horizontal project slider
- Hover effects on cards, links, and buttons
- Responsive layouts for desktop, tablet, and mobile

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
3. Open `index.html` directly in a browser or use the Live Server extension.

## Customization

- Update page content and sections in `index.html`.
- Update colors, layout, responsive styling, and animations in `styles.css`.
- Update counters, navigation behavior, scroll effects, and project controls in `script.js`.

## Author

Theodoros Charisis — Frontend Developer
README.md


# Novaxis Corporate Website

A responsive corporate landing page for an engineering, energy, and infrastructure company, built with HTML, CSS, and vanilla JavaScript.

The project focuses on a modern visual experience with large typography, animated content, interactive project sections, and responsive layouts.

## Features

- Full-screen hero section
- Responsive desktop and mobile navigation
- Smooth scrolling navigation
- Scroll progress indicator
- Scroll-triggered reveal animations
- Animated statistics counters
- Interactive horizontal project slider
- Hover effects on cards, links, and buttons
- Responsive layouts for desktop, tablet, and mobile

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
3. Open `index.html` directly in a browser or use the Live Server extension.

## Customization

- Update page content and sections in `index.html`.
- Update colors, layout, responsive styling, and animations in `styles.css`.
- Update counters, navigation behavior, scroll effects, and project controls in `script.js`.

## Author

Theodoros Charisis — Frontend Developer