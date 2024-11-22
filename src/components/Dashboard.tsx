'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Upload, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

// Mock data for uploaded files
const mockFiles = [
  { id: 1, name: 'Project_Proposal.pdf' },
  { id: 2, name: 'Meeting_Minutes.docx' },
  { id: 3, name: 'Requirements.txt' },
];

export default function Dashboard() {
  // State to manage dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to handle save action
  const handleSave = () => {
    console.log('API call to save the text document');
    setIsDialogOpen(false); // Close dialog after saving
  };

  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* Left Panel */}
        <Card className='p-6'>
          <div className='space-y-4'>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  <Input placeholder='Title' className='' />
                  <Textarea
                    placeholder='Enter text... or paste the content you wish to add'
                    className='min-h-[250px]'
                  />
                </div>
                <DialogFooter className=''>
                  <Button variant='outline' onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className='rounded-lg border p-4'>
              <h3 className='mb-4 text-lg font-medium'>List Item Showing uploaded docs</h3>
              <div className='space-y-3'>
                {mockFiles.map(file => (
                  <div
                    key={file.id}
                    className='flex items-center gap-3 rounded-lg p-2 hover:bg-muted'
                  >
                    <FileText className='h-5 w-5 text-muted-foreground' />
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel */}
        <Card className='p-6'>
          <div className='space-y-4'>
            <Input placeholder='Your Org name' />

            <Textarea placeholder='About your org' className='min-h-[100px]' />

            <div className='relative'>
              <Input placeholder='Your System prompt' />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      className='absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0'
                    >
                      <Info className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>System prompt helps define the behavior of your AI assistant</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Input placeholder='Out of Contex reply' />

            <Button variant='outline' className='w-full'>
              <Upload className='mr-2 h-4 w-4' />
              Upload company icon
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
