"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Work Brief",
    tag: "Discovery",
    desc: "We start by understanding your vision, goals, and project scope in exhaustive detail. A sharp brief eliminates guesswork and ensures every hour of work moves toward the right outcome.",
    detail: ["Stakeholder interviews", "Scope mapping", "Deliverable checklist", "Timeline alignment"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 105 105" fill="none">
        <path d="M19.9443 30.9419V8.07918C19.9443 4.46063 22.9049 1.5 26.5235 1.5H77.8411C81.4597 1.5 84.4203 4.46063 84.4203 8.07918V91.6348M19.9443 49.6923V96.8979C19.9443 100.516 22.9049 103.477 26.5235 103.477H93.9601M52.5113 42.4554V33.2446M42.807 43.1129H62.2156M44.7806 60.7126H75.0449M42.6423 52.4887H75.0448M94.289 103.477H93.6311C88.5322 103.477 84.4202 99.3651 84.4202 94.2663V30.2837H103.5V94.2663C103.5 99.3651 99.3879 103.477 94.289 103.477Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Work Execution",
    tag: "Build",
    desc: "Our team enters a structured sprint cycle — focused builds, daily standups, and milestone gates ensure momentum never stalls and quality never slips.",
    detail: ["Sprint planning", "Daily syncs", "Milestone reviews", "Quality gates"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 108 102" fill="none">
        <path d="M19.5559 9.04541C15.657 9.04541 12.485 12.2164 12.485 16.1136C12.485 20.0109 15.657 23.1819 19.5559 23.1819C23.458 23.1819 26.6327 20.0109 26.6327 16.1136C26.6327 12.2164 23.458 9.04541 19.5559 9.04541Z" fill="currentColor"/>
        <path d="M81.3825 9.04541H62.6906C58.7916 9.04541 55.6196 12.2164 55.6196 16.1136C55.6196 20.0109 58.7916 23.1819 62.6906 23.1819H81.3825C85.2814 23.1819 88.4534 20.0109 88.4534 16.1136C88.4534 12.2164 85.2814 9.04541 81.3825 9.04541Z" fill="currentColor"/>
        <path d="M80.0914 62.2139C72.9887 62.2139 67.2103 67.9898 67.2103 75.0893C67.2103 82.1856 72.9887 87.9589 80.0914 87.9589C87.191 87.9589 92.9667 82.1858 92.9667 75.0893C92.9667 67.99 87.191 62.2139 80.0914 62.2139Z" fill="currentColor"/>
        <path d="M34.4438 43.9866C33.312 43.7155 32.1744 44.4143 31.9039 45.5467L27.7224 63.0449C27.4519 64.1771 28.1502 65.3144 29.2824 65.5848C30.7271 65.6432 31.5912 64.9923 31.8224 64.0248L36.0039 46.5265C36.2746 45.3943 35.5761 44.2573 34.4438 43.9866Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Get Feedback",
    tag: "Review",
    desc: "We surface progress early and invite structured critique. Feedback loops are built into our process — not bolted on at the end when changes cost more.",
    detail: ["Review sessions", "Annotation rounds", "Stakeholder sign-off", "Change logging"],
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 102 102" fill="none">
        <path d="M93.3808 0H8.619C6.35 0 4.168 0.875 2.552 2.468C0.936 4.062 0 6.231 0 8.5V45.9C0 46.503 0.372 47.017 0.841 47.367C1.388 47.597 1.684 47.6 1.981 47.603C2.273 47.528 2.532 47.383 14.254 40.8H93.3808C95.65 40.813 97.832 39.926 99.448 38.332C101.063 36.739 101.981 34.569 102 32.3V8.5C101.981 6.231 101.063 4.062 99.448 2.468C97.832 0.875 95.65 0 93.3808 0Z" fill="currentColor"/>
        <path d="M97.826 57.423C97.532 59.809 98.226 60.69 98.602 61.779C98.6 62.9 95 85 89.022 92.017C88.768 91.875 88.482 91.8 88.191 91.8H39.1C38.217 91.8 37.4 92.617 37.4 93.5C37.4 94.383 38.217 95.2 39.1 95.2H87.746L99.468 101.783C100.315 102 101.63 101.767 101.775 101.145C101.922 100.888 102 100.597 102 100.3V62.9C102.005 61.02 101.375 59.194 100.212 57.717C99.274 56.877 98.039 56.891 97.826 57.423Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Revisions",
    tag: "Refine",
    desc: "Refinement is not failure — it's part of the craft. We embrace targeted revisions, treating every round of changes as an opportunity to sharpen the final result.",
    detail: ["Revision tracking", "Priority triage", "Version control", "Client approval"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 105 102" fill="none">
        <path d="M102.268 9.00354L97.037 3.77295C95.693 2.4289 93.87 1.674 91.969 1.674C90.068 1.674 88.245 2.4289 86.901 3.77295L37.448 53.249C37.341 53.372 37.257 53.512 37.2 53.664L29.049 74.905C28.936 75.197 28.911 75.515 28.976 75.821C29.041 76.127 29.194 76.408 29.415 76.629C29.636 76.851 29.917 77.003 30.223 77.068C30.529 77.133 30.847 77.108 31.14 76.996L52.362 68.851C52.583 68.753 52.767 68.632 52.924 68.48L102.268 19.141C103.61 17.796 104.364 15.973 104.364 14.073C104.364 12.172 103.61 10.349 102.268 9.00354Z" fill="currentColor"/>
        <path d="M47.344 9.528V1.618C47.344 0.726 46.5 0 45.708 0C36.438 0.417 27.49 3.519 19.951 8.93C12.413 14.341 6.610 21.826 3.250 30.475C-0.111 39.124 -0.885 48.564 1.022 57.644C2.929 66.725 7.434 75.056 13.990 81.622C20.546 88.188 28.870 92.707 37.948 94.629C47.026 96.55 56.466 95.791 65.121 92.444C73.775 89.096 81.269 83.305 86.692 75.776C92.114 68.246 95.231 59.302 95.662 50.033L88.285 56.3L84.076 52.32C81.047 60.168 78.881 66.407 75.111 71.668C71.342 76.929 66.130 80.986 60.105 83.350C54.080 87.714 47.500 88.283 41.159 86.989C34.818 85.695 28.986 82.593 24.369 78.058C19.752 73.523 16.547 67.748 15.139 61.431C13.732 55.114 14.184 48.525 16.439 42.459C18.695 36.393 22.658 31.109 27.851 27.246C33.043 23.383 39.243 21.105 45.701 20.688V25.847C45.701 26.138 45.779 26.424 45.927 26.674C46.076 26.925 46.289 27.131 46.545 27.270C46.801 27.409 47.089 27.477 47.380 27.466C47.671 27.455 47.954 27.366 48.198 27.207L67.048 15.077C67.276 14.930 67.463 14.729 67.593 14.491C67.723 14.253 67.791 13.986 67.791 13.715C67.791 13.445 67.723 13.178 67.593 12.940C67.463 12.702 67.276 12.501 67.048 12.354L48.200 0.257C47.683 -0.094 46.805 0.012 45.708 1.618H47.344V9.528Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Final Submission",
    tag: "Delivery",
    desc: "Polished, tested, and documented. We hand off the completed project with everything you need to run, maintain, and build on what we've created together.",
    detail: ["Final QA", "Asset handoff", "Documentation", "Post-launch support"],
    image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
    icon: (
      <svg width="28" height="28" viewBox="0 0 108 102" fill="none">
        <path d="M89.503 0H9.890C4.437 0 0 5.115 0 11.402V70.313C0 76.6 4.437 81.714 9.890 81.714H57.887C55.284 81.714 53.167 79.597 53.167 76.996V73.177C53.167 70.576 55.284 68.46 57.887 68.46H58.688C59.089 67.159 59.608 65.901 60.273 64.695L59.660 64.112C57.869 90.911 59.708 92.746 62.404 95.441C63.290 96.332 64.474 96.824 65.737 96.826H65.744C67.007 96.826 68.193 96.336 69.084 95.446L69.649 94.881C70.874 95.527 72.147 96.055 73.458 96.460V97.276C73.458 99.881 75.575 102 78.178 102H81.998C84.600 102 86.717 99.881 86.717 97.276V96.465C88.041 96.057 89.320 95.527 90.543 94.881L91.105 95.441C91.991 96.332 93.175 96.824 94.438 96.826H94.445C95.708 96.826 96.894 96.336 97.787 95.444L100.476 92.751C101.368 91.864 101.860 90.680 101.862 89.418C101.864 88.152 101.373 86.963 100.480 86.071L99.918 85.508C100.559 84.293 101.086 83.025 101.493 81.714H102.289C104.895 81.714 107.015 79.597 107.015 76.996V73.177C107.015 70.576 104.895 68.46 102.289 68.46H101.507C101.097 67.132 100.566 65.850 99.918 64.625L100.477 64.065C101.368 63.179 101.861 61.995 101.862 60.732C101.864 59.466 101.374 58.278 100.481 57.385L99.393 56.298V11.402C99.393 5.115 94.956 0 89.503 0ZM95.177 27.858H4.216V11.402C4.216 7.507 6.814 4.216 9.890 4.216H89.503C92.579 4.216 95.177 7.507 95.177 11.402V27.858ZM80.091 62.214C87.191 62.214 92.967 67.990 92.967 75.089C92.967 82.186 87.191 87.959 80.091 87.959C72.989 87.959 67.210 82.186 67.210 75.089C67.210 67.990 72.989 62.214 80.091 62.214Z" fill="currentColor"/>
        <path d="M19.556 9.045C15.657 9.045 12.485 12.216 12.485 16.114C12.485 20.011 15.657 23.182 19.556 23.182C23.458 23.182 26.633 20.011 26.633 16.114C26.633 12.216 23.458 9.045 19.556 9.045Z" fill="currentColor"/>
        <path d="M37.881 9.045C33.982 9.045 30.810 12.216 30.810 16.114C30.810 20.011 33.982 23.182 37.881 23.182C41.783 23.182 44.957 20.011 44.957 16.114C44.957 12.216 41.783 9.045 37.881 9.045Z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function ProjectStepsStackSlider() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<any>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const prevActiveRef = useRef(0);

  useEffect(() => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    const dir = active >= prevActiveRef.current ? 1 : -1;
    prevActiveRef.current = active;

    const tl = gsap.timeline();

    tl.to([tagRef.current, titleRef.current], {
      y: dir * -24, opacity: 0, duration: 0.2, ease: "power2.in", stagger: 0.03,
    }, 0);
    tl.to([descRef.current, detailRef.current], {
      y: dir * -16, opacity: 0, duration: 0.18, ease: "power2.in",
    }, 0.03);
    tl.to(ghostRef.current, {
      x: dir * -60, opacity: 0, duration: 0.22, ease: "power2.in",
    }, 0);
    tl.to(progressRef.current, {
      scaleY: (active + 1) / steps.length,
      duration: 0.55, ease: "power2.inOut",
    }, 0.05);

    tl.fromTo(ghostRef.current,
      { x: dir * 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.42, ease: "power3.out" }, 0.22
    );
    tl.fromTo([tagRef.current, titleRef.current],
      { y: dir * 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.32, ease: "power3.out", stagger: 0.05 }, 0.25
    );
    tl.fromTo([descRef.current, detailRef.current],
      { y: dir * 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.28, ease: "power3.out" }, 0.34
    );
  }, [active]);

  useEffect(() => {
    const load = async () => {
      const g = await import("gsap");
      gsapRef.current = g.default || g.gsap;
      gsapRef.current.set(progressRef.current, {
        scaleY: 1 / steps.length,
        transformOrigin: "center top",
      });
    };
    load();

    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      const idx = Math.min(Math.floor(progress * steps.length), steps.length - 1);
      setActive(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const step = steps[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; }

        .ss-wrapper {
          height: 500vh;
          position: relative;
          background: #0A0A0F;
        }

        .ss-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          font-family: 'Inter', sans-serif;
        }

        .ss-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(44,182,192,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44,182,192,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* ─── LEFT PANEL ─── */
        .ss-left {
          width: 60%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 64px 56px 64px 72px;
          position: relative;
          z-index: 2;
          gap: 48px;
        }

        .ss-progress-sidebar {
          width: 2px;
          height: 320px;
          background: rgba(255,255,255,0.05);
          position: relative;
          flex-shrink: 0;
        }

        .ss-progress-fill-vertical {
          position: absolute;
          inset: 0;
          background: #2CB6C0;
          transform-origin: center top;
          box-shadow: 0 0 8px rgba(44,182,192,0.6);
        }

        .ss-left-content-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
        }

        .ss-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(44,182,192,0.6);
          margin-bottom: 32px;
        }
        .ss-eyebrow span {
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(44,182,192,0.4);
        }

        .ss-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 40px;
        }

        .ss-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          position: relative;
          cursor: default;
        }

        .ss-nav-num {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.06em;
          font-variant-numeric: tabular-nums;
          transition: color 0.3s;
          color: rgba(240,240,240,0.15);
        }
        .ss-nav-item.is-active .ss-nav-num { color: #2CB6C0; }
        .ss-nav-item.is-done .ss-nav-num { color: rgba(44,182,192,0.4); }

        .ss-nav-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s, filter 0.3s;
          color: rgba(240,240,240,0.1);
        }
        .ss-nav-item.is-active .ss-nav-icon {
          color: #2CB6C0;
          filter: drop-shadow(0 0 6px rgba(44,182,192,0.4));
        }
        .ss-nav-item.is-done .ss-nav-icon {
          color: rgba(44,182,192,0.35);
        }

        .ss-nav-title {
          font-size: 18px;
          font-weight: 500;
          color: rgba(240,240,240,0.15);
          transition: color 0.3s;
          white-space: nowrap;
        }
        .ss-nav-item.is-active .ss-nav-title { color: #F0F0F0; font-weight: 600; }
        .ss-nav-item.is-done .ss-nav-title { color: rgba(240,240,240,0.3); }

        .ss-content {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 240px;
        }

        .ss-ghost {
          position: absolute;
          top: -0px;
          right: 0px;
          font-size: 180px;
          font-weight: 900;
          letter-spacing: 0.01em;
          color: rgba(44,182,192,.05);
          pointer-events: none;
          user-select: none;
          font-variant-numeric: tabular-nums;
          line-height: 1;
        }

        .ss-tag {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2CB6C0;
          border: 1px solid rgba(44,182,192,0.28);
          padding: 4px 12px;
          background: rgba(44,182,192,0.06);
          margin-bottom: 16px;
        }

        .ss-title {
          font-size: 58px;
          font-weight: 800;
          color: #F0F0F0;
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin: 0 0 16px;
        }

        .ss-desc {
          font-size: 16px;
          line-height: 1.78;
          color: rgba(240,240,240,0.7);
          max-width: 460px;
          margin: 0 0 24px;
        }

        .ss-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .ss-chip {
          font-size: 11px;
          font-weight: 500;
          color: rgba(240,240,240,0.9);
          border: 1px solid #2CB6C0;
          padding: 4px 11px;
        }

        .ss-counter-v {
          margin-top: 24px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(240,240,240,0.18);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.06em;
        }
        .ss-counter-v strong { color: #2CB6C0; }

        /* ─── RIGHT PANEL ─── */
        .ss-right {
          width: 40%;
          height: 100%;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .ss-right::before {
          content: '';
          position: absolute;
          inset: 0;
          left: 0;
          width: 80px;
          background: linear-gradient(90deg, #0A0A0F, transparent);
          z-index: 3;
          pointer-events: none;
        }

        .ss-stack {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 40px 40px 20px;
        }

        .ss-card {
          position: absolute;
          width: 88%;
          aspect-ratio: 3/4;
          border-radius: 2px;
          overflow: hidden;
          will-change: transform, opacity;
          transition:
            transform 0.65s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.55s ease;
        }

        .ss-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.85);
          transition: filter 0.5s;
        }

        .ss-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(10,10,15,0.8), transparent);
          z-index: 1;
        }

        .ss-card-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 2;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,240,240,0.7);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ss-card-badge::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #2CB6C0;
        }

        .ss-card.is-active-card {
          box-shadow:
            0 0 0 1.5px rgba(44,182,192,0.4),
            0 32px 64px rgba(0,0,0,0.5);
        }
        .ss-card.is-active-card img {
          filter: brightness(0.92);
        }

        /* ─── TABLET / MOBILE MEDIA QUERY (Max-width: 1023px) ─── */
        /* Hides Image Section and centers Left Content Vertically */
        @media (max-width: 1023px) {
          .ss-sticky {
            flex-direction: column;
            justify-content: center; /* Vertically Centers everything on tablet/mobile views */
            align-items: center;     /* Horizontally Centers the whole block */
            padding: 40px 24px;
            height: 100vh;           /* Enforces fullscreen viewport box to perfectly align center */
          }
          .ss-left {
            width: 100%;
            max-width: 640px;        /* Limits max expansion for tablet layouts to look crisp */
            height: auto;
            padding: 0;
            gap: 32px;
            align-items: center;     /* Aligns inner elements symmetrically with progress bar */
            justify-content: center;
          }
          .ss-progress-sidebar {
            height: 260px;           /* Resizes vertical progress line cleanly */
          }
          .ss-title {
            font-size: 38px;
          }
          .ss-ghost {
            font-size: 110px;
          }
          .ss-right {
            display: none !important; /* Completely drops image section side */
          }
        }

        /* ─── EXTRA SMALL MOBILE BREAKDOWN (Max-width: 767px) ─── */
        @media (max-width: 767px) {
          .ss-sticky {
            padding: 32px 20px;
          }
          .ss-left {
            gap: 20px;
          }
          .ss-progress-sidebar {
            width: 1.5px;
            height: 220px;
          }
          .ss-eyebrow {
            margin-bottom: 16px;
          }
          .ss-nav {
            margin-bottom: 20px;
          }
          .ss-nav-title {
            font-size: 14px;
          }
          .ss-nav-num {
            font-size: 13px;
          }
          .ss-nav-icon {
            width: 22px;
            height: 22px;
          }
          .ss-title {
            font-size: 26px;
            margin-bottom: 10px;
          }
          .ss-desc {
            font-size: 13.5px;
            margin-bottom: 16px;
          }
          .ss-ghost {
            font-size: 75px;
          }
          .ss-content {
            min-height: auto;
          }
        }
      `}</style>

      <div className="ss-wrapper" ref={wrapperRef}>
        <div className="ss-sticky">
          <div className="ss-grid" />

          {/* ─ LEFT CONTAINER (Main view on Mobile) ─ */}
          <div className="ss-left">
            
            {/* Left Side: Vertical Progress Bar Line */}
            <div className="ss-progress-sidebar">
              <div className="ss-progress-fill-vertical" ref={progressRef} />
            </div>

            {/* Right Side: Content Column */}
            <div className="ss-left-content-column">
              {/* eyebrow */}
              <div className="ss-eyebrow">
                <span />
                Our Process
                <span />
              </div>

              {/* step nav */}
              <div className="ss-nav">
                {steps.map((s, i) => {
                  const isDone = i < active;
                  const isActive = i === active;
                  return (
                    <div
                      key={s.id}
                      className={`ss-nav-item${isActive ? " is-active" : isDone ? " is-done" : ""}`}
                    >
                      <span className="ss-nav-num">{s.id}</span>
                      <span className="ss-nav-icon">{s.icon}</span>
                      <span className="ss-nav-title">{s.title}</span>
                    </div>
                  );
                })}
              </div>

              {/* animated content block */}
              <div className="ss-content">
                <div className="ss-ghost" ref={ghostRef}>{step.id}</div>
                <div className="ss-tag" ref={tagRef}>{step.tag}</div>
                <h3 className="ss-title" ref={titleRef}>{step.title}</h3>
                <p className="ss-desc" ref={descRef}>{step.desc}</p>
                <div className="ss-chips" ref={detailRef}>
                  {step.detail.map((d) => (
                    <span className="ss-chip" key={d}>{d}</span>
                  ))}
                </div>
              </div>

              {/* counter underneath the column flow */}
              <div className="ss-counter-v">
                <strong>{String(active + 1).padStart(2, "0")}</strong>
                {" / "}{String(steps.length).padStart(2, "0")}
              </div>
            </div>

          </div>

          {/* ─ RIGHT CONTAINER (Hidden on Mobile/Tablet via CSS) ─ */}
          <div className="ss-right">
            <div className="ss-stack">
              {steps.map((s, i) => {
                const offset = i - active;
                const visible = offset >= -1 && offset <= 3;
                if (!visible) return null;

                let translateY, translateX, scale, opacity, zIndex, rotate;

                if (offset < 0) {
                  translateY = -110;
                  translateX = 0;
                  scale = 0.9;
                  opacity = 0;
                  zIndex = 0;
                  rotate = 0;
                } else if (offset === 0) {
                  translateY = 0;
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                  rotate = 0;
                } else if (offset === 1) {
                  translateY = 28;
                  translateX = 16;
                  scale = 0.93;
                  opacity = 0.75;
                  zIndex = 9;
                  rotate = 2;
                } else if (offset === 2) {
                  translateY = 50;
                  translateX = 28;
                  scale = 0.86;
                  opacity = 0.45;
                  zIndex = 8;
                  rotate = 4;
                } else {
                  translateY = 66;
                  translateX = 38;
                  scale = 0.80;
                  opacity = 0.18;
                  zIndex = 7;
                  rotate = 5.5;
                }

                return (
                  <div
                    key={s.id}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className={`ss-card${offset === 0 ? " is-active-card" : ""}`}
                    style={{
                      transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
                      opacity,
                      zIndex,
                    }}
                  >
                    <img src={s.image} alt={s.title} loading="lazy" />
                    <div className="ss-card-overlay" />
                    <div className="ss-card-badge">{s.tag}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}