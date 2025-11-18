-- SQL Insert statements for Programs
-- Run this file using: psql $DATABASE_URL -f seed/programs.sql
-- Or use your database client to execute these statements

INSERT INTO program (title, description, "isActive", "isFeatured", "imageUrl", icon, "order", "createdAt", "updatedAt")
VALUES
(
  'Afterschool Program',
  'Our Afterschool Program runs Monday through Friday, 2:30-4:45pm for children in Kindergarten through Grade 6. Each afternoon includes homework help, a healthy snack, and plenty of fun through recreation, arts and crafts, and special themed events throughout the year. It''s a safe, engaging place for kids to learn, play, and grow after the school day ends.',
  true,
  true,
  NULL,
  NULL,
  1,
  NOW(),
  NOW()
),
(
  'SPARK Youth Group',
  'SPARK — Supporting Potential, Adventure, and Resilience inside every Kid — is our youth leadership and volunteer program designed to help young people build skills, confidence, and community connections. SPARK participants volunteer in our programs to gain valuable experience, completing hours in areas such as Academics, Recreation, and Volunteer Service. Each week, they also attend SPARK Night on Thursdays, where members prepare and share a meal together and take part in a variety of activities — from presentations and team-building exercises to recreation and community service projects.',
  true,
  true,
  NULL,
  NULL,
  2,
  NOW(),
  NOW()
),
(
  'Tutoring Program',
  'Our Tutoring Program provides daily academic support for school-aged children and youth from Primary through High School. With guidance from dedicated staff and volunteers, students receive individualized help in a supportive environment that fosters learning, confidence, and academic growth.',
  true,
  true,
  NULL,
  NULL,
  3,
  NOW(),
  NOW()
),
(
  'Youth Achieve Program',
  'For ages 11–18, our Youth Achieve Program offers one-on-one, individualized support to help students strengthen their reading, writing, and literacy skills. Through personalized learning, we help youth build confidence, improve communication, and achieve their academic goals at their own pace.',
  true,
  true,
  NULL,
  NULL,
  4,
  NOW(),
  NOW()
),
(
  'Monday Night Kids Group',
  'Led by long-time volunteers Mr. and Mrs. Smith, the Monday Night Kids Group meets weekly from 6:30 to 8:00 p.m. for children in Kindergarten through Grade 6. Each session features short, interactive Bible stories, a light snack, a craft activity, and low-organized games that encourage fun and friendship. This program is open to all children in the community, not just participants of the Afterschool Program.',
  true,
  false,
  NULL,
  NULL,
  5,
  NOW(),
  NOW()
),
(
  'Seniors 55+ Program',
  'Our Seniors 55+ group meets every Thursday morning from 11:30 a.m. to 1:30 p.m. for fun, friendship, and community connection. While BINGO is always a favorite, we also mix things up with lunch-and-learn sessions, guest presentations, outings, and other special activities. It''s a great way to stay active, social, and engaged each week!',
  true,
  true,
  NULL,
  NULL,
  6,
    NOW(),
  NOW()
),
(
  'Summer Program',
  'Our Summer Program offers seven weeks of engaging, full-day activities for children ages 5–11. 5 year olds must have completed Kindergarten prior to summer program. Running Monday through Thursday from 8:30 a.m. to 4:45 p.m., the program provides a safe and active environment where participants can explore, learn, and have fun. Each day includes a healthy snack, outdoor recreation, and a variety of exciting experiences such as swimming, local walks, and educational field trips to museums and community attractions.',
  true,
  true,
  NULL,
  NULL,
  7,
  NOW(),
  NOW()
),
(
  'NEA BINGO',
  'The Neighbourhood Enhancement Association (NEA) hosts weekly BINGO sessions that bring the community together for fun. Wednesday Night BINGO is for ages 18+ and runs from 8:00 to 10:30 p.m. Cards are $10 each, with the final game ($1 per card) offering a winner-takes-all prize. Sunday Afternoon BINGO welcomes families and participants of all ages from 2:00 to 4:00 p.m. at a cost of 3 cards per person.',
  true,
  false,
  NULL,
  NULL,
  8,
  NOW(),
  NOW()
);

