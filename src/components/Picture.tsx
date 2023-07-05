import { cn } from "@/lib/utils";

export default function Picture() {
  return (
    <picture>
      <source media="(min-width:768px)" srcSet="/image-product-desktop.jpg" />
      <img
        src="/image-product-mobile.jpg"
        alt="Photo of perfume"
        className={cn(
          "h-[240px] w-auto rounded-t-xl bg-cover bg-center",
          "md:h-auto md:w-1/2 md:rounded-l-xl md:rounded-tr-none"
        )}
      />
    </picture>
  );
}
