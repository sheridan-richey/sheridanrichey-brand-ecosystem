export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  headshot: string;
  linkedin?: string;
  twitter?: string;
}

export const authors: Record<string, Author> = {
  'sheridan-richey': {
    id: 'sheridan-richey',
    name: 'Sheridan Richey',
    title: 'Founder & Chief Strategist',
    bio: 'Sheridan Richey is a seasoned executive leader and entrepreneur who has guided multiple SaaS companies through transformative growth. With over two decades of experience in product development, M&A, and team leadership, Sheridan has developed the ZAG Matrix framework to help awakened technologists navigate their mid-career transformation. His journey spans executive roles at AdvancedMD, SirsiDynix, Extensiv, and Henry Schein One, alongside entrepreneurial ventures through Bring It Forward Investments.',
    headshot: '/assets/images/contributors/sheridan-richey.jpg',
    linkedin: 'https://linkedin.com/in/sheridanrichey'
  },
  'sean-hokanson': {
    id: 'sean-hokanson',
    name: 'Sean Hokanson',
    title: 'Contributing Editor & Systems Architect',
    bio: 'As a seasoned Chief Architect with over two decades of experience building scalable, high-performance software systems, Sean brings a unique architectural rigor to the ZAG Matrix. He and Sheridan were partners for seven years at Extensiv, where they led product and technology strategy. Sean focuses on applying the principles of systems thinking to the GEM pillar, helping individuals architect a life of purpose and financial independence. He is also a dedicated father, whose personal "Dad 2.0" journey is a powerful testament to the principles of ZEN and ACT.',
    headshot: '/assets/images/contributors/sean-hokanson.jpg',
    linkedin: 'https://www.linkedin.com/in/sean-hokanson-5b46012/'
  }
};

export function getAuthor(authorId: string): Author | undefined {
  return authors[authorId];
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
} 