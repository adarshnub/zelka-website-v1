import { GridScan } from "@/components/GridScan";
import { BudgetImpact } from "@/components/sections/BudgetImpact";
import { ServiceSelector } from "@/components/sections/ServiceSelector";
import { HeroTicker } from "@/components/ui/HeroTicker";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const storyBeats = [
  {
    label: "01",
    title: "Brief to Blueprint",
    copy: "We decode your launch goals and stitch the story into AI-ready moodboards, voice, and pacing.",
    stat: "12 hr concept lock",
  },
  {
    label: "02",
    title: "Generative Shoot",
    copy: "Virtual sets, photoreal actors, and motion-captured camera moves keep production nimble yet cinematic.",
    stat: "4x shot coverage",
  },
  {
    label: "03",
    title: "Full-stack Build",
    copy: "While the film renders, our engineers ship the product site, onboarding flows, and launch assets in sync.",
    stat: "1 squad / 3 crafts",
  },
];

const services = [
  {
    title: "AI Product Films",
    body: "Narratives that feel tactile, filmed, and emotional—without renting a single soundstage.",
    badge: "Cinematic Engine",
  },
  {
    title: "AI Ad Shoots",
    body: "Rapid-fire campaign visuals tuned to each platform with consistent brand stylization.",
    badge: "Channel Packs",
  },
  {
    title: "Web Experiences",
    body: "Conversion-grade marketing sites, onboarding flows, and launchpads built with modern stacks.",
    badge: "Next.js / Edge",
  },
  {
    title: "Software Products",
    body: "From prototype to production, we co-build SaaS, internal tools, and AI copilots.",
    badge: "Product Pods",
  },
];

const caseStudies = [
  {
    client: "Atmos Labs",
    result:
      "Launched an AI-shot film & SaaS dashboard in 16 days, converting 38% more enterprise demos.",
    tags: ["AI Film", "Web App", "Brand System"],
  },
  {
    client: "Vera Med",
    result:
      "Generated a regulatory-friendly ad series + multilingual site that doubled trial sign-ups.",
    tags: ["Ad Shoots", "Localization", "Accessibility"],
  },
  {
    client: "Lyra Mobility",
    result:
      "Crafted an adaptive configurator plus a hero reveal that fueled their Series B narrative.",
    tags: ["Configurator", "Product Video", "3D"],
  },
];

const process = [
  {
    title: "Immersion Sprint",
    detail:
      "1-week deep dive to capture your voice, data, and ambition. Outputs playbook + success metrics.",
  },
  {
    title: "Cinematic Engine",
    detail:
      "We set look-dev, performers, motion cues, and lighting inside our AI pipeline for reusable scenes.",
  },
  {
    title: "Experience Build",
    detail:
      "Design, web, and software crews run in parallel with a single design system + QA scoreboard.",
  },
  {
    title: "Launch Studio",
    detail:
      "Final polish, motion handoff, and instrumentation so your team can iterate post-launch.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#040208] text-white">
      <ScrollProgress />
      <header className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,123,255,0.25),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(255,86,178,0.18),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(20,230,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            className="h-full w-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute -left-10 top-1/3 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-ping" />
          <span className="absolute right-12 top-16 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl animate-pulse" />
          <span className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-emerald-300/15 blur-[120px] animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-[#040208]" />

        <nav className="relative z-20 flex items-center justify-between px-6 py-6 text-xs uppercase tracking-[0.4em] text-white/70 md:px-12">
          <span>Zelka</span>
          <div className="hidden gap-5 md:flex">
            <a href="#story" className="transition hover:text-white">
              Story
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#impact" className="transition hover:text-white">
              Budget
            </a>
            <a href="#showcase" className="transition hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <button className="rounded-full border border-white/40 px-5 py-2 text-[10px] tracking-[0.5em] text-white/80 transition hover:border-white hover:text-white">
            Start
          </button>
        </nav>

        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center sm:px-10">
          <ScrollReveal
            as="p"
            className="text-xs uppercase tracking-[0.6em] text-cyan-200/80"
          >
            Welcome to Zelka
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            delay={120}
            className="mt-6 max-w-4xl text-3xl font-semibold leading-tight text-white/90 sm:text-4xl lg:text-5xl"
          >
            AI films, ad shoots, and product builds that launch cinematically.
          </ScrollReveal>
          <ScrollReveal
            as="p"
            delay={220}
            className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            Think production studio + software lab + design house, synchronized
            through automation and taste.
          </ScrollReveal>
          <ScrollReveal
            delay={320}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80"
          >
            {[
              "AI Product Videos",
              "AI Ad Shoots",
              "Website Development",
              "Software Products",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur transition hover:border-white/50 hover:text-white"
              >
                {item}
              </span>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={380} className="flex w-full justify-center">
            <HeroTicker
              items={[
                "AI films on demand",
                "Channel-ready ad shoots",
                "Web experiences in weeks",
                "SaaS + copilots shipped",
              ]}
            />
          </ScrollReveal>
          <ScrollReveal
            delay={430}
            className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.6em] text-white/60"
          >
            <span className="h-0.5 w-12 bg-linear-to-r from-transparent via-white/70 to-transparent" />
            Scroll to explore
            <span className="h-0.5 w-12 bg-linear-to-r from-transparent via-white/70 to-transparent" />
          </ScrollReveal>
        </main>
      </header>

      <section
        id="story"
        className="relative border-t border-white/10 bg-[#050510] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                Story Engine
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                A short-form narrative of working with us
              </h2>
            </div>
            <p className="text-sm text-white/60">
              Every engagement is a mini-series: briefing, shoots, builds, and
              launch beats choreographed together.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {storyBeats.map((beat, index) => (
              <ScrollReveal
                key={beat.label}
                delay={index * 150}
                className="rounded-[28px] border border-white/10 bg-linear-to-b from-white/5 to-transparent p-6 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.5em] text-white/40">
                  {beat.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {beat.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{beat.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  {beat.stat}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative border-t border-white/5 bg-[#04040c] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              What we build
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Modular crews for every launch moment
            </h2>
            <p className="mt-3 text-sm text-white/65">
              Every service is independent—book only AI films, only product
              engineering, or combine them into a single Zelka launch stack.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ScrollReveal
                as="article"
                key={service.title}
                delay={index * 130}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/4 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 blur-3xl transition group-hover:opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 20%, rgba(64,255,211,0.2), transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,109,249,0.3), transparent 50%)",
                  }}
                />
                <div className="relative z-10">
                  <span className="rounded-full border border-white/20 px-4 py-1 text-[11px] uppercase tracking-[0.4em] text-white/70">
                    {service.badge}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{service.body}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:gap-3">
                    Explore playbook
                    <span className="text-base">↗</span>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200} className="mt-12">
            <ServiceSelector />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="impact"
        className="relative border-t border-white/5 bg-[#03030a] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-5xl space-y-10">
          <ScrollReveal className="text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Why AI-native
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Budget clarity in one slider
            </h2>
            <p className="mt-3 text-sm text-white/65">
              Blend automation with human direction to trim set costs, travel,
              and idle time—while aiming higher.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <BudgetImpact />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="showcase"
        className="relative border-t border-white/5 bg-[#06040f] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Launch films with matching software
              </h2>
            </div>
            <p className="max-w-xl text-sm text-white/65">
              We ship film, site, and product as a single release so your
              audience lands exactly where the story points.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <ScrollReveal
                key={study.client}
                delay={index * 140}
                className="rounded-[30px] border border-white/10 bg-linear-to-b from-white/6 to-transparent p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/50">
                  <span>{study.client}</span>
                  <span>↗</span>
                </div>
                <p className="mt-4 text-base text-white/80">{study.result}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-white/70">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative border-t border-white/5 bg-[#04030c] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Operating System
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              A four-beat process that keeps teams aligned
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {process.map((step, index) => (
              <ScrollReveal
                key={step.title}
                delay={index * 120}
                className="rounded-[26px] border border-white/10 bg-white/3 p-6 transition hover:border-white/30"
              >
                <span className="text-xs uppercase tracking-[0.5em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{step.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative border-t border-white/5 bg-[#020208] px-6 py-24 sm:px-10 lg:px-16"
      >
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-white/50">
            Let’s collaborate
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Ready to build an AI-native launch?
          </h2>
          <p className="mt-4 text-sm text-white/65">
            Email us a brief, a Figma link, or a napkin sketch. We’ll respond
            within 24 hours with moodboards, squad sizing, and sprint options.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@zelka.studio"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white"
            >
              hello@zelka.studio
            </a>
            <button className="rounded-full bg-white/90 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-white">
              Book intro call
            </button>
          </div>
        </ScrollReveal>
      </section>

      <footer className="border-t border-white/10 bg-[#010104] px-6 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Zelka Studio. Built with AI precision and
        human judgment.
      </footer>
    </div>
  );
}
