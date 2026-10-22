# ColAlta Pharmacy

Marketing website for ColAlta Pharmacy, an independent community pharmacy at 2498 East Colorado Blvd, Pasadena, California. The pharmacy served Glendale from 1122 North Brand since 1951, as Headley’s Pharmacy and then Glendale Pharmacy, and moved to Pasadena in 2024.

The site is a public brochure. It has no accounts, no patient portal, and no online checkout.

## Requirements

- Node.js 20 or newer

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm install
npm run build
```

`npm run build` writes a static site to `out/`. There is no Node server. Host those files as-is.

## Brand

The logo is a transparent cutout of the business-card artwork:

- `public/brand/logo.png` — mortar, pestle, ColAlta script, and PHARMACY lockup (header and footer)
- `public/brand/mark.png` — mortar and pestle only
- `public/icon.svg` — simplified mortar and pestle used for the favicon, apple touch icon, and manifest icons

Brand fonts are self-hosted with `next/font/local` in `app/layout.tsx`. They are not loaded from a CDN.

| File | Name-table family | CSS family registered | CSS variable | Used for |
| --- | --- | --- | --- | --- |
| `public/fonts/FuturaBQ-DemiBold.otf` | Futura BQ (PostScript `FuturaBQ-DemiBold`) | `futura` at weight 600 | `--font-futura` | PHARMACY, navigation, buttons, and other sans UI text (`font-sans`) |
| `public/fonts/SantaFeLetPlain.ttf` | Santa Fe Let Plain (PostScript `SantaFeLetPlain`) | `santaFe` at weight 400 | `--font-santa-fe` | The ColAlta script wordmark and handwriting lines such as “since 1951” and “formerly Glendale Pharmacy” (`font-script`) |

System fonts appear only after those files in the stack: Futura, Century Gothic, and Trebuchet MS for the sans; Segoe Script and cursive for the script. The header and footer also use the logo artwork in `public/brand/logo.png`.

Color tokens in `app/globals.css`. Same hue families as the business card, shifted to quieter earth tones:

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#38281E` | Warm walnut body text |
| `muted` | `#64503E` | Secondary brown text |
| `green` | `#545838` | Buttons, links, and the green bar. Olive moss, dark enough for white text. |
| `pine` | `#3E4228` | Button hover |
| `lime` | `#7A7C58` | Dusty olive, decorative |
| `orange` | `#D09A68` | Ochre accent rules and small labels on dark brown |
| `clay` | `#7E4E3A` | Terracotta for “Confirm with pharmacy” and provisional-hour notes |
| `paper` | `#F3EBDF` | Warm cream page background |
| `card` | `#FBF6EE` | Warm white surfaces |

## Edit the phone number, email, address, and hours

All contact details live in one file: [`lib/site.ts`](lib/site.ts).

The phone, fax, email, and street address below are from the business card. Hours are from the sign posted in the store window.

| Field | Current value |
| --- | --- |
| `phoneDisplay` | `818.244.3164` |
| `phoneHref` | `tel:+18182443164` |
| `faxDisplay` | `818.244.3165` |
| `email` | `contact@glendalepharmacy.net` |
| `address.street` | `2498 East Colorado Blvd` |
| `address.postalCode` | `91107` |
| `since` | `1951` |
| `hours.summary` | `Tue–Thu 9–5:30 · Sat 9–1:30` |
| `hours.rows` | Mon closed, Tue–Thu 9:00 a.m.–5:30 p.m., Fri closed, Sat 9:00 a.m.–1:30 p.m., Sun closed |
| `hours.note` | Empty. Shown under the hours list only when it has text. |
| `hoursConfirmed` | `true`. Opening hours are included in the structured data, and the provisional banner is hidden. |
| `maps.href` | Google Maps search for 2498 East Colorado Blvd, Pasadena, CA 91107 |
| `contactDetailsConfirmed` | `true` for the card’s phone, fax, email, and address |

Service descriptions live in [`lib/services.ts`](lib/services.ts). Leave `confirmWithPharmacy: true` on immunizations, delivery, and refill reminders until the pharmacy confirms those offerings. Do not add license numbers, an NPI, or insurance plans unless they have been confirmed.

## Deploy to GitHub Pages

The site is a static export. `.github/workflows/pages.yml` publishes `out/` on every push to `main`.

1. Push this repository to GitHub.
2. In the GitHub repository, open **Settings → Pages**. Set the source to **GitHub Actions**.
3. The file `public/CNAME` is `colalta.com`. After the first successful deploy, the custom domain in Pages should show that apex host. Turn on **Enforce HTTPS**.
4. At the registrar, point the apex `colalta.com` at GitHub Pages (the A records GitHub shows for apex domains) and point `www.colalta.com` at the GitHub Pages host with a CNAME record. GitHub then redirects www to the apex.
5. No environment variables are required. The site is served from the domain root (`basePath` is unset).

The canonical URL in `lib/site.ts` (`url`) is `https://colalta.com`. Page titles, Open Graph tags, the sitemap, and structured data use that origin. `www` is only the redirect host.

## Before launch

Hours match the posted window sign and `hoursConfirmed` is `true`. If the sign changes, edit `hours.rows` and `hours.summary` in `lib/site.ts`.
