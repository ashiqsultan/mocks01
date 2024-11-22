import { useQuery } from '@tanstack/react-query';

type DocumentItem = { id: number; title: string };
// Mock data for uploaded files
const mockDocs: DocumentItem[] = [
  { id: 1, title: 'Project_Proposal.txt' },
  { id: 2, title: 'Meeting_Minutes.txt' },
  { id: 3, title: 'Requirements.txt' },
];

// const getDocById = async (id: string): Promise<DocumentItem | null> => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const result = mockDocs.find(file => file.id === parseInt(id));
//       resolve(result || null);
//     }, 2000);
//   });
// };

const fetchDocuments = async (): Promise<DocumentItem[]> => {
  // Simulating API call with mock data
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockDocs);
    }, 2000);
  });
};

export const useDocuments = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });
};
