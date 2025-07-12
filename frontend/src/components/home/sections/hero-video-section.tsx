import { HeroVideoDialog } from '@/components/home/ui/hero-video-dialog';
import { SectionHeader } from '@/components/home/section-header';

export function HeroVideoSection() {
  return (
    <section
      id="demo"
      className="flex flex-col items-center justify-center gap-10 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
          Watch Intelligence in Motion
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Watch how Xera executes complex workflows with precision and autonomy
        </p>
      </SectionHeader>

      <div className="relative px-6">
        <div className="relative w-full max-w-3xl mx-auto shadow-xl rounded-2xl overflow-hidden">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/2USUfv7klr8"
            thumbnailSrc="/xera-thumbnail-light.png"
            thumbnailAlt="Xera Demo Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/2USUfv7klr8"
            thumbnailSrc="/xera-thumbnail-dark.png"
            thumbnailAlt="Xera Demo Video"
          />
        </div>
      </div>
    </section>
  );
}
