import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CreateTextDoc = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleCreate = () => {
    console.log({ title, content });
  };

  return (
    <div className='mx-4 my-4'>
      <Card className='p-4'>
        <CardHeader className='my-1'>
          <h2 className='text-xl font-semibold'>Create Text Document</h2>
        </CardHeader>
        <CardContent>
          <div className='mb-4'>
            <Input
              type='text'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='p-2'
            />
          </div>
          <Textarea
            placeholder='Content'
            value={content}
            onChange={e => setContent(e.target.value)}
            className='h-40 p-2'
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreate} className='mt-4'>
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateTextDoc;
