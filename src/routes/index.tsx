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
import heroImage from "@/assets/hero-rhythm.jpg";
import aboutImage from "@/assets/about-rhythm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhythm Healing | Energy Healing & Holistic Wellness by Dr. Vaishali" },
      {
        name: "description",
        content:
          "Rhythm Healing offers energy healing, counselling, Theta Healing, EFT and inner child healing with Dr. Vaishali. Raise Yourself to Help Mankind.",
      },
      { property: "og:title", content: "Rhythm Healing | Holistic Energy Healing" },
      {
        property: "og:description",
        content:
          "Personalized energy healing and holistic wellness sessions with Dr. Vaishali. Weekend and weekday evening appointments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/919999999999";
const PHONE = "+91 99999 99999";
const EMAIL = "hello@rhythmhealing.in";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Appointments", href: "#appointments" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Sparkles,
    name: "Healing Modality Combination",
    description:
      "An integrative session that weaves together several healing techniques, chosen intuitively for where you are today.",
    benefits: "Deeper transformation, faster release of stuck energy, whole-person balance.",
    suited: "Those who have tried single therapies and are ready for a fuller shift.",
  },
  {
    icon: MessageCircleHeart,
    name: "Private Counselling",
    description:
      "Gentle one-on-one conversations that hold space for what you are carrying, without judgement.",
    benefits: "Emotional clarity, healthier coping, renewed sense of direction.",
    suited: "Anyone navigating stress, transitions or long-held confusion.",
  },
  {
    icon: Users,
    name: "Family Constellation Therapy",
    description:
      "A quiet, revealing process that brings hidden family dynamics into the light so they can soften.",
    benefits: "Healing of inherited patterns, restored harmony in relationships.",
    suited: "Families and individuals feeling repeating relational patterns.",
  },
  {
    icon: HandHeart,
    name: "EFT (Emotional Freedom Technique)",
    description:
      "Guided tapping on gentle acupressure points to let stored emotional charge move through and out.",
    benefits: "Relief from anxiety, calmer nervous system, lighter emotional load.",
    suited: "People seeking a practical, self-usable tool for daily calm.",
  },
  {
    icon: Brain,
    name: "Theta Healing",
    description:
      "A meditative technique that reaches subconscious beliefs shaping your choices and self-worth.",
    benefits: "Positive belief change, expanded confidence, aligned decisions.",
    suited: "Those feeling blocked despite doing all the outer work.",
  },
  {
    icon: Baby,
    name: "Inner Child Healing",
    description:
      "A tender reconnection with the younger part of you that still waits to be heard and comforted.",
    benefits: "Emotional balance, self-compassion, healthier boundaries.",
    suited: "Anyone carrying early wounds into adult relationships.",
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
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full surface-calm"
            >
              <Leaf className="h-4 w-4 text-plum" strokeWidth={1.5} />
            </span>
            <span className="font-display text-xl tracking-tight text-primary">
              Rhythm Healing
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
            src={heroImage}
            alt="Misty pastel mountains reflected in still water with a soft lotus motif"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background/35 backdrop-blur-[1px]"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.32em] text-primary/70">
                Holistic Energy Healing with Dr. Vaishali
              </p>
              <h1 className="mt-6 font-display text-5xl text-primary sm:text-6xl md:text-7xl">
                Raise Yourself to Help Mankind
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-foreground/80 sm:text-lg">
                Rhythm Healing helps you raise your inner vibration and return to holistic
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
                About Rhythm Healing
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground">
                <p>
                  Rhythm Healing began with a simple belief: every person carries an inner
                  rhythm, and healing is the quiet work of returning to it. Dr. Vaishali holds
                  space for that return — with patience, warmth and deep respect for your story.
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
              Why Choose Rhythm Healing
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
              unhurried and fully focused on you.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-card/80 px-5 py-2.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-sage" aria-hidden="true" />
              Sat &amp; Sun, 9 AM – 6 PM · Weekdays, 6 PM – 9 PM
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
              { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
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
            <p className="font-display text-2xl text-primary">Rhythm Healing</p>
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
              { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-sage transition-transform hover:-translate-y-0.5"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <p className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rhythm Healing. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
