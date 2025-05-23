import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          PIXEVOLVE isn’t just a marketplace — it’s a creative force.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="https://image.ggwp.id/post/20250515/upload_2a613de0db1b814785b1b7be88e3b7d0.jpg"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="https://image.ggwp.id/post/20250515/upload_2a613de0db1b814785b1b7be88e3b7d0.jpg"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              {" "}
              <span className="text-accent-foreground font-bold">
                We support your entire game development journey
              </span>{" "}
              — from characters and UI kits to custom assets and creative partnerships.
            </p>
            {/* <p className="text-muted-foreground">
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p> */}

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Using PIXEVOLVE assets is like having a game art team in your pocket. The quality, flexibility, and speed they provide helped us ship faster and stand out on Steam.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">Digital Happiness</cite>
                  {/* <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  /> */}
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
