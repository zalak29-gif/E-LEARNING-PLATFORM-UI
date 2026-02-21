const courses = [
  {
    id: 1, cat: 'Design', category: 'design',
    title: 'UI/UX Design Masterclass: Zero to Hero',
    desc: 'From wireframes to polished prototypes â€” master the complete design workflow.',
    lessons: 34, hours: '22h', level: 'Beginner',
    price: 'â‚¹1,299', old: 'â‚¹3,999', badge: 'pop',
    icon: 'ðŸŽ¨', bg: 'linear-gradient(135deg,#1e3a5f,#0f2a45)',
    rating: '4.9', students: '18,400'
  },
  {
    id: 2, cat: 'Development', category: 'dev',
    title: 'Full Stack Web Development Bootcamp',
    desc: 'React, Node.js, MongoDB & more. Build real-world projects from day one.',
    lessons: 60, hours: '48h', level: 'Intermediate',
    price: 'â‚¹1,999', old: 'â‚¹5,999', badge: '',
    icon: 'ðŸ’»', bg: 'linear-gradient(135deg,#3d1a4a,#1a0a2e)',
    rating: '4.8', students: '32,100'
  },
  {
    id: 3, cat: 'Data Science', category: 'data',
    title: 'Python for Data Science & Visualization',
    desc: 'Pandas, NumPy, Matplotlib, Seaborn â€” the essential data science toolkit.',
    lessons: 45, hours: '30h', level: 'Beginner',
    price: 'Free', old: '', badge: 'free',
    icon: 'ðŸ“Š', bg: 'linear-gradient(135deg,#1a3a2a,#0a2a1a)',
    rating: '4.7', students: '54,200'
  },
  {
    id: 4, cat: 'AI & ML', category: 'ai',
    title: 'Machine Learning Aâ€“Z: Hands-On Python',
    desc: 'Supervised, unsupervised learning, neural nets â€” complete ML roadmap.',
    lessons: 52, hours: '40h', level: 'Advanced',
    price: 'â‚¹2,499', old: 'â‚¹6,999', badge: 'new',
    icon: 'ðŸ¤–', bg: 'linear-gradient(135deg,#4a2a1a,#2a1a0a)',
    rating: '4.9', students: '11,800'
  },
  {
    id: 5, cat: 'Business', category: 'business',
    title: 'Product Management: Zero to PM',
    desc: 'Strategy, roadmaps, PRDs and stakeholder management â€” become a great PM.',
    lessons: 28, hours: '18h', level: 'Intermediate',
    price: 'â‚¹999', old: 'â‚¹2,999', badge: '',
    icon: 'ðŸ“‹', bg: 'linear-gradient(135deg,#3a3a1a,#2a2a0a)',
    rating: '4.6', students: '9,200'
  },
  {
    id: 6, cat: 'Design', category: 'design',
    title: 'Motion Design with After Effects',
    desc: 'Create cinematic animations, transitions, and motion graphics professionals love.',
    lessons: 38, hours: '28h', level: 'Intermediate',
    price: 'â‚¹1,499', old: 'â‚¹4,499', badge: '',
    icon: 'âœ¨', bg: 'linear-gradient(135deg,#2a1a3a,#1a0a2a)',
    rating: '4.8', students: '7,600'
  },
  {
    id: 7, cat: 'AI & ML', category: 'ai',
    title: 'Large Language Models & Prompt Engineering',
    desc: 'Understand transformers, fine-tuning, and master prompting for real applications.',
    lessons: 24, hours: '16h', level: 'Advanced',
    price: 'â‚¹1,799', old: 'â‚¹4,999', badge: 'new',
    icon: 'ðŸ§ ', bg: 'linear-gradient(135deg,#1a2a3a,#0a1a2a)',
    rating: '5.0', students: '3,400'
  },
  {
    id: 8, cat: 'Development', category: 'dev',
    title: 'iOS Development with Swift 5',
    desc: 'Build beautiful native apps for iPhone and iPad using modern SwiftUI.',
    lessons: 44, hours: '36h', level: 'Intermediate',
    price: 'Free', old: '', badge: 'free',
    icon: 'ðŸ“±', bg: 'linear-gradient(135deg,#3a1a1a,#2a0a0a)',
    rating: '4.8', students: '21,900'
  },
  {
    id: 9, cat: 'Data Science', category: 'data',
    title: 'Advanced SQL & Database Design',
    desc: 'Joins, indexes, stored procedures and query optimization for pros.',
    lessons: 32, hours: '20h', level: 'Intermediate',
    price: 'â‚¹899', old: 'â‚¹2,499', badge: '',
    icon: 'ðŸ—„ï¸', bg: 'linear-gradient(135deg,#1a2a1a,#0a1a0a)',
    rating: '4.7', students: '15,600'
  },
  {
    id: 10, cat: 'Business', category: 'business',
    title: 'Digital Marketing Masterclass 2025',
    desc: 'SEO, paid ads, email marketing, social media â€” grow any business online.',
    lessons: 50, hours: '35h', level: 'Beginner',
    price: 'â‚¹1,199', old: 'â‚¹3,499', badge: 'pop',
    icon: 'ðŸ“£', bg: 'linear-gradient(135deg,#2a1a0a,#1a0a00)',
    rating: '4.6', students: '28,300'
  }
];

const lessons = [
  { num: 1, title: 'Introduction to Prototyping',         dur: '8:12',  done: true,  playing: false },
  { num: 2, title: 'Figma Basics: Frames & Components',   dur: '15:44', done: true,  playing: false },
  { num: 3, title: 'Creating Navigation Flows',           dur: '19:30', done: true,  playing: false },
  { num: 4, title: 'Auto-Animate & Smart Animate',        dur: '22:05', done: false, playing: true  },
  { num: 5, title: 'Scrollable Frames & Overlays',        dur: '17:50', done: false, playing: false },
  { num: 6, title: 'Interactive Components Deep Dive',    dur: '28:15', done: false, playing: false },
  { num: 7, title: 'Mobile Prototyping Best Practices',   dur: '14:00', done: false, playing: false },
  { num: 8, title: 'Handoff to Developers',               dur: '11:30', done: false, playing: false },
];

