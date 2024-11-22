import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface TextDocDialogFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TextDocDialogForm({ isOpen, onOpenChange }: TextDocDialogFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSave = () => {
    console.log('API call to save the text document');
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    console.table({ title, content });
    onOpenChange(false); // Close dialog after saving
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant='outline' className='w-full'>
          Create Text Document
        </Button>
      </DialogTrigger>
      <DialogContent
        className='h-[auto] w-[50vw] max-w-none'
        onPointerDownOutside={e => {
          e.preventDefault();
        }}
        onEscapeKeyDown={e => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create New Text Document</DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <Input placeholder='Title' ref={titleRef} />
          <Textarea
            placeholder='Enter text... or paste the content you wish to add'
            className='min-h-[250px]'
            ref={contentRef}
          />
        </div>
        <DialogFooter className=''>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
