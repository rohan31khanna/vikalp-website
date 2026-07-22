export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  // Final sticky navbar height
  const NAVBAR_HEIGHT = 72;

  // Small breathing space below navbar
  const EXTRA_OFFSET = 4;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    NAVBAR_HEIGHT -
    EXTRA_OFFSET;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  window.history.replaceState(
    null,
    "",
    id === "home" ? "/" : `#${id}`
  );
}