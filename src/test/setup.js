import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom polyfills/mocks for app code using browser APIs
// Force stub to avoid jsdom "Not implemented" errors
window.scrollTo = vi.fn()
