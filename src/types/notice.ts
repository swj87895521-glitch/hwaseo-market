export type Notice = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  createdAt: string;
  views: number;
  isPinned: boolean;
  isActive: boolean;
};
