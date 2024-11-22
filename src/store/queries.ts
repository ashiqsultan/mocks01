import { useQuery } from '@tanstack/react-query';

type DocumentItem = { id: number; title: string; content: string };
// Mock data for uploaded files
const mockDocs: DocumentItem[] = [
  { id: 1, title: 'Project_Proposal.txt', content: 'This is a project proposal' },
  { id: 2, title: 'Meeting_Minutes.txt', content: 'This is a meeting minutes' },
  { id: 3, title: 'Requirements.txt', content: 'This is a requirements' },
];

// Mock API calls
const getDocById = async (id: string): Promise<DocumentItem | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = mockDocs.find(file => file.id === parseInt(id));
      resolve(result || null);
    }, 1000);
  });
};

const fetchDocuments = async (): Promise<DocumentItem[]> => {
  // Simulating API call with mock data
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockDocs);
    }, 1000);
  });
};
// API Calls END

// Queries
export const useDocuments = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });
};

export const useDocumentById = (id: string) => {
  return useQuery({
    queryKey: ['document', id],
    queryFn: () => getDocById(id),
  });
};
