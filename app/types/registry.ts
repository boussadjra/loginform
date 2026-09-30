export const UI_CATEGORIES = {
  'sign-in': 'Sign in',
  'sign-up': 'Sign up',
  'magic-link': 'Magic link',
  'otp': 'One-time code',
  'passkey': 'Passkey',
  'reset': 'Password reset',
  'social': 'Social login',
} as const

export type UiCategory = keyof typeof UI_CATEGORIES

/** Authored by hand in `app/registry/<slug>/meta.ts`. */
export interface UiMeta {
  name: string
  tagline: string
  category: UiCategory
  tags: string[]
  /** Swatch colors shown on the gallery card, in order. */
  palette: string[]
  /** Fonts the snippet expects; the preview loads them, consumers add them to their app. */
  fonts?: string[]
  /** Background the preview frame uses behind the snippet. */
  canvas?: string
}

/** A registry entry after its files are collected; `slug` is the folder name. */
export interface UiEntry extends UiMeta {
  slug: string
  html: string
  js?: string
  prompt: string
}
