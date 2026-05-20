import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';

app.initializers.add('ernestdefoe/flarum-aurora-theme', () => {
    applyThemeVariables();
    enableScrollAwareHeader();
    enableRippleButtons();
});

function applyThemeVariables() {
    const settings = app.forum.data.attributes;
    const root = document.documentElement;

    const start = settings['aurora-theme.primary_gradient_start'];
    const end = settings['aurora-theme.primary_gradient_end'];
    const accent = settings['aurora-theme.accent_color'];

    if (start) root.style.setProperty('--aurora-gradient-start', start);
    if (end) root.style.setProperty('--aurora-gradient-end', end);
    if (accent) root.style.setProperty('--aurora-accent', accent);

    if (settings['aurora-theme.animate_background'] === false) {
        document.body.classList.add('aurora-no-animation');
    }

    if (settings['aurora-theme.enable_glassmorphism'] === false) {
        document.body.classList.add('aurora-no-glass');
    }

    if (settings['aurora-theme.enable_glow'] === false) {
        document.body.classList.add('aurora-no-glow');
    }
}

function enableScrollAwareHeader() {
    const header = document.querySelector('.App-header');
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;

        requestAnimationFrame(() => {
            const y = window.scrollY;
            header.classList.toggle('Aurora-header--scrolled', y > 12);
            header.classList.toggle('Aurora-header--hidden', y > lastY && y > 120);
            lastY = y;
            ticking = false;
        });
    }, { passive: true });
}

function enableRippleButtons() {
    document.addEventListener('click', (event) => {
        const button = event.target.closest('.Button--primary');
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'Aurora-ripple';
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
}
