"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";

const categories = ["Web Design", "Mobile Apps", "Branding", "Logo"] as const;

type Category = (typeof categories)[number];

type PortfolioItem = {
  cat: Category;
  src: string;
  label: string;
  tag: string;
};

const portfolioItems: PortfolioItem[] = [
  // Web Design
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img1.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img2.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img3.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img4.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img5.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img6.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img7.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img8.png",
    label: " ",
    tag: "Web Design",
  },
  {
    cat: "Web Design",
    src: "/images/Portfolio/portfolio_img9.png",
    label: " ",
    tag: "Web Design",
  },

  // Mobile Apps
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_App_1-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_App_2-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_App_3-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_App_4-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_app_06-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_app_07-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_app_08-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_app_09-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_app_10-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/Mobile_app_11-100.jpg",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img1.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img2.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img3.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img4.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img5.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img6.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img7.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img8.png",
    label: "",
    tag: "Mobile App",
  },
  {
    cat: "Mobile Apps",
    src: "/images/App/app_img9.png",
    label: "",
    tag: "Mobile App",
  },

  // Branding
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_1-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_2-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_3-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_4-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_01-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_02-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_03-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_04-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_05-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/Branding_06-100.jpg",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img1.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img2.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img3.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img4.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img5.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img6.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img7.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img8.png",
    label: "",
    tag: "Branding",
  },
  {
    cat: "Branding",
    src: "/images/Portfolio/Branding/branding_img9.png",
    label: "",
    tag: "Branding",
  },

  // Logo
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_2-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_3-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_4-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_5-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_6-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_7-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_8-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_9-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_10-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_11-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_12-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_13-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_14-100.jpg",
    label: "",
    tag: "Logo",
  },
  {
    cat: "Logo",
    src: "/images/Logo/Artboard_1_copy_15-100.jpg",
    label: "",
    tag: "Logo",
  },
];

function PortfolioTabs({
  active,
  onChange,
  isWhite,
}: {
  active: Category;
  onChange: (category: Category) => void;
  isWhite: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:mb-12 mb-8">
      {categories.map((cat) => {
        const isActive = cat === active;

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`portfolio-tab relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide border-2 transition-all duration-300 overflow-hidden
              ${
                isActive
                  ? "bg-[#2CB6C0] border-[#2CB6C0] text-white shadow-[0_8px_24px_rgba(57,181,74,0.35)] scale-105"
                  : `${isWhite ? "bg-white border-gray-100 text-gray-500" : "bg-white/5 border-white/10 text-gray-400"} hover:border-[#2CB6C0] hover:text-[#2CB6C0]`
              }`}
          >
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <>
      <div
        className={`port-card group relative rounded-3xl overflow-hidden border-2 border-transparent hover:border-[#2CB6C0]/30 transition-all duration-500 cursor-pointer ${
          item.cat === "Web Design" ? "h-[600px]" : "h-[350px]"
        }`}
        onClick={toggleLightbox}
      >
        <div className="absolute inset-0 overflow-hidden bg-black/5">
          <img
            src={item.src}
            alt={item.label || item.tag}
            className={`w-full ${item.cat === "Web Design" ? "h-auto group-hover:translate-y-[calc(-100%+600px)]" : "h-full object-cover"} block transition-transform duration-[5s] ease-linear`}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#2CB6C0] block mb-2">
            {item.tag}
          </span>
          {item.label && (
            <span className="font-black text-white text-xl">{item.label}</span>
          )}
        </div>

        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#2CB6C0] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm"
          onClick={toggleLightbox}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.tag}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={toggleLightbox}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-white text-black text-2xl flex items-center justify-center shadow-2xl hover:bg-[#2CB6C0] hover:text-white transition-all"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function PortfolioGrid({
  activeCategory,
  singleCategory,
  seeAll,
}: {
  activeCategory: Category;
  singleCategory?: Category;
  seeAll: boolean;
}) {
  const shownItems = useMemo(() => {
    const effectiveCategory = singleCategory ?? activeCategory;
    const filtered = portfolioItems.filter(
      (item) => item.cat === effectiveCategory,
    );
    const items = filtered.length > 0 ? filtered : portfolioItems;
    return seeAll ? items : items.slice(0, 9);
  }, [activeCategory, singleCategory, seeAll]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {shownItems.map((item, index) => (
        <PortfolioCard key={`${item.cat}-${item.src}-${index}`} item={item} />
      ))}
    </div>
  );
}

export default function Portfolio({
  isWhite = false,
  initialCategory,
  singleCategory,
  hideTabs = false,
  showHeader = true,
}: {
  isWhite?: boolean;
  initialCategory?: Category;
  singleCategory?: Category;
  hideTabs?: boolean;
  showHeader?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<Category>(
    singleCategory ?? initialCategory ?? "Web Design",
  );
  const [seeAll, setSeeAll] = useState(false);

  const effectiveCategory = singleCategory ?? activeCategory;
  const filteredItems = portfolioItems.filter(
    (item) => item.cat === effectiveCategory,
  );
  const totalCount =
    filteredItems.length > 0 ? filteredItems.length : portfolioItems.length;
  const showSeeMore = totalCount > 9;

  return (
    <section
      className="relative py-24 lg:py-32 px-4 md:px-12 lg:px-[150px] overflow-hidden"
      style={{
        backgroundColor: "#1A1A1A",
        backgroundImage: "url('/images/portfoliobg.png')", // Figma image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header + Tabs Row */}
        {(showHeader || (!hideTabs && !singleCategory)) && (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
            {/* Title */}
            {showHeader && (
              <div className="text-center lg:text-left">
                <h2 className="text-3xl  lg:text-5xl font-bold leading-none text-white">
                  You should believe <br /> we made it well.
                </h2>
              </div>
            )}

            {/* Tabs */}
            {!hideTabs && !singleCategory && (
              <div className="lg:ml-auto">
                <PortfolioTabs
                  active={activeCategory}
                  onChange={(cat) => {
                    setActiveCategory(cat);
                    setSeeAll(false);
                  }}
                  isWhite={isWhite}
                />
              </div>
            )}
          </div>
        )}

        {/* Portfolio Grid */}
        <PortfolioGrid
          activeCategory={activeCategory}
          singleCategory={singleCategory}
          seeAll={seeAll}
        />

        {/* See More Button */}
        {showSeeMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setSeeAll(!seeAll)}
              className="font-poppins text-[16px] font-medium relative px-8 py-3 rounded-full border-2 border-white bg-white text-black transition-all duration-300 hover:bg-[#2CB6C0] hover:border-[#2CB6C0] hover:text-white"
            >
              {seeAll ? "See Less" : "Discover More"}
            </button>
          </div>
        )}
      </div>

      {/* Decorative Circles 
      <div className="absolute bottom-0  left-0 w-full">
  <Image
    src="/images/portfoliobottom.png"
    alt="Portfolio Background"
    width={1920}
    height={400}
    className="w-full h-auto"
  />
</div>*/}
    </section>
  );
}
