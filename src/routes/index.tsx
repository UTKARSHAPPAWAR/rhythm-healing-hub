import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  MessageCircleHeart,
  Users,
  HandHeart,
  Brain,
  Baby,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  Sunrise,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
// Remove this import - import heroImage from "@/assets/hero-rhythm.jpg";
import aboutImage from "@/assets/about-rhythm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rythm Healing | Energy Healing & Holistic Wellness by Dr. Vaishali Joshi" },
      {
        name: "description",
        content:
          "Rythm Healing offers energy healing, counselling, Theta Healing, EFT and inner child healing with Dr. Vaishali. Raise Yourself to Help Mankind.",
      },
      { property: "og:title", content: "Rythm Healing | Holistic Energy Healing" },
      {
        property: "og:description",
        content:
          "Personalized energy healing and holistic wellness sessions with Dr. Vaishali Joshi. Weekend and weekday evening appointments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/919152912579";
const PHONE = "+91 91529 12579";
const EMAIL = "hello@Rythmhealing.in";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Appointments", href: "#appointments" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: MessageCircleHeart,
    name: "Private Counselling - Individual/Family",
    description:
      "Gentle conversations that hold space for you which are navigating you to the right solution",
    benefits: "Emotional clarity, healthier coping, renewed sense of direction.",
    suited: "Anyone struggling through stress, transitions or long-held confusion.",
  },
  {
    icon: HandHeart,
    name: "EFT (Emotional Freedom Tapping) Technique",
    description:
      "Guided tapping on gentle designated points to let stored negative emotional charge move through and out an create space for positivity.",
    benefits: "Relief from anxiety, calmer nervous system, lighter emotional load.",
    suited: "People seeking a practical, self-usable tool for daily calm.",
  },
  {
    icon: Baby,
    name: "Inner Child Healing",
    description:
      "Reparenting your wounded inner child that still waits to be heard and comforted.",
    benefits: "Emotional balance, self-compassion, healthier boundaries.",
    suited: "Anyone carrying early wounds into adult life and relationships.",
  },
  {
    icon: Users,
    name: "Family Constellation Therapy",
    description:
      "Revealing energetic roleplay that brings hidden family dynamics into the light to achieve balance and alignment.",
    benefits:"Healing of negative patterns, restored harmony in relationships and achieving balance in the family.",
    suited: "Families and individuals feeling stuck in pain and sufferings.",
  },
  {
    icon: Brain,
    name: "Theta Healing",
    description:
      "Healing at the level of creators plane (7th plane) of consciousness through meditation",
    benefits: "Positive belief change, needful downloads for healing and chakra healing",
    suited: "Those feeling blocked despite doing all the outer work.",
  },
  {
    icon: Sparkles,
    name: "Healing Modality Combination",
    description:
      "An integrated session that weaves together several healing techniques, chosen intuitively for where you are today.",
    benefits:"Deeper transformation, faster release of stuck energy, whole-person balance.",
    suited:"Those who have tried single therapies and are ready for a fuller shift.",
  },
];

const highlights = [
  { icon: HeartHandshake, label: "Personalized Healing" },
  { icon: ShieldCheck, label: "Confidential Sessions" },
  { icon: Leaf, label: "Holistic Wellness" },
  { icon: Sunrise, label: "Emotional Balance" },
  { icon: Sparkles, label: "Inner Transformation" },
  { icon: CalendarDays, label: "Weekend Availability" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5"
        >
          <a href="#top" className="flex items-center gap-2.5">
            {/* Logo without container */}
            <img 
              src="/logo.png"
              alt="Rythm Healing Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-display text-xl tracking-tight text-primary">
              Rythm Healing
            </span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="transition-colors hover:text-primary" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
          >
            Book a Session
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-24">
          <img
            src="/bg-2.jpg"
            alt="Rythm Healing background"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-sage">
                Holistic Energy Healing with Dr. Vaishali Joshi
              </p>
              <h1 className="mt-6 font-display text-5xl text-primary sm:text-6xl md:text-7xl">
                RYTHM - Raise Yourself to Help Mankind
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-foreground sm:text-lg">
                Rythm Healing helps you raise your inner vibration and return to holistic
                well-being — gently, at your own pace, in a space that is entirely yours.
              </p>

              <a
                href="#contact"
                className="mt-10 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Contact / Book a Session
              </a>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <img
                src={aboutImage}
                alt="Lotus flower, smooth stones and a candle resting on soft lavender linen"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
              />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-4xl text-primary sm:text-5xl">
                About Rythm Healing
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground">
                <p>
                  Rythm Healing began with a simple belief: every person can help themselves if they have the right guidance and tools. 
                  Dr. Vaishali Joshi holds space for that healing and facilitates with patience, warmth and deep respect for your story.
                  It is all about acceptance, understanding, and alignment.
                </p>
                <p>
                  Energy healing works where words often cannot reach. By easing the emotional
                  weight stored in the body, it opens room for clarity, self-compassion and
                  spiritual growth, so that healing becomes lived rather than merely understood.
                </p>
                <p>
                  No two sessions look alike. Each one is shaped around what you bring that day,
                  blending modalities intuitively and always at a pace that feels safe to you.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="surface-calm py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl text-primary sm:text-5xl">
                Our Healing Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Choose a path that speaks to you, or let us find the right combination together.
              </p>
            </Reveal>
            <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal as="li" key={s.name} delay={i * 70}>
                  <article className="card-soft h-full rounded-[1.75rem] p-7">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/60"
                    >
                      <s.icon className="h-5 w-5 text-plum" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-primary">{s.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
                    <dl className="mt-5 space-y-3 border-t border-border/70 pt-5 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.18em] text-sage">
                          Benefits
                        </dt>
                        <dd className="mt-1 text-muted-foreground">{s.benefits}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.18em] text-sage">
                          Suitable for
                        </dt>
                        <dd className="mt-1 text-muted-foreground">{s.suited}</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl text-primary sm:text-5xl">
              Why Choose Rythm Healing
            </h2>
          </Reveal>
          <ul className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.label} delay={i * 60}>
                <div className="card-soft flex h-full flex-col items-center gap-3 rounded-[1.5rem] px-5 py-8 text-center">
                  <h.icon className="h-6 w-6 text-sage" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-xl text-primary">{h.label}</h3>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Appointments */}
        <section id="appointments" className="surface-calm py-24 sm:py-32">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-display text-4xl text-primary sm:text-5xl">Book Your Session</h2>
            <p className="mt-5 text-muted-foreground">
              Sessions are held on <strong className="font-medium text-primary">Saturdays and
              Sundays</strong>, with weekday evening slots available for those who need them.
            </p>
            <p className="mt-3 text-muted-foreground">
              Only a limited number of appointments are taken each week, so every session stays
              unhurried and fully focused on you. Once you reach out, you can expect to hear back within 24 hours.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-card/80 px-5 py-2.5 text-sm text-muted-foreground">
  <Clock className="h-4 w-4 text-sage shrink-0" aria-hidden="true" />
  <span>
    Sat &amp; Sun, 9 AM – 6 PM (By Prior Appointments)
    <br />
    Weekdays, 6 PM – 9 PM (By Prior Appointments)
  </span>
</div>
            <div className="mt-9">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Request a Slot on WhatsApp
              </a>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl text-primary sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Reach out with a question or to find a time that suits you. You will always hear
              back personally.
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              { icon: Phone, label: "Mobile", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
              { icon: MessageCircleHeart, label: "WhatsApp", value: "Chat with us", href: WHATSAPP },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Location", value: "Thane, Maharashtra, India" },
            ].map((c, i) => (
              <Reveal as="li" key={c.label} delay={i * 70}>
                <div className="card-soft flex h-full items-start gap-4 rounded-[1.5rem] p-6">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary"
                  >
                    <c.icon className="h-5 w-5 text-sage" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-1 block text-lg text-primary underline-offset-4 hover:underline"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg text-primary">{c.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>

      <footer className="surface-calm border-t border-border/60">
  <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 text-sm text-muted-foreground sm:grid-cols-3">
    <div>
      <div className="flex items-center gap-3">
        <img 
          src="/logo.png" 
          alt="Rythm Healing Logo"
          className="h-8 w-8 object-contain"
        />
        <p className="font-display text-2xl text-primary">Rythm Healing</p>
      </div>
      <p className="mt-2">Raise Yourself to Help Mankind</p>
    </div>
    <div className="space-y-1">
      <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block hover:text-primary">
        {PHONE}
      </a>
      <a href={`mailto:${EMAIL}`} className="block hover:text-primary">
        {EMAIL}
      </a>
    </div>
    <div className="flex items-start gap-4 sm:justify-end">
      {[
        { icon: Instagram, label: "Instagram", href: "#" },
        { icon: Facebook, label: "Facebook", href: "#" },
        { icon: Linkedin, label: "LinkedIn", href: "#" },
      ].map((s) => (
        <div key={s.label} className="relative group">
          <a
            href={s.href}
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-sage transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-primary/10 cursor-pointer relative"
            onClick={(e) => e.preventDefault()}
          >
            <s.icon className="h-4 w-4" strokeWidth={1.5} />
            <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></span>
          </a>
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs font-medium rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none border border-white/10">
            Coming Soon!
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-white/10"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <p className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
    © {new Date().getFullYear()} Rythm Healing. All rights reserved.
  </p>
</footer>
    </div>
  );
}