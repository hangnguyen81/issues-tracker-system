export interface Issue {
  issueNo: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  type: 'Feature' | 'Bug' | 'Documentation';
  resolvedDate?: Date;
}
