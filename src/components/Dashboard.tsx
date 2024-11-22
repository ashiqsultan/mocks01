import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TextDocDialogForm } from '@/components/TextDocDialogForm';
import { useState } from 'react';
import DocumentList from '@/components/DocumentList';

export default function Dashboard() {
  // State to manage dialog visibility
  const [isTextDocDialogOpen, setIsTextDocDialogOpen] = useState(false);
  return (
    <div className='container mx-auto p-6'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* Left Panel */}
        <Card className='p-6'>
          <div className='space-y-4'>
            <TextDocDialogForm isOpen={isTextDocDialogOpen} onOpenChange={setIsTextDocDialogOpen} />
            <DocumentList />
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
