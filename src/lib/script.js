/* Optimized interactive script
   - Single mousemove path for cursor + follower using requestAnimationFrame
   - Guards for DOM elements that may be missing on some pages
   - IntersectionObserver + rAF for counters
   - Cleaner hacker text effect
*/

const body = document.body;

/* ---------- CUSTOM CURSOR (fast, rAF) ---------- */
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Disable follower rendering to improve cursor responsiveness.
// Set to `true` to re-enable follower animation later.
const followerEnabled = false;

// If follower element exists, hide it immediately when disabled.
if (!followerEnabled && follower) follower.style.display = 'none';

let mouseX = 0,
    mouseY = 0;
let followerX = 0,
    followerY = 0;
let rafId;

function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // just update coordinates here; do DOM writes in rAF loop
}

function animateFollower() {
    // simple lerp for smooth follower (only when enabled)
    if (followerEnabled && follower) {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.transform = `translate3d(${followerX - 10}px, ${followerY - 10}px, 0)`;
    }

    // update cursor position every frame (kept lightweight)
    if (cursor) cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    rafId = requestAnimationFrame(animateFollower);
}

if (cursor || follower) {
    document.addEventListener('mousemove', onMouseMove, {
        passive: true
    });
    rafId = requestAnimationFrame(animateFollower);
}

/* When a page doesn't need the custom cursor (e.g., inside game), toggle via class on body */
function setCustomCursorEnabled(enabled) {
    if (enabled) body.classList.remove('game-active');
    else body.classList.add('game-active');
}

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
// Toggle custom cursor on simulation page (detect by `.sim-fullscreen`)
const simFull = document.querySelector('.sim-fullscreen');
if (simFull) setCustomCursorEnabled(false);
else setCustomCursorEnabled(true);

/* NOTE: 3D tilt is handled in page-specific script (js/simulation.js) to avoid
   attaching multiple global mousemove listeners which can cause cursor lag. */

/* ---------- SAFEGUARDS FOR PAGE-SPECIFIC ELEMENTS ---------- */
const simSection = document.querySelector('.sim-section');
if (simSection) {
    simSection.addEventListener('mouseenter', () => setCustomCursorEnabled(false));
    simSection.addEventListener('mouseleave', () => setCustomCursorEnabled(true));
}

const choicesArea = document.getElementById('choices-area');

if (choicesArea) {
    choicesArea.addEventListener('mousemove', (e) => e.stopPropagation());
}
