type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
};

export const images: GalleryImage[] = [
  {
    src: "/gungor.webp",
    alt: "Gungor i en lekparkpark",
    caption: "Gunga mot skyn",
  },
  {
    src: "/magnatiles2.webp",
    alt: "Magnatiles byggleksaker",
    caption: "Bygg med magnetleksaker",
  },
  {
    src: "/lekrum.webp",
    alt: "Lekrum med leksaker",
    caption: "Vårt fina lekrum",
  },
  {
    src: "/brio.webp",
    alt: "Brio tågräls",
    caption: "Skapa en fantasivärld med Brio",
  },
  {
    src: "/pennor.webp",
    alt: "Färgpennor",
    caption: "Rita och måla",
  },
  {
    src: "/masmo.webp",
    alt: "Solnedgång i Masmo",
    caption: "Vackra omgivningar i närområdet",
    objectPosition: "left center",
  },
  {
    src: "/lekplats.webp",
    alt: "Lekplats",
    caption: "Äventyr i lekparken",
  },
  {
    src: "/perler.webp",
    alt: "Pärlor i olika färger",
    caption: "Lägga pärlplattor",
  },
  {
    src: "/odlingslott.webp",
    alt: "Odlingslott",
    caption: "Plantera, vattna eller skörda i odlingslotten",
  },
];
