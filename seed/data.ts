import type { Prisma } from "@prisma/client";

export const staffSeedData: Prisma.staffCreateInput[] = [
  {
    firstName: "John",
    lastName: "Smith",
    positionTitle: "Executive Director",
    email: "john.smith@froudeavenue.org",
    phone: "709-555-0101",
    headLine: "Leading community initiatives with passion and dedication",
    photoUrl: null,
    icon: null,
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    positionTitle: "Program Coordinator",
    email: "sarah.johnson@froudeavenue.org",
    phone: "709-555-0102",
    headLine: "Creating engaging programs for all ages",
    photoUrl: null,
    icon: null,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    positionTitle: "Community Outreach Specialist",
    email: "michael.brown@froudeavenue.org",
    phone: "709-555-0103",
    headLine: "Building connections within the community",
    photoUrl: null,
    icon: null,
  },
];

export const programSeedData: Prisma.programCreateInput[] = [
  {
    title: "Youth Sports League",
    description:
      "A comprehensive sports program for children and teenagers aged 8-16. Participants learn teamwork, sportsmanship, and physical fitness through organized games and practices. Multiple sports available including soccer, basketball, and volleyball.",
    isActive: true,
    isFeatured: true,
    imageUrl: null,
    icon: null,
  },
  {
    title: "Senior Social Club",
    description:
      "Weekly gatherings for seniors in the community. Activities include card games, crafts, guest speakers, and social events. A great way to stay connected and active in your golden years.",
    isActive: true,
    isFeatured: true,
    imageUrl: null,
    icon: null,
  },
  {
    title: "After-School Tutoring",
    description:
      "Free tutoring services for students in grades K-12. Our volunteer tutors help with homework, test preparation, and academic support. Sessions available Monday through Thursday from 3:00 PM to 6:00 PM.",
    isActive: true,
    isFeatured: false,
    imageUrl: null,
    icon: null,
  },
  {
    title: "Community Garden",
    description:
      "Join our community garden initiative! Learn about sustainable gardening, grow your own vegetables, and connect with neighbors. Plots available for families and individuals. Tools and seeds provided.",
    isActive: true,
    isFeatured: true,
    imageUrl: null,
    icon: null,
  },
  {
    title: "Fitness Classes",
    description:
      "Regular fitness classes for all fitness levels. Options include yoga, Zumba, strength training, and aerobics. Classes are designed to be inclusive and welcoming to everyone in the community.",
    isActive: true,
    isFeatured: false,
    imageUrl: null,
    icon: null,
  },
];

export const serviceSeedData: Prisma.serviceCreateInput[] = [
  {
    title: "Food Assistance",
    description:
      "We provide food assistance programs including a community food bank, meal programs, and nutrition education. Open to all community members in need.",
    isActive: true,
    isFeatured: true,
    imageUrl: null,
    icon: "utensils",
  },
  {
    title: "Housing Support",
    description:
      "Resources and support for housing-related issues. We offer information sessions, assistance with applications, and connections to local housing resources.",
    isActive: true,
    isFeatured: true,
    imageUrl: null,
    icon: "gift",
  },
  {
    title: "Employment Services",
    description:
      "Job search assistance, resume writing workshops, interview preparation, and connections to local employers. Free services to help community members find employment.",
    isActive: true,
    isFeatured: false,
    imageUrl: null,
    icon: null,
  },
  {
    title: "Childcare Referrals",
    description:
      "Assistance finding quality childcare options in the area. We maintain a list of licensed providers and can help match families with appropriate childcare services.",
    isActive: true,
    isFeatured: false,
    imageUrl: null,
    icon: null,
  },
  {
    title: "Health & Wellness Programs",
    description:
      "Regular health screenings, wellness workshops, and access to health information. We partner with local health organizations to bring services directly to the community.",
    isActive: true,
    isFeatured: true,
    imageUrl: null,
    icon: "music",
  },
  {
    title: "Legal Aid Referrals",
    description:
      "Connections to free and low-cost legal services. We help community members access legal assistance for housing, employment, family law, and other matters.",
    isActive: true,
    isFeatured: false,
    imageUrl: null,
    icon: null,
  },
];

export const partnerSeedData: Prisma.partnerCreateInput[] = [
  {
    title: "City of St. John's",
  },
  {
    title: "Newfoundland and Labrador Housing",
  },
  {
    title: "United Way",
  },
  {
    title: "Community Food Sharing Association",
  },
  {
    title: "St. John's Public Library",
  },
  {
    title: "Eastern Health",
  },
];
