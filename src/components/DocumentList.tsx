import { useDocuments } from '@/store/queries';
import { FileText } from 'lucide-react';
import ReadView from './TextDocument/ReadView';
import { useState } from 'react';

const DocumentList = () => {
  const { data: documents, isLoading, isError } = useDocuments();
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  return (
    <>
      <div className='rounded-lg border p-4'>
        <h3 className='mb-4 text-lg font-medium'>Knowledge Base</h3>
        <div className='space-y-3'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching documents</p>}
          {documents?.map(doc => (
            <div
              key={doc.id}
              className='flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-muted'
              onClick={() => setSelectedDocId(doc.id.toString())}
            >
              <FileText className='h-5 w-5 text-muted-foreground' />
              <span>{doc.title}</span>
            </div>
          ))}
        </div>
      </div>
      {selectedDocId && <ReadView id={selectedDocId} />}
    </>
  );
};

export default DocumentList;
