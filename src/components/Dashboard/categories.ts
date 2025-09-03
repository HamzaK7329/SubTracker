// components/Dashboard/categories.ts
import type { CategoryOption } from './CategoryComboBox';

export const DEFAULT_CATEGORIES: CategoryOption[] = [
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'music',         name: 'Music',         icon: '🎵' },
  { id: 'productivity',  name: 'Productivity',  icon: '🧰' },
  { id: 'utilities',     name: 'Utilities',     icon: '💡' },
  { id: 'education',     name: 'Education',     icon: '📚' },
  { id: 'gaming',        name: 'Gaming',        icon: '🎮' },
  { id: 'news',          name: 'News',          icon: '📰' },
  { id: 'cloud',         name: 'Cloud/Storage', icon: '☁️' },
  { id: 'health',        name: 'Health/Fitness',icon: '💪' },
  { id: 'other',         name: 'Other',         icon: '🗂️' },
];
