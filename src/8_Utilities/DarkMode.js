/**
 * Dark Mode Utility Component
 *
 * Detects if app/website visitor has their `prefers-color-scheme` set to dark
 */

const DarkMode = () => {
  const prefersDark =
    typeof window !== `undefined`
      ? window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      : null

  if (typeof document !== `undefined`) {
    if (prefersDark) {
      document.body.classList.add("--dark")
    }
  }
  return null
}

export default DarkMode
