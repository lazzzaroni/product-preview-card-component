import { cn } from "@/lib/utils";

export default function Description() {
  return (
    <section className={cn("flex w-full flex-col p-6", "md:w-1/2")}>
      <span
        className={cn(
          "text-xs tracking-[0.25rem] text-neutral-very-dark-blue/70",
          "md:py-2"
        )}
      >
        PERFUME
      </span>
      <h1
        className={cn(
          "pb-4 pt-3 font-serif text-3xl font-bold leading-8",
          "md:pr-6"
        )}
      >
        Gabrielle Essence Eau De Parfum
      </h1>
      <p
        className={cn(
          "pr-2 text-sm leading-relaxed text-neutral-very-dark-blue/70",
          "md:py-2 md:pr-3"
        )}
      >
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div
        className={cn("flex items-center gap-4 pb-4 pt-6", "md:pb-6 md:pt-5")}
      >
        <span className="font-serif text-3xl font-bold text-primary-dark-cyan">
          $149.99
        </span>
        <span className="text-xs text-neutral-very-dark-blue/70 line-through decoration-primary-dark-cyan/70">
          $169.99
        </span>
      </div>
      <button className="flex w-auto items-center justify-center gap-3 rounded-lg bg-primary-dark-cyan py-3.5 text-sm font-semibold text-neutral-white hover:bg-primary-hover-cyan active:bg-primary-hover-cyan/90">
        <IconCart />
        Add to Cart
      </button>
    </section>
  );
}

function IconCart() {
  return (
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
        fill="currentColor"
      />
    </svg>
  );
}
