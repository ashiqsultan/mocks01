import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Upload } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function ChatBuilder() {
  return (
    <div id='chat-builder-container' className='min-h-screen bg-background p-2'>
      <div className='flex min-h-[calc(100vh-2rem)]'>
        {/* Left Panel */}
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
        {/* Right Panel */}
        <div className='flex min-h-full w-2/3 flex-col justify-between space-y-2 px-4'>
          {/* Top Section */}
          <div className='rounded-lg border border-slate-500 py-4 text-center'>
            <div className='flex items-center justify-center space-x-4'>
              <RadioGroup defaultValue='option-one' className='flex'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-one' id='option-one' />
                  <Label htmlFor='option-one'>Desktop</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-two' id='option-two' />
                  <Label htmlFor='option-two'>Mobile</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-three' id='option-three' />
                  <Label htmlFor='option-three'>Initial page</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='option-four' id='option-four' />
                  <Label htmlFor='option-four'>Chat page</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {/* Bottom Section */}
          <div className='flex-grow space-y-4 rounded-lg border border-slate-500 p-4'>
            {/* Chat Viewer*/}
            <div className='flex h-full flex-col'>
              {/* Chat Messages */}
              <div className='flex-1 space-y-4 overflow-y-auto p-4'>
                {/* User Message */}
                <div className='flex items-start justify-end'>
                  <div className='rounded-lg bg-blue-500 px-4 py-2 text-white'>
                    <p>Hello! How can I help you today?</p>
                  </div>
                </div>

                {/* Assistant Message */}
                <div className='flex items-start'>
                  <div className='rounded-lg bg-gray-200 px-4 py-2 text-gray-800'>
                    <p>
                      Hi! I'm your AI assistant. I'm here to help answer any questions you might
                      have.
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className='flex items-start justify-end'>
                  <div className='rounded-lg bg-blue-500 px-4 py-2 text-white'>
                    <p>Can you tell me more about your services?</p>
                  </div>
                </div>

                {/* Assistant Message */}
                <div className='flex items-start'>
                  <div className='rounded-lg bg-gray-200 px-4 py-2 text-gray-800'>
                    <p>
                      I can help you with a variety of tasks including answering questions,
                      providing information, and assisting with various topics. What specific area
                      would you like to know more about?
                    </p>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className='border-t p-4'>
                <div className='relative flex items-center'>
                  <input
                    type='text'
                    placeholder='Type your message...'
                    className='w-full rounded-lg border border-gray-300 px-4 py-2 pr-12 focus:border-blue-500 focus:outline-none'
                  />
                  <button className='absolute right-2 rounded-lg p-2 text-blue-500 hover:bg-gray-100'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
