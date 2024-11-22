import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useDocumentById } from '@/store/queries';

type ReadViewProps = {
  id: string;
};

const ReadView = ({ id }: ReadViewProps) => {
  const { data: document, isLoading, isError } = useDocumentById(id);
  const [isDialogOpen, setDialogOpen] = useState(true);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      {isLoading && <DialogContent>Loading...</DialogContent>}
      {isError && <DialogContent>Error fetching document</DialogContent>}
      {document && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{document?.title}</DialogTitle>
          </DialogHeader>
          <p>{document?.content || 'No content'}</p>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ReadView;
