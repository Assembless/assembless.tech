const makeLink = (title: string, href: string) => ({ title, href });
export const FOOTER_LINKS = Object.freeze([
  [
    makeLink(`Open source`, `https://github.com/Assembless/`),
    makeLink(`Academy`, `https://github.com/Assembless/`),
    makeLink(`Flava`, `https://flava.com/`),
  ],
  [
    makeLink(`Impressum`, `https://google.com/`),
    makeLink(`Privacy policy`, `https://google.com/`),
    makeLink(`Careers`, `https://google.com/`),
  ],
  [
    makeLink(`Donate`, `https://github.com/Assembless/`),
    makeLink(`Illustrations by Icons8`, `https://icons8.com/`),
  ],
]);
