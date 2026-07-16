const header = document.querySelector("[data-header]");
const progressBar = document.querySelector("[data-progress-bar]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileLinks = mobileMenu?.querySelectorAll("a") ?? [];
const projectTrack = document.querySelector("[data-project-track]");
const previousProjectButton = document.querySelector("[data-project-previous]");
const nextProjectButton = document.querySelector("[data-project-next]");

const updateScrollEffects = () => {
  const scrollTop = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

  header?.classList.toggle("is-scrolled", scrollTop > 30);

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
};

const toggleMenu = () => {
  const isOpen = mobileMenu?.classList.toggle("is-open") ?? false;
  menuButton?.classList.toggle("is-active", isOpen);
  menuButton?.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
};

menuButton?.addEventListener("click", toggleMenu);
mobileLinks.forEach((link) => link.addEventListener("click", toggleMenu));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 },
);

document
  .querySelectorAll(".reveal-section, .reveal-item")
  .forEach((element) => revealObserver.observe(element));

const formatCounter = (value) => new Intl.NumberFormat("en-US").format(value);

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const targetValue = Number(counter.dataset.counter ?? 0);
      const duration = 1600;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.round(targetValue * easedProgress);

        counter.textContent = formatCounter(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
      observer.unobserve(counter);
    });
  },
  { threshold: 0.7 },
);

document
  .querySelectorAll("[data-counter]")
  .forEach((counter) => counterObserver.observe(counter));

const getProjectScrollAmount = () => {
  const card = projectTrack?.querySelector(".project-card");
  return card ? card.getBoundingClientRect().width + 20 : 520;
};

previousProjectButton?.addEventListener("click", () => {
  projectTrack?.scrollBy({ left: -getProjectScrollAmount(), behavior: "smooth" });
});

nextProjectButton?.addEventListener("click", () => {
  projectTrack?.scrollBy({ left: getProjectScrollAmount(), behavior: "smooth" });
});

window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();
