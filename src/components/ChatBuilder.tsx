import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Upload, Send } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ChatBuilder() {
  return (
    <div id='chat-builder-container' className='min-h-screen bg-background p-2'>
      <div className='flex min-h-[calc(100vh-2rem)]'>
        <div className='min-h-full w-1/3 rounded-lg border border-slate-500 p-4'>
          <h2 className='text-lg font-semibold'>Edit Bot theme</h2>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='welcome'>Bot welcome message</Label>
              <Input id='welcome' placeholder='Enter welcome message' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='hero'>Hero message</Label>
              <Input id='hero' placeholder='Enter hero message' />
            </div>

            <Separator />

            <div className='space-y-4'>
              <h3 className='text-sm font-medium'>Appearance</h3>

              <div className='flex items-center justify-between'>
                <Label htmlFor='background'>Background</Label>
                <Switch id='background' />
              </div>

              <div className='flex items-center justify-between'>
                <Label htmlFor='chat-bubble'>Chat bubble</Label>
                <Switch id='chat-bubble' />
              </div>

              <div className='flex items-center justify-between'>
                <Label htmlFor='text-color'>Text color</Label>
                <Switch id='text-color' />
              </div>

              <div className='flex items-center justify-between'>
                <Label htmlFor='show-logo'>Show Logo</Label>
                <Switch id='show-logo' />
              </div>

              <div className='flex items-center justify-between'>
                <Label htmlFor='show-hero'>Show Hero Message</Label>
                <Switch id='show-hero' />
              </div>
            </div>

            <Button className='w-full'>
              <Upload className='mr-2 h-4 w-4' />
              Upload company icon
            </Button>
          </div>
        </div>
        <div className='min-h-full w-2/3'>
          <div className='mb-6 text-center'>
            <p className='text-sm text-muted-foreground'>See changes realtime</p>
          </div>

          <div className='mx-auto max-w-md space-y-4 rounded-lg border p-4'>
            <div className='mb-4 flex justify-center'>
              <div className='flex h-16 w-16 items-center justify-center rounded-lg bg-muted'>
                <span className='text-xs text-muted-foreground'>Company Logo</span>
              </div>
            </div>

            <div className='mb-4 text-center'>
              <p className='text-lg font-medium'>Hero message</p>
            </div>

            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm'>
                Initial msgs 01
              </div>
              <div className='inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm'>
                Initial msgs 01
              </div>
            </div>

            <div className='rounded-lg bg-muted p-3'>
              <p className='text-sm'>Welcome chat bubble</p>
            </div>

            <div className='flex gap-2'>
              <Input disabled placeholder='message input box (disabled)' />
              <Button size='icon' variant='ghost'>
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
