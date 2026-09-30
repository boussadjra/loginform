// Domain detection demo: maps a work email's domain to its SSO provider. Replace the map and timeout with your SSO discovery call.
{
  const form = document.querySelector('[data-sso-form]')
  if (form) {
    const directory = {
      'acme.com': { org: 'Acme', idp: 'Okta', proto: 'SAML' },
      'globex.com': { org: 'Globex', idp: 'Microsoft Entra ID', proto: 'OIDC' },
      'initech.io': { org: 'Initech', idp: 'Google Workspace', proto: 'OIDC' },
      'umbrella.co': { org: 'Umbrella', idp: 'OneLogin', proto: 'SAML' },
    }
    const input = form.querySelector('input[type="email"]')
    const match = form.querySelector('[data-sso-match]')
    const submit = form.querySelector('[data-sso-submit]')
    const set = (sel, text) => { const el = form.querySelector(sel); if (el) el.textContent = text }
    let found = null

    const detect = () => {
      const domain = input.value.trim().toLowerCase().split('@')[1] ?? ''
      found = directory[domain] ?? null
      if (match) match.hidden = !found
      if (found) {
        set('[data-sso-org]', found.org)
        set('[data-sso-idp]', `Single sign-on via ${found.idp}`)
        set('[data-sso-proto]', found.proto)
      }
      submit.textContent = found ? `Continue with ${found.idp} for ${found.org}` : 'Continue with SSO'
    }

    input?.addEventListener('input', detect)
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      submit.disabled = true
      submit.textContent = found ? `Redirecting to ${found.idp}…` : 'Looking up your organization…'
      setTimeout(() => { submit.disabled = false; detect() }, 1400)
    })
  }
}
