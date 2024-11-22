import { useDocuments } from '@/store/queries';
import { FileText } from 'lucide-react';

const DocumentList = () => {
  const { data: documents, isLoading, isError } = useDocuments();

  return (
    <>
      <div className='rounded-lg border p-4'>
        <h3 className='mb-4 text-lg font-medium'>Knowledge Base</h3>
        <div className='space-y-3'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching documents</p>}
          {documents?.map(doc => (
            <div key={doc.id} className='flex items-center gap-3 rounded-lg p-2 hover:bg-muted'>
              <FileText className='h-5 w-5 text-muted-foreground' />
              <span>{doc.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DocumentList;
