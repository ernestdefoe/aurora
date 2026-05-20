# Aurora Theme for Flarum

An aurora-inspired theme for [Flarum](https://flarum.org/) featuring animated
gradient backdrops, glassmorphic panels, glowing accents, and a dark night-sky
palette.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Flarum](https://img.shields.io/badge/Flarum-%5E1.8.0-orange.svg)

## Highlights

- **Animated aurora backdrop** — drifting radial gradients in violet, cyan,
  teal, pink, and magenta on a deep night-sky base.
- **Glassmorphic surfaces** — frosted header, sidebar, discussion cards,
  composer, modals, and dropdowns.
- **Gradient buttons & badges** — primary buttons shimmer; unread counts pulse
  with a cool glow.
- **Glowing avatars & focus rings** — soft cyan/pink halos on hover and focus.
- **Gradient scrollbar & text** — gradient-clipped headings, usernames, and
  scrollbar thumb.
- **Configurable** — admin settings for gradient colors, accent color, and
  toggles for glassmorphism, glow, and background animation.
- **Accessible** — honors `prefers-reduced-motion`, visible focus rings.

## Installation

```bash
composer require ernestdefoe/flarum-aurora-theme
```

Then enable **Aurora Theme** under **Admin → Extensions**.

## Configuration

Open **Admin → Extensions → Aurora Theme** to customize:

| Setting | Default | Description |
| --- | --- | --- |
| Primary gradient — start | `#7c3aed` | First color of the primary gradient. |
| Primary gradient — end | `#22d3ee` | Last color of the primary gradient. |
| Accent color | `#f472b6` | Warm accent used for hover halos. |
| Enable glassmorphism | `on` | Frosted-glass panels with backdrop blur. |
| Enable glow effects | `on` | Soft glows on hover, focus, and unread items. |
| Animate aurora background | `on` | Drifting gradient blobs in the backdrop. |

## Development

```bash
git clone https://github.com/ernestdefoe/flarum-aurora-theme.git
cd flarum-aurora-theme/js
npm install
npm run build      # production bundle
npm run dev        # watch mode
```

### Project layout

```
extend.php              Flarum extension bootstrap
composer.json           Package manifest
less/
  forum.less            Forum-facing styles
  admin.less            Admin-facing styles
  variables.less        Color palette, radii, easings
  mixins.less           .aurora-glass, .aurora-text-gradient, ...
  animations.less       drift, shimmer, pulse, float, fade-up
js/
  forum.js, admin.js    Webpack entry points
  src/forum/index.js    Frontend: settings, scroll header, ripple
  src/admin/index.js    Admin: registers settings
  dist/                 Compiled bundles (committed)
resources/locale/
  en.yml                English admin strings
```

## Compatibility

- Flarum core `^1.8.0`
- Modern browsers with `backdrop-filter` support. Older browsers gracefully
  degrade to solid dark surfaces.

## License

[MIT](LICENSE) © Ernest Defoe
