export type RouteList = Array<{
  url: string;
  label: string;
}>;

export const scrollToSection = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
};
