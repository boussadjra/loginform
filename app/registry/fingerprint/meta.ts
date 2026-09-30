import { defineUi } from '~/utils/define-ui'

export default defineUi({
  name: 'Fingerprint',
  tagline: 'A glowing fingerprint of concentric ridges that scans line by line, then resolves to a check.',
  category: 'passkey',
  tags: ['dark', 'biometric', 'scan', 'electric', 'svg'],
  palette: ['#05070d', '#3d8bff', '#8fd3ff', '#1f2a44'],
  fonts: ['Space Grotesk', 'JetBrains Mono'],
  canvas: '#05070d',
})
