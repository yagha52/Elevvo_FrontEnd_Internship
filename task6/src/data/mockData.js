// Mock Data
const mockData = {
  overview: {
    totalProjects: 24,
    earnings: 47500,
    tasksDue: 8,
    completedProjects: 18,
    monthlyEarnings: [
      { month: 'Jan', earnings: 3500 },
      { month: 'Feb', earnings: 4200 },
      { month: 'Mar', earnings: 3800 },
      { month: 'Apr', earnings: 5100 },
      { month: 'May', earnings: 4700 },
      { month: 'Jun', earnings: 5300 }
    ],
    taskTypes: [
      { name: 'Design', value: 35, color: '#6366f1' },
      { name: 'Development', value: 45, color: '#ec4899' },
      { name: 'Consulting', value: 20, color: '#06b6d4' }
    ],
    recentActivity: [
      { id: 1, action: 'Completed project "E-commerce Website"', time: '2 hours ago' },
      { id: 2, action: 'New client message received', time: '4 hours ago' },
      { id: 3, action: 'Invoice #INV-2024-015 sent', time: '1 day ago' },
      { id: 4, action: 'Project "Mobile App UI" started', time: '2 days ago' },
      { id: 5, action: 'Payment received: $2,500', time: '3 days ago' }
    ]
  },
  projects: [
    {
      id: 1,
      name: 'E-commerce Website',
      client: 'Tech Solutions Inc.',
      status: 'Completed',
      deadline: '2024-08-15',
      progress: 100,
      budget: '$5,000'
    },
    {
      id: 2,
      name: 'Mobile App UI Design',
      client: 'StartupXYZ',
      status: 'In Progress',
      deadline: '2024-09-01',
      progress: 75,
      budget: '$3,500'
    },
    {
      id: 3,
      name: 'Brand Identity Package',
      client: 'Creative Agency',
      status: 'In Progress',
      deadline: '2024-08-30',
      progress: 60,
      budget: '$2,800'
    },
    {
      id: 4,
      name: 'WordPress Website',
      client: 'Local Business',
      status: 'Planning',
      deadline: '2024-09-15',
      progress: 25,
      budget: '$1,200'
    },
    {
      id: 5,
      name: 'Social Media Graphics',
      client: 'Marketing Co.',
      status: 'Completed',
      deadline: '2024-08-10',
      progress: 100,
      budget: '$800'
    }
  ],
  notifications: [
    { id: 1, message: 'New project proposal from Tech Corp', time: '5 min ago', unread: true },
    { id: 2, message: 'Payment received: $2,500', time: '2 hours ago', unread: true },
    { id: 3, message: 'Deadline reminder: Mobile App UI', time: '1 day ago', unread: false },
    { id: 4, message: 'Client feedback on Brand Identity', time: '2 days ago', unread: false },
    { id: 5, message: 'Invoice #INV-2024-014 overdue', time: '3 days ago', unread: true }
  ],
  profile: {
    name: 'Alex Johnson',
    email: 'alex@freelancepro.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Senior Full-Stack Developer and UI/UX Designer with 8+ years of experience helping businesses build exceptional digital experiences.',
    avatar: 'AJ'
  }
};

export default mockData;