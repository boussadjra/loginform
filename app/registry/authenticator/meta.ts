import { defineUi } from '~/utils/define-ui'

export default defineUi({
  name: 'Authenticator',
  tagline: 'A midnight two-factor prompt with an app icon, a live 30-second TOTP countdown ring and six code boxes.',
  category: 'otp',
  tags: ['totp', '2fa', 'dark', 'countdown-ring'],
  palette: ['#070d1a', '#111a2e', '#34d399', '#e2e8f0'],
  fonts: ['Manrope'],
  canvas: '#070d1a',
})
