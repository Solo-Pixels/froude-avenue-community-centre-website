"use client";

import { useState } from "react";
import { X, Bell } from "lucide-react";
import { getActiveBanners } from "@/assets/content/banner";

const Banner = () => {
  const [dismissedBanners, setDismissedBanners] = useState<Set<string>>(
    new Set(),
  );
  const activeBanners = getActiveBanners().filter(
    (banner) => !dismissedBanners.has(banner.id),
  );

  if (activeBanners.length === 0) return null;

  const handleDismiss = (bannerId: string) => {
    setDismissedBanners((prev) => new Set(prev).add(bannerId));
  };

  return (
    <div className="space-y-4">
      {activeBanners.map((banner) => (
        <div
          key={banner.id}
          className="border-2 border-[rgba(8,88,95,0.3)] bg-linear-to-r from-[rgba(8,88,95,0.95)] to-[rgba(8,88,95,0.85)] text-white shadow-xl"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="shrink-0 rounded-full bg-white/20 p-4">
                <Bell className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase">
                    Important Notice
                  </span>
                </div>
                <div className="text-base leading-relaxed font-medium whitespace-pre-line text-white md:text-lg">
                  {banner.content}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => handleDismiss(banner.id)}
                className="shrink-0 rounded-full p-2 text-white transition-all hover:scale-110 hover:bg-white/20"
                aria-label="Dismiss banner"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
