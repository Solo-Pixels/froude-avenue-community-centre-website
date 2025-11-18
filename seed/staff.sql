-- SQL Insert statements for Staff
-- Run this file using: npm run seed-staff

INSERT INTO staff ("firstName", "lastName", "positionTitle", email, phone, "headLine", "photoUrl", icon, "order", "createdAt", "updatedAt")
VALUES
(
  'Enid',
  'Pendergast',
  'Executive Director',
  'froudeavecc@gmail.com',
  '709-579-0763 EXT: 1',
  NULL,
  NULL,
  NULL,
  1,
  NOW(),
  NOW()
),
(
  'Emily',
  'Newman',
  'Community Engagement, Programs, and Office Administration',
  'emilyatfroude@gmail.com',
  '709-579-0763 EXT: 0',
  NULL,
  NULL,
  NULL,
  2,
  NOW(),
  NOW()
),
(
  'Emily',
  'Dwyer',
  'Primary Afterschool Coordinator',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  3,
  NOW(),
  NOW()
),
(
  'Richard',
  'Bishop',
  'Program Coordinator',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  4,
  NOW(),
  NOW()
),
(
  'Kaitlyn',
  'Dawe',
  'Public Health Nurse',
  'kaitlyn.dawe@nlhealthservices.ca',
  '709-752-4940',
  'RN',
  NULL,
  NULL,
  5,
  NOW(),
  NOW()
),
(
  'Michael',
  'Smith',
  'Community Employment Facilitator',
  'msmith@ccanl.ca',
  '709-769-0354',
  NULL,
  NULL,
  NULL,
  6,
  NOW(),
  NOW()
),
(
  'Pennie',
  'Spurvey',
  'Family Support Social Worker',
  'pspurvey@ccanl.ca',
  '709-699-9249',
  'RSW',
  NULL,
  NULL,
  7,
  NOW(),
  NOW()
),
(
  'Dalena',
  'Skinner',
  'Family Support Social Worker',
  'dskinner@ccanl.ca',
  '709-730-1257',
  'RSW',
  NULL,
  NULL,
  8,
  NOW(),
  NOW()
),
(
  'Lee',
  'Butt',
  'Education Coordinator',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  9,
  NOW(),
  NOW()
);

