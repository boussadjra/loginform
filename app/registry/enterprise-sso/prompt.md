Build a single-file enterprise SSO sign-in screen using only HTML and Tailwind CSS v4 utility classes (arbitrary values allowed, no custom CSS, no UI libraries).

Layout
- Full-viewport corporate navy section (#0b1f44) with a faint 48px blueprint grid (two 1px white/3.5% linear-gradients). Fonts: IBM Plex Sans, IBM Plex Mono for eyebrow and badges.
- Centered 960px card, rounded-2xl, white, deep shadow, split 5fr / 7fr from md up; stacked on phones (navy panel on top, condensed).

Left panel (#102a5c)
- "Meridian" wordmark with a 32px white rounded tile holding a navy globe/meridian line icon.
- Mono eyebrow "WORKSPACE SIGN-IN" (#7fa6ff, 0.14em tracking), then "Your company account, one click away." (30–34px semibold white).
- Desktop only: three check-marked points in #c9d6f0 (SAML 2.0 and OpenID Connect, SCIM user provisioning, SOC 2 Type II and ISO 27001), "Trusted by 4,200 security teams." at the bottom, and a huge faint ring (40px white/4% border) bleeding off the bottom-right corner.

Right panel
- "Sign in to Meridian" (20px semibold) and "Enter your work email and we’ll find your company’s sign-in." (#5a6b8c).
- Form (`data-sso-form`): visible label "Work email", 48px input (type email, autocomplete email, placeholder jordan@acme.com, #cfd8e6 border, blue #2f6bff focus ring).
- Hidden match panel (`data-sso-match`): #eef3ff box with #bcd0ff border, a round IdP icon, org name (`data-sso-org`), "Single sign-on via Okta" (`data-sso-idp`) and a tiny mono protocol badge "SAML" in #2f6bff (`data-sso-proto`).
- Full-width navy (#0b1f44) submit button "Continue with SSO" (`data-sso-submit`).
- Divider "or use your identity provider", then two outlined buttons side by side (stacked on phones): "Google Workspace" (4-color G) and "Microsoft Entra ID" (4 squares).
- A #f3f6fb note with a blue shield icon: "Supports SAML 2.0 and OIDC with any IdP. Admins can connect Okta, OneLogin, Ping or a custom provider under Settings → Security." plus a "Sign in with password" link.

Behaviour
- On input, read the email's domain and look it up in a small map (acme.com → Okta for Acme, SAML; globex.com → Microsoft Entra ID for Globex, OIDC; initech.io → Google Workspace; umbrella.co → OneLogin). On a match, reveal the panel and relabel the button "Continue with Okta for Acme".
- On submit, prevent default, disable and show "Redirecting to Okta…" (or "Looking up your organization…"), then restore (replace with your SSO discovery call).
