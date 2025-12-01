/* Optimized interactive script
   - Single mousemove path for cursor + follower using requestAnimationFrame
   - Guards for DOM elements that may be missing on some pages
   - IntersectionObserver + rAF for counters
*/

const body = document.body;

/* ---------- ANIMATED COUNTERS (IntersectionObserver + rAF) ---------- */
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    if (counters.length) {
        const duration = 1500; // ms

        function animateCount(el, start, end, duration) {
            const startTime = performance.now();

            function tick(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(start + (end - start) * progress);
                el.innerText = value;
                if (progress < 1) requestAnimationFrame(tick);
                else el.innerText = end; // ensure exact
            }

            requestAnimationFrame(tick);
        }

        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = +el.getAttribute('data-target') || 0;
                    animateCount(el, 0, target, duration);
                    obs.unobserve(el);
                }
            });
        }, {
            threshold: 0.4
        });

        counters.forEach(c => io.observe(c));
    }
});

/* ---------- REALITY CHECK: BAR PROGRESS ON VIEW ---------- */
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card, .stat-card-flip');

    if (statCards.length) {
        const ioBars = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const card = entry.target;
                const percent = Math.max(0, Math.min(100, +(card.getAttribute('data-percent') || 0)));
                const bar = card.querySelector('.stat-progress .bar');
                if (bar) {
                    // Trigger width animation
                    requestAnimationFrame(() => {
                        bar.style.width = percent + '%';
                    });
                }
                obs.unobserve(card);
            });
        }, {
            threshold: 0.5
        });

        statCards.forEach((card) => ioBars.observe(card));
    }
});

/* ---------- GAME SIMULASI (single safe function) ---------- */
/* ---------- SAFEGUARDS FOR PAGE-SPECIFIC ELEMENTS ---------- */
document.addEventListener('DOMContentLoaded', () => {
    const choicesArea = document.getElementById('choices-area');

    if (choicesArea) {
        choicesArea.addEventListener('mousemove', (e) => e.stopPropagation());
    }
});

/* ---------- REALITY CHECK: TOGGLE INSIGHTS (clean version) ---------- */
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.stat-toggle');
    if (!btn) return;

    e.preventDefault();

    const card = btn.closest('.stat-card');
    if (!card) return;

    const panel = card.querySelector('.stat-details');
    if (!panel) return;

    const isOpen = card.classList.contains('open');

    if (isOpen) {
        // Close
        card.classList.remove('open');
        panel.style.maxHeight = '0px';
        btn.setAttribute('aria-expanded', 'false');
    } else {
        // Open
        card.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
    }
});
