/** Imágenes de la propuesta: tamaños precomprimidos para la exportación estática. */
export function FotoEditorial({
  nombre,
  alt,
  sizes = "(min-width: 80rem) 600px, (min-width: 48rem) calc((100vw - 7rem) / 2), 40vw",
  claseImg = "aspect-[4/3] h-auto w-full",
}: {
  nombre: "abeja" | "avispa" | "equipo";
  alt: string;
  sizes?: string;
  claseImg?: string;
}) {
  return (
    <picture className="contents">
      <source
        type="image/avif"
        srcSet={`/img/${nombre}-480.avif 480w, /img/${nombre}-800.avif 800w, /img/${nombre}-1200.avif 1200w`}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={`/img/${nombre}-480.webp 480w, /img/${nombre}-800.webp 800w, /img/${nombre}-1200.webp 1200w`}
        sizes={sizes}
      />
      <img
        src={`/img/${nombre}-1200.webp`}
        width={1200}
        height={900}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`block bg-paper-press object-cover ${claseImg}`}
      />
    </picture>
  );
}
