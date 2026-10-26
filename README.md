# Abinaya — Freelance Web Designer & Developer Portfolio

A production-quality, editorial creative-agency style freelance portfolio website built for **Abinaya**. Designed to win real freelance clients with minimal luxury aesthetics, business-focused copy, and interactive showcase cards.

---

## ✦ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Playfair Display*)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Deployment**: Configured for [Vercel](https://vercel.com/)

---

## ✦ Core Features & Structure

1. **Sticky Navbar (`Navbar.jsx`)**: Responsive navigation with subtle scroll blur, CTA button, and animated mobile drawer.
2. **Full-Screen Hero (`Hero.jsx`)**: Dominant typography, status beacon (*Available for freelance projects • India*), and an interactive floating macOS browser mockup of *Haven Interiors*.
3. **Value Proposition (`ValueProp.jsx`)**: Large editorial statement and 3 core business pillars.
4. **Services Showcase (`Services.jsx`)**: 6 business service cards with icons, highlights, and enquiry triggers.
5. **Featured Projects (`Projects.jsx`)**:
   - **Haven Interiors** (Interior Design) — Large horizontal feature showcase with browser chrome.
   - **The Hidden Courtyard** (Boutique Hospitality)
   - **Aarav Kapoor Photography** (Photography / Personal Brand)
   - **Eternal Moments** (Wedding Planning)
   - **Forge Fitness & Yoga** (Fitness & Wellness)
   - Live external links with `target="_blank" rel="noopener noreferrer"`.
   - Category filtering pills.
6. **About (`About.jsx`)**: Concise client-focused narrative highlighting Design, Development, and Business value.
7. **Why Work With Me (`WhyWorkWithMe.jsx`)**: 4 pillars (Business First, Responsive by Default, Clear UX, End-to-End Support).
8. **Interactive Process (`Process.jsx`)**: 5-stage interactive workflow timeline (Discover, Plan, Design, Build, Launch) with key deliverables.
9. **Tools I Work With (`Skills.jsx`)**: Minimal grouped pills for Frontend, Backend, Database, and Tools.
10. **Industries (`Industries.jsx`)**: 8 sectors tailored for small businesses and creators.
11. **Portfolio Expansion (`PortfolioCallout.jsx`)**: Invitation to collaborate on real projects (no fake testimonials).
12. **Project Enquiry Contact (`Contact.jsx`)**:
    - Comprehensive form with name, email, business, website type, budget dropdowns, and message details.
    - Full client-side validation with instant visual feedback.
    - Direct communication channels: Email, WhatsApp, LinkedIn, GitHub, Instagram.
13. **Final Dramatic CTA (`FinalCta.jsx`)**: High-impact editorial call to action.
14. **Footer (`Footer.jsx`)**: Complete footer with navigation, copyright, and smooth "Back to top" button.

---

## ✦ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✦ Connecting a Backend or Form Handler

In [`src/components/Contact.jsx`](file:///c:/Users/Lenovo/Documents/portfolio/src/components/Contact.jsx), the `handleSubmit` handler is structured for quick plug-and-play integration:

### Option A: Formspree
1. Create a free form at [formspree.io](https://formspree.io)
2. Replace the simulated timeout with:
   ```javascript
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData)
   });
   ```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Run `npm install @emailjs/browser`
3. Call `emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY")`

### Option C: Web3Forms
1. Get an access key at [web3forms.com](https://web3forms.com)
2. Send formData with `access_key` in the request body.

---

© 2026 Abinaya. All rights reserved.
