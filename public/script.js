/* Optimized interactive script
   - Single mousemove path for cursor + follower using requestAnimationFrame
   - Guards for DOM elements that may be missing on some pages
   - IntersectionObserver + rAF for counters
   - Cleaner hacker text effect
*/

const body = document.body;

/* ---------- HACKER TEXT EFFECT (safer) ---------- */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
const hackerEl = document.querySelector('.hacker-text');

if (hackerEl) {
    hackerEl.addEventListener('mouseover', (event) => {
            const target = event.currentTarget;
            const value = target.dataset.value || target.innerText;
            let iteration = 0;
            const length = value.length;
            const intervalMs = 30;

            const iv = setInterval(() => {
                    target.innerText = target.innerText.split("").map((ch, idx) => {
                            if (idx < iteration) return value[idx];
                            return letters[Math.floor(Math.random() * letters.length)];
                        }

                    ).join("");

                    iteration += 1 / 3;

                    if (iteration >= length) {
                        clearInterval(iv);
                        target.innerText = value;
                    }
                }

                , intervalMs);
        }

    );
}

/* ---------- ANIMATED COUNTERS (IntersectionObserver + rAF) ---------- */
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
                }

            );
        }

        , {
            threshold: 0.4
        }

    );

    counters.forEach(c => io.observe(c));
}

/* ---------- GAME SIMULASI (single safe function) ---------- */
/* ---------- SAFEGUARDS FOR PAGE-SPECIFIC ELEMENTS ---------- */
const choicesArea = document.getElementById('choices-area');

if (choicesArea) {
    choicesArea.addEventListener('mousemove', (e) => e.stopPropagation());
}
