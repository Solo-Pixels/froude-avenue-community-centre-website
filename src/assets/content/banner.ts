export type BannerItem = {
  id: string;
  content: string; // All content as plain text
  isActive: boolean;
  priority?: number; // Higher number = higher priority
};

export const bannerContent: BannerItem[] = [
  {
    id: "holiday-grocery-2024",
    content: `Applications for our holiday grocery gift card program are open until Friday November 21 at 1:00 PM.
This program is available to individuals and families who reside in the St. John's Metro region and are experiencing food insecurity this holiday season.

To apply:

✨ Online: bridgestohope.ca
✨ By phone: (709) 722-9225 from 9 AM-1 PM
✨ In Person: During food pantry hours`,
    isActive: true,
    priority: 1,
  },
];

// Helper function to get active banners sorted by priority
export const getActiveBanners = (): BannerItem[] => {
  return bannerContent
    .filter((banner) => banner.isActive)
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
};
