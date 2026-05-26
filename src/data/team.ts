// The Portland Career Center team. Bios migrated from the original site and lightly
// edited for the Portland Career Center voice; facts (credentials, practice, contact)
// preserved as written. Update freely — see OWNERS-MANUAL.md.

export type Member = {
  name: string;
  credentials: string;
  photo: string; // file in /public/images
  practice?: string;
  website?: string; // display text; link is derived
  websiteUrl?: string;
  email?: string;
  phone?: string;
  note?: string; // e.g. "Retired", "On sabbatical"
  bio: string;
};

export const team: Member[] = [
  {
    name: "Aly Anliker",
    credentials: "Ed.M",
    photo: "/images/aly.jpg",
    email: "alyanliker@hotmail.com",
    phone: "503-891-1108",
    bio:
      "Aly is an organizational and career consultant with deep experience in training management, executive coaching, and instructional design, plus a background in human resources and outplacement. She has helped people in career transition for over fifteen years across telecommunications, technology, manufacturing, and non-profit. She's especially passionate about brand identity — the résumé and what makes each person unique in the world of work — and has taught career development at Marylhurst, Portland Community College, Mt. Hood Community College, and Clark College. A native Oregonian, she holds an Ed.M in Adult Education from Oregon State University and a B.S. in Social Work from Portland State University.",
  },
  {
    name: "Andrea Killion",
    credentials: "MS, LPC",
    photo: "/images/andreaking2014.jpg",
    practice: "Careerful Counseling Services",
    note: "Currently on sabbatical",
    bio:
      "Andrea is a Career Counselor and Coach who helps adults from all backgrounds and stages achieve rewarding employment. Clients find her highly intuitive, motivational, and supportive. Using a holistic, strengths-based, solution-focused approach, she helps with assessment of skills, interests, values, and personality; job-search coaching; interview and networking skills; college and post-college advising; and confidence building. As a Licensed Professional Counselor she earned her M.S. in Counseling (career counseling specialization) from San Francisco State University.",
  },
  {
    name: "Anne Bryant",
    credentials: "MA, LPC",
    photo: "/images/anne.jpg",
    note: "Retired",
    bio:
      "After 35 years offering both career counseling and therapy to help clients through all sorts of life transitions, Anne closed her private practice and retired. She considers herself among the luckiest of people to have had such variety in a field she loves. Her archive of articles remains here for readers. These days she tends a garden (and two chickens, Meryl and Lily), volunteers with Friends of Portland Community Gardens and SMART (Start Making a Reader Today), practices T'ai Chi, sings in a community chorus, and writes personal essays about nature and climate.",
  },
  {
    name: "Aubrie De Clerck",
    credentials: "PCC, CPC",
    photo: "/images/aubrie-4-color.jpg",
    practice: "Coaching for Clarity",
    website: "coachingforclarity.net",
    websiteUrl: "https://www.coachingforclarity.net",
    email: "aubrie@coachingforclarity.net",
    phone: "503-810-2907",
    bio:
      "Aubrie is a Career and Leadership Coach in private practice. She spent 4.5 years with Lee Hecht Harrison, and her history spans corporate, non-profit, and self-employment — a wide perspective on the world of work. Core to her approach is the belief that it is possible to have the work you want: the key is finding and genuinely communicating the foundational strengths you uniquely bring. Known for being both highly inspirational and deeply practical, she has an unending curiosity about people and a gift for supporting others in going after what brings them joy.",
  },
  {
    name: "Bruce Hazen",
    credentials: "MS",
    photo: "/images/brucehazenheadshot.jpg",
    practice: "Three Questions Consulting",
    website: "threequestionsconsulting.com",
    websiteUrl: "https://www.threequestionsconsulting.com",
    email: "bruce@threequestionsconsulting.com",
    phone: "503-280-0151",
    bio:
      "Bruce combines 20 years of business experience with clinical training to help people who manage others, organizations, and their own career development. He holds a BS in Industrial and Labor Relations from Cornell and an MS in Clinical Psychology, and is a Certified Business Model You Practitioner. His Three Questions Model brings strategic perspective to career management — beyond \"finding one job in a row.\" He is the author of Answering the Three Career Questions: Your Lifetime Career Management System, coauthor of the career-coaching chapter in The Complete Handbook of Coaching, and a contributor to Business Model You.",
  },
  {
    name: "Dave Gallison",
    credentials: "MS, LPC",
    photo: "/images/dave100.jpg",
    practice: "Gallison Consulting and Career Counseling",
    website: "gallisonconsulting.com",
    websiteUrl: "https://www.gallisonconsulting.com",
    email: "dave@gallisonconsulting.com",
    phone: "503-704-7796",
    bio:
      "Dave favors an action-oriented approach that puts you in control of your future: together you identify your needs, strengths, and alternatives, then build a plan with the tools and confidence to reach greater work and life satisfaction. As a Licensed Professional Counselor he considers the whole person, not just the career. He has over fifteen years of experience across all ages, has directed a university career center, provided outplacement for employers like US Bank, HP, and Motorola, and held director-level roles in non-profits, higher education, and healthcare. He earned his Master's from the University of Oregon (Counseling, Psychology & Health Education) and a BA in Psychology from Reed College.",
  },
  {
    name: "Aaron Good",
    credentials: "MS, CRC, LPC, CCC",
    photo: "/images/aaron_smaller150x150-e1539039407624.jpg",
    practice: "Trailhead Counseling, LLC",
    website: "trailheadcounseling.net",
    websiteUrl: "https://trailheadcounseling.net",
    email: "aaron@trailheadcounseling.net",
    phone: "503-997-1886",
    bio:
      "Aaron is a career and mental health counselor in private practice, focusing on career, purpose, and identity. He works with people across the lifespan who want to improve their current job, find work more aligned with their values, or reaffirm the path they're on — covering everything from how anxiety and depression affect our work to the practical mechanics of assessment and job search. He holds a Master's in Counseling from Portland State University, is a Certified Rehabilitation Counselor (CRC), and earned his undergraduate degree in cultural anthropology from Reed College. Before counseling, he had a long career in technology at Adobe, Nike, and MGM.",
  },
  {
    name: "Stacey Lane",
    credentials: "MS",
    photo: "/images/stacey-headshot-e1539097188392.jpg",
    website: "staceylane.net",
    websiteUrl: "https://www.staceylane.net",
    email: "stacey@staceylane.net",
    phone: "503-975-6882",
    bio:
      "Stacey is a career coach who specializes in helping people with unique backgrounds figure out where they fit, how to market themselves, and how to find a career as interesting as they are. She works across industries and holds a Master's in Training and Development and a B.A. in Sociology. A Professional Certified Coach and SHRM member, she's known for candid guidance that has appeared in local and national publications. Based in Portland, she works with clients across the country and is a frequent speaker on topics from personal branding to career planning.",
  },
  {
    name: "Gail Nicholson",
    credentials: "MA, LPC",
    photo: "/images/gail.jpg",
    website: "gailnicholson.com",
    websiteUrl: "https://www.gailnicholson.com",
    email: "gailcareer@aol.com",
    phone: "503-227-4250",
    bio:
      "Gail is passionate about working with people who want to connect with a more authentic sense of self as a basis for defining their lives, work, and roles in the community. Her typical client wants direction and fulfillment but feels overwhelmed or discouraged. She offers a blend of personal and career counseling — addressing the personal issues and mental-health concerns that can become barriers — helping clients clarify purpose, manage stress, and tackle career exploration, job search, or a small-business start-up. She received an MS in Counseling Psychology from Antioch University and a BS in Business Administration from Lewis & Clark College.",
  },
];
