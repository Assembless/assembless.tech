const makeLink = (title: string, href: string) => ({ title, href });
export const FOOTER_LINKS = Object.freeze([
  [
    makeLink(`Open source`, `https://github.com/Assembless/`),
    makeLink(`Academy`, `https://assembless.academy/`),
    makeLink(`Flava`, `https://flava.com/`),
  ],
  [
    makeLink(
      `Impressum`,
      `https://docs.google.com/document/d/11UM4mSUUN37EPbXi58jCJzjBRl4bn_Rj7sZIJ7L5lBI/edit?usp=sharing`,
    ),
    makeLink(
      `Privacy policy`,
      `https://docs.google.com/document/d/1lofZ3R3GZWEDQhWgV-y1mNfcIXiKt9c9dy8vq6gXDxs/edit?usp=sharing`,
    ),
  ],
  [
    makeLink(`Donate`, `https://github.com/Assembless/`),
    makeLink(`Illustrations by Icons8`, `https://icons8.com/`),
  ],
]);
