-- SQL Insert statements for Services
-- Run this file using: npm run seed-service

INSERT INTO service (title, description, "isActive", "isFeatured", "imageUrl", icon, "order", "createdAt", "updatedAt")
VALUES
(
  'Public Health Office',
  'Our on-site Public Health Office is staffed by Registered Nurse Kaitlyn Dawe, through NL Health Services. Available Monday through Friday from 8:30 a.m. to 4:30 p.m. Nurse Kaitlyn can assist with general health inquiries and provide information on community health resources. Please note that appointments are required for specific consultations or services.',
  true,
  true,
  NULL,
  NULL,
  1,
  NOW(),
  NOW()
),
(
  'Community Employment Facilitator',
  'Our Community Employment Facilitator, Mike Smith, provides personalized support to community members in a variety of areas. In addition to employment services such as job search assistance, résumé and cover letter writing, and career exploration, Mike can also help individuals complete applications for documents like MCP cards, birth certificates, and identification, as well as post-secondary and other educational opportunities. His goal is to help each person take the next step toward their personal, professional, and educational goals.',
  true,
  true,
  NULL,
  NULL,
  2,
  NOW(),
  NOW()
),
(
  'Family Support Social Workers',
  'Our Family Support Social Workers, Dalena Skinner and Pennie Spurvey, are here to assist individuals and families with a wide range of support services. Pennie is available at the Centre on Tuesdays, and Dalena is available on Wednesdays. Together, they provide guidance, advocacy, and resources to help strengthen families and address social or personal challenges in a caring and confidential environment.',
  true,
  true,
  NULL,
  NULL,
  3,
  NOW(),
  NOW()
),
(
  'Front Desk General Services',
  'Our Front Desk offers a range of general services available to community members, including photocopying, faxing, public phone access, and computer use. Staff are available during regular office hours to provide assistance and ensure visitors have access to the resources they need.',
  true,
  false,
  NULL,
  NULL,
  4,
  NOW(),
  NOW()
),
(
  'Food First NL: Food on the Move',
  'In partnership with Food First NL, the Food on the Move program brings a monthly pop-up market to the community, offering fresh, healthy produce at low, affordable prices — items are $2 each or 3 for $5. This initiative helps make nutritious food more accessible while promoting community wellness and food security for all residents.',
  true,
  true,
  NULL,
  NULL,
  5,
  NOW(),
  NOW()
);

