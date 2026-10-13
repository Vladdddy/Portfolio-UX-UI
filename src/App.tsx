import { useEffect, useRef, useState, type CSSProperties } from "react"

const assetPathPrefix = "/assets"
const brandMark = `${assetPathPrefix}/24ff1.png`
const arrowIcon = `${assetPathPrefix}/6daa1.svg`

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Work experience" },
  { href: "#about", label: "About me" },
  { href: "#contact", label: "Contact me" },
]

const heroBlobs = [
  {
    color: "#5B00DA",
    shape:
      "M1045.83 374.685C1044.66 514.117 874.586 635.837 652.138 633.983C429.69 632.128 142.859 456.607 144.021 317.175C145.184 177.743 319.094 176.236 541.542 178.09C763.99 179.945 1046.99 235.253 1045.83 374.685Z",
  },
  {
    color: "#16E8FF",
    shape:
      "M1040.11 589.417C932.818 707.205 681.038 731.231 474.407 625.975C267.776 520.72 133.214 238.073 240.507 120.286C347.8 2.49855 511.597 82.2772 718.228 187.533C924.859 292.788 1147.4 471.63 1040.11 589.417Z",
  },
  {
    color: "#E90042",
    shape:
      "M349.699 632.371C171.863 521.082 123.301 348.406 266.047 250.508C408.793 152.611 814.581 163.92 992.416 275.209C1170.25 386.498 1062.44 465.384 919.694 563.282C776.948 661.179 527.534 743.66 349.699 632.371Z",
  },
]

type Project = {
  slug: string
  title: string
  duration: string
  format: "Website" | "App"
  redesign: boolean
  image: string
  imageAlt: string
  description: string
  // Long-form copy for the project page, one string per paragraph.
  caseStudy: string[]
  links: { label: string; href: string }[]
  // Path to an exported .fig file in /public; leave it out to hide the download button.
  figmaFile?: string
  // One wide image on top, then a row of phone screenshots with short captions.
  gallery?: {
    main: GalleryImage
    screens: (GalleryImage & { caption: string })[]
  }
}

type GalleryImage = { src: string; alt: string }

const malImages = `${assetPathPrefix}/figma-projects/images`

const projects: Project[] = [
  {
    slug: "newmann",
    title: "Newmann",
    duration: "2+ months",
    format: "Website",
    redesign: false,
    image: `${assetPathPrefix}/14dea.png`,
    imageAlt:
      "Newmann AI email assistant shown on two overlapping phone mockups",
    description:
      "Gmail oriented dashboard that helps users manage their labels with AI and many more features.",
    caseStudy: [
      "I designed the full UX/UI of Newmann from scratch, taking it from the very first wireframes to what it is today across three products: the main website, the landing page, and the dashboard, which is Newmann's core product.",
      "I also built the frontend of all three with Next.js and Tailwind CSS, so I owned each product from the first sketch to the code running in production.",
      "I can't go into much detail, as I'm bound by an agreement not to share the project's internals. In short, Newmann helps users manage their email labels with the help of AI, which creates labels based on custom rules that each user chooses.",
    ],
    links: [
      { label: "newmann.ai", href: "https://newmann.ai/" },
      { label: "landing.newmann.ai", href: "https://landing.newmann.ai/" },
    ],
  },
  {
    slug: "my-anime-list",
    title: "My Anime List",
    duration: "6 days",
    format: "App",
    redesign: true,
    image: `${assetPathPrefix}/513e9.png`,
    imageAlt:
      "My Anime List redesign shown across dark-mode discovery and account screens",
    description:
      "A focused mobile redesign that makes seasonal discovery, personal lists, statistics, and preferences easier to navigate.",
    caseStudy: [
      "I redesigned My Anime List because the current app felt hard to use: finding what's airing this season, managing your lists, and simply getting around took more effort than it should.",
      "My goal was to bring more value to seasonal anime and give a clearer overview of the whole app. I rebuilt the interface with a cleaner, more modern look, simplifying the navigation so the most important content is always just a tap away.",
      "This isn't a finished, page-by-page redesign. I focused on the core concept: the key screens and the visual system that the rest of the app could be built on.",
    ],
    links: [],
    figmaFile: `${assetPathPrefix}/figma-projects/My Anime List.fig`,
    gallery: {
      main: {
        src: `${malImages}/top-main.png`,
        alt: "Before and after of the seasonal screen: the old blue layout next to the new dark design",
      },
      screens: [
        {
          src: `${malImages}/bottom-left.png`,
          alt: "My List screen with watching progress for each anime",
          caption: "My List",
        },
        {
          src: `${malImages}/bottom-left2.png`,
          alt: "Account screen with statistics and preferences",
          caption: "Account",
        },
        {
          src: `${malImages}/bottom-right.png`,
          alt: "Anime detail sheet for Sousou no Frieren",
          caption: "Anime details",
        },
        {
          src: `${malImages}/bottom-right2.png`,
          alt: "Edit screen for episode progress, status and score",
          caption: "Edit progress",
        },
      ],
    },
  },
]

const experience = [
  {
    periods: ["Oct 2025 — Now"],
    title: "Founding Frontend & UX",
    organization: "Newmann",
    details: [
      "Designed and coded the frontend of the AI-powered dashboard using Next.js and Tailwind CSS.",
      "Designed and created the main website of Newmann.",
      "Designed and created the landing page to promote the product.",
    ],
  },
  {
    periods: ["Dec 2025 — May 2026", "Jun 2025 — Aug 2025"],
    title: "Web Development Intern",
    organization: "CAE",
    details: [
      "Engineered a web application for managing and tracking tasks of flight simulators using React, Tailwind CSS, Express and SQL.",
      "Allows technicians to create, update, and delete tasks, as well as assign them to specific simulators and track their shifts.",
      "The application is being used internally by all technicians to maintain and manage the flight simulators.",
    ],
  },
]

const education = [
  {
    periods: ["Jan 2024 — Jun 2026"],
    title: "Web Development",
    organization: "ITSINCOM",
    details: [
      "Activities and societies: Web Development, Backend, Frontend, Softskills, Digital Security.",
    ],
  },
  {
    periods: ["Sep 2019 — Jun 2024"],
    title: "IT Highschool",
    organization: "ITIS Ponti",
    details: [
      "Basic programming lessons in Python, Java, C, and HTML.",
      "Computer Science lessons covering topics such as algorithms, data structures, and software development principles.",
    ],
  },
]

const aboutGroups = [
  {
    label: "Certificates",
    items: [
      { name: "Cambridge Linguaskill", note: "English — B2" },
      { name: "Boolean", note: "Basic web development" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Italian", note: "Native" },
      { name: "English", note: "B2" },
      { name: "Ukrainian", note: "Advanced" },
      { name: "Russian", note: "Advanced" },
    ],
  },
]

type TimelineEntry = (typeof experience)[number]

// Marks an element to fade up into place when it scrolls into view (see `useScrollReveal`).
function reveal(
  delay = 0,
  variant: "up" | "panel" | "image" | "line" = "up",
) {
  return {
    "data-reveal": variant,
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  }
}

// Re-runs whenever `pageKey` changes so a newly rendered page gets observed too.
function useScrollReveal(pageKey: string) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const root = document.documentElement
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-revealed")
          observer.unobserve(entry.target)
        }
      },
      // No negative bottom margin: content at the very end of the page must still trigger.
      { threshold: 0.15 },
    )

    root.classList.add("reveal-ready")
    document
      .querySelectorAll("[data-reveal]:not(.is-revealed)")
      .forEach((element) => observer.observe(element))

    // `reveal-ready` stays on so the next page's content is hidden from its first paint.
    return () => observer.disconnect()
  }, [pageKey])
}

// Project pages live at `#/project/<slug>`; every other hash is a section on the home page.
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return hash
}

const projectRoutePrefix = "#/project/"

function ProjectPage({ project }: { project: Project }) {
  const index = projects.indexOf(project)
  const nextProject = projects[(index + 1) % projects.length]

  return (
    <>
      <section className="px-4 pt-24 sm:px-6 sm:pt-28">
        <div
          {...reveal(0, "panel")}
          className="contact-panel project-cover"
          aria-hidden="true"
        >
          <div className="contact-art">
            <span className="contact-shape contact-shape--cyan" />
            <span className="contact-shape contact-shape--pink" />
            <span className="contact-shape contact-shape--violet" />
          </div>
        </div>
      </section>

      <section className="page-section pt-14 sm:pt-20">
        <a {...reveal(120)} href="#projects" className="project-back">
          <img src={arrowIcon} alt="" width="20" height="20" />
          All projects
        </a>

        <h1
          {...reveal(180)}
          className="mt-8 font-['Onest:Light'] text-[clamp(3.25rem,9vw,9rem)] leading-[0.92] font-light tracking-[-0.055em]"
        >
          {project.title}
        </h1>

        <div
          {...reveal(260)}
          className="mt-10 flex flex-wrap items-end gap-x-14 gap-y-6 sm:mt-14"
        >
          <dl className="flex gap-x-14">
            <div>
              <dt className="text-xs text-black/55">Timeline</dt>
              <dd className="mt-1.5 text-lg">{project.duration}</dd>
            </div>
            <div>
              <dt className="text-xs text-black/55">Type</dt>
              <dd className="mt-1.5 text-lg">{project.format}</dd>
            </div>
          </dl>
          {project.redesign && <span className="project-tag">Redesign</span>}
        </div>
      </section>

      <div {...reveal(340, "line")} className="page-section project-divider" />

      <section className="page-section grid gap-14 py-16 sm:gap-16 sm:py-24">
        <div {...reveal()} className="project-detail">
          <h2 className="text-xs text-black/55">Description</h2>
          <div className="grid max-w-2xl gap-5 text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
            {project.caseStudy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {project.gallery && (
          <div {...reveal()} className="project-detail">
            <h2 className="text-xs text-black/55">Images</h2>
            <div className="project-gallery">
              <img
                {...reveal(100, "image")}
                src={project.gallery.main.src}
                alt={project.gallery.main.alt}
                width="1351"
                height="1164"
                loading="lazy"
                className="project-gallery-main"
              />
              <ul {...reveal(200, "image")} className="project-screens">
                {project.gallery.screens.map((screen) => (
                  <li key={screen.src}>
                    <figure className="iphone">
                      <div className="iphone-body">
                        <img
                          src={screen.src}
                          alt={screen.alt}
                          width="390"
                          height="847"
                          loading="lazy"
                        />
                      </div>
                      <figcaption>{screen.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {project.links.length > 0 && (
          <div {...reveal()} className="project-detail">
            <h2 className="text-xs text-black/55">Links</h2>
            <ul className="flex flex-col gap-3">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {link.label}
                    <img src={arrowIcon} alt="" width="20" height="20" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.figmaFile && (
          <div {...reveal()} className="project-detail">
            <h2 className="text-xs text-black/55">Design file</h2>
            <div>
              <a
                href={encodeURI(project.figmaFile)}
                download={`${project.title}.fig`}
                className="pill-button"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" />
                </svg>
                Download Figma file
              </a>
            </div>
          </div>
        )}
      </section>

      {nextProject !== project && (
        <section className="page-section pb-20 sm:pb-28">
          <a
            {...reveal()}
            href={`${projectRoutePrefix}${nextProject.slug}`}
            className="project-next"
          >
            <span className="text-xs text-black/55">Next project</span>
            <span className="project-next-title">
              {nextProject.title}
              <img src={arrowIcon} alt="" width="40" height="40" />
            </span>
          </a>
        </section>
      )}
    </>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string title: string }) {
  return (
    <div className="section-heading">
      <p {...reveal()}>{eyebrow}</p>
      <h2 {...reveal(90)}>{title}</h2>
    </div>
  )
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="mt-14 grid auto-rows-fr border-t border-black/20 sm:mt-20">
      {entries.map((item) => (
        <article
          key={`${item.organization}-${item.title}`}
          className="experience-row"
        >
          <ul
            {...reveal()}
            className="experience-periods flex flex-wrap gap-x-1.5 text-xs leading-5 sm:flex-col sm:gap-1"
          >
            {item.periods.map((period) => (
              <li key={period}>{period}</li>
            ))}
          </ul>
          <div {...reveal(90)}>
            <h3 className="font-['Onest:Light'] text-2xl leading-tight font-light sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-1 text-sm">{item.organization}</p>
          </div>
          <ul
            {...reveal(180)}
            className="experience-details max-w-lg text-sm leading-6 text-black/60 sm:text-base sm:leading-7"
          >
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function AboutPanel() {
  return (
    <div
      {...reveal(0, "panel")}
      className="about-panel grid gap-14 py-7 sm:py-12 lg:grid-cols-[0.9fr_1fr] lg:gap-24 lg:py-16"
    >
      <div {...reveal(150)}>
        <p className="text-xs text-black">About me</p>
        <h2 className="mt-6 font-['Onest:Light'] text-[clamp(2.75rem,5.4vw,5rem)] leading-[1] font-light tracking-[-0.045em]">
          Vladyslav
          <br />
          Bukator
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <p className="about-status">
            <span className="about-pulse" aria-hidden="true" />
            Open to work
          </p>
          <p className="text-sm text-black/55">Milan, Italy</p>
        </div>
        <p className="mt-8 max-w-md text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
          UX/UI designer with a frontend developer&apos;s toolkit. I design in
          Figma and build in React &amp; Next.js, taking products from first
          wireframe to production. Next step: earning UX/UI certifications to
          move fully into UX/UI design.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-black/10">
        {aboutGroups.map((group, index) => (
          <div
            key={group.label}
            {...reveal(250 + index * 110)}
            className="py-10 first:pt-0 last:pb-0"
          >
            <h3 className="text-xs text-black/55">{group.label}</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-6">
              {group.items.map((item) => (
                <li key={item.name}>
                  <p className="font-['Onest:Light'] text-xl leading-snug font-light sm:text-2xl">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-black/55">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroBlobs() {
  return (
    <svg
      viewBox="0 0 1188.15 811.221"
      fill="none"
      aria-hidden="true"
      className="block h-auto w-[195vw] max-w-none overflow-visible sm:w-[min(94vw,1188px)]"
    >
      {heroBlobs.map((blob, index) => (
        <g key={blob.color} className={`hero-layer hero-layer--${index + 1}`}>
          <g className={`hero-blob hero-blob--${index + 1}`}>
            <path d={blob.shape} fill={blob.color} fillOpacity="0.5" />
            <path
              d={blob.shape}
              stroke={blob.color}
              strokeOpacity="0.5"
              strokeWidth="2"
            />
          </g>
        </g>
      ))}
    </svg>
  )
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const hash = useHash()
  const activeProject = hash.startsWith(projectRoutePrefix)
    ? projects.find(
        (project) => project.slug === hash.slice(projectRoutePrefix.length),
      )
    : undefined
  useScrollReveal(activeProject?.slug ?? "home")

  // Start project pages at the top; when leaving one for a home section, jump to that section.
  const previousProject = useRef(activeProject)
  useEffect(() => {
    const cameFromProject = previousProject.current !== activeProject
    previousProject.current = activeProject
    if (!cameFromProject) return

    setMenuOpen(false)
    if (activeProject) {
      window.scrollTo({ top: 0, behavior: "instant" })
      return
    }
    const target = hash.length > 1 ? document.querySelector(hash) : null
    if (target) target.scrollIntoView({ behavior: "instant" })
    else window.scrollTo({ top: 0, behavior: "instant" })
  }, [activeProject, hash])

  // Hide the header while scrolling down and bring it back on any scroll up.
  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY

      setHeaderScrolled(y > 24)
      if (y < 80) setHeaderHidden(false)
      else if (delta > 6) setHeaderHidden(true)
      else if (delta < -6) setHeaderHidden(false)

      if (Math.abs(delta) > 6 || y < 80) lastY = y
    }

    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    const closeOnDesktop = () => {
      if (window.innerWidth >= 640) setMenuOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", closeOnDesktop)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", closeOnDesktop)
    }
  }, [menuOpen])

  // Nudge the blobs toward the cursor on precise pointers for a sense of depth.
  useEffect(() => {
    const hero = heroRef.current
    if (
      !hero ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    let frame = 0
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5
        hero.style.setProperty("--mx", x.toFixed(3))
        hero.style.setProperty("--my", y.toFixed(3))
      })
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [activeProject])

  return (
    <main className="overflow-hidden bg-[#f2f2f2] text-[#0d0d0d]">
      <header
        className="site-header"
        data-hidden={headerHidden && !menuOpen}
        data-scrolled={headerScrolled && !menuOpen}
      >
        <a
          href="#home"
          aria-label="Portfolio home"
          onClick={() => setMenuOpen(false)}
          className="relative z-1 rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#0d0d0d]"
        >
          <img
            src={brandMark}
            alt=""
            width="40"
            height="40"
            className="size-10 object-cover"
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 text-xs leading-5 font-normal sm:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="mobile-menu sm:hidden"
        data-open={menuOpen}
        inert={!menuOpen}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            style={{ transitionDelay: menuOpen ? `${120 + index * 60}ms` : "0ms" }}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>

      {activeProject ? (
        <ProjectPage key={activeProject.slug} project={activeProject} />
      ) : (
        <>
          <section id="home" className="relative min-h-dvh">

            <div
              ref={heroRef}
              aria-labelledby="hero-title"
              className="relative flex min-h-dvh items-center justify-center pt-16"
            >
              <div className="relative flex h-[min(71vw,710px)] w-[min(92vw,1154px)] items-center justify-center">
                <div className="absolute flex rotate-[-11.14deg] items-center justify-center">
                  <HeroBlobs />
                </div>

                <h1
                  id="hero-title"
                  className="relative z-[1] flex flex-col items-center text-[#f2f2f2]"
                >
                  <span className="hero-line font-['Onest:Bold'] text-[clamp(3rem,15vw,3.75rem)] leading-[1.2] sm:text-[clamp(2.5rem,5.55vw,5rem)] sm:leading-[1.25] font-bold">
                    UX-UI
                  </span>
                  <span className="hero-line hero-line--late font-['Onest:Light'] text-[clamp(3rem,15vw,3.75rem)] leading-[1.2] sm:text-[clamp(2.5rem,5.55vw,5rem)] sm:leading-[1.25] font-light">
                    Designer
                  </span>
                </h1>
              </div>

              <a href="#projects" className="hero-scroll" aria-label="Scroll to projects">
                <span>Scroll</span>
                <i aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="projects" className="page-section py-28 sm:py-40">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects shaped around people, not screens."
            />

            <div className="projects-list">
              {projects.map((project, index) => (
                <article key={project.title} className="project-row">
                  <div {...reveal()} className="project-index">
                    <span>0{index + 1}</span>
                    <span>{project.format}</span>
                  </div>

                  <div {...reveal(90)} className="project-copy">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
                      <div className="project-duration">
                        <span>Timeline</span>
                        <strong>{project.duration}</strong>
                      </div>
                      {project.redesign && (
                        <span className="project-tag">Redesign</span>
                      )}
                    </div>
                  </div>

                  <div {...reveal(160, "image")} className="project-mockup">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="460"
                      height="345"
                    />
                  </div>

                  <a
                    href={`${projectRoutePrefix}${project.slug}`}
                    aria-label={`Explore the ${project.title} project`}
                    {...reveal(240)}
                    className="pill-button case-study-link"
                  >
                    <span>Explore project</span>
                    <img src={arrowIcon} alt="" width="24" height="24" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="page-section py-28 sm:py-40">
            <SectionHeading
              eyebrow="Work experience"
              title="Curious by nature, collaborative by choice."
            />

            <Timeline entries={experience} />
          </section>

          <section id="about" className="page-section pt-8 pb-36 sm:pt-10 sm:pb-50">
            <AboutPanel />
          </section>

          <section id="education" className="page-section pb-28 sm:pb-40">
            <SectionHeading
              eyebrow="Education"
              title="Always learning, always building."
            />

            <Timeline entries={education} />
          </section>

          <section id="contact" className="px-4 pb-4 sm:px-6 sm:pb-6">
            <div {...reveal(0, "panel")} className="contact-panel">
              <div className="contact-art" aria-hidden="true">
                <span className="contact-shape contact-shape--cyan" />
                <span className="contact-shape contact-shape--pink" />
                <span className="contact-shape contact-shape--violet" />
              </div>

              <div className="relative z-[1] flex min-h-[680px] flex-col justify-between p-7 text-[#f2f2f2] sm:p-12 lg:p-16">
                <p {...reveal(150)} className="text-xs">Contact me</p>

                <div className="max-w-5xl">
                  <h2 {...reveal(220)} className="font-['Onest:Light'] text-[clamp(3rem,8vw,8rem)] leading-[0.92] font-light tracking-[-0.055em]">
                    Have an idea?
                    <br />
                    Let&apos;s make it real.
                  </h2>
                  <a
                    href="mailto:bukatorvladyslav@gmail.com"
                    {...reveal(320)}
                    className="contact-email mt-12 inline-block font-['Onest:Light'] max-w-full text-[5.3vw] leading-tight font-light wrap-anywhere sm:text-[clamp(1.5rem,3.4vw,3.5rem)]"
                  >
                    bukatorvladyslav@gmail.com
                  </a>
                </div>

                <footer {...reveal(420)} className="flex flex-col gap-5 border-t border-white/30 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
                  <p>Available for selected projects</p>
                  <div className="flex gap-7">
                    <a className="footer-link" href="https://www.linkedin.com/in/vladyslav-bukator-992354337/">
                      LinkedIn
                    </a>
                    <a className="footer-link" href="https://github.com/Vladdddy">
                      Github
                    </a>
                    <a className="footer-link" href="https://www.instagram.com/vladyslav_bukator/">
                      Instagram
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
