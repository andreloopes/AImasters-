/* ==========================================================================
   AI MASTERS · INTERAÇÕES ORGANIC DESIGN
   - Scroll-triggered reveals via Intersection Observer
   - Contadores animados nas stats
   - Nav background condicional (classe .scrolled)
   - Sem dependências externas
   ========================================================================== */

(() => {
  'use strict';

  /* -------------- SCROLL REVEAL -------------- */
  const revealEls = document.querySelectorAll('.reveal');

  revealEls.forEach(el => {
    const delay = el.dataset.delay || 0;
    el.style.setProperty('--reveal-delay', delay);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* -------------- STAGGER WITHIN GRIDS -------------- */
  const staggerGroups = [
    { selector: '.pilares__grid .pilar', step: 80 },
    { selector: '.timeline__item', step: 100 },
    { selector: '.dimensions li', step: 70 },
  ];

  staggerGroups.forEach(({ selector, step }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.setProperty('--reveal-delay', i * step);
    });
  });

  /* -------------- ANIMATED COUNTERS -------------- */
  const counters = document.querySelectorAll('.stat__num[data-count]');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing - easeOutElastic-ish for organic feel
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(target * eased);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => counterObserver.observe(c));

  /* -------------- NAV SCROLL STATE -------------- */
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  const handleScroll = () => {
    const y = window.scrollY;
    if (y > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* -------------- SMOOTH SCROLL OFFSET -------------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* -------------- HERO PARALLAX (subtle) -------------- */
  const heroArt = document.querySelector('.hero__art-container');
  if (heroArt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < 800) {
            heroArt.style.transform = `translateY(${y * 0.08}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
