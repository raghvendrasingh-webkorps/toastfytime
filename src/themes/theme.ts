export function resolveTheme(theme: "light" | "dark" | "auto") {
  if (theme === "auto") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? "dark" : "light";
  }

  return theme;
}
