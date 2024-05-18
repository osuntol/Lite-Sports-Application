import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react';

export default function HeroSection() {
  return (
    <section>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Welcome to Realm Rivals
        </h1>
        <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Search & Compare current & retired NBA players statistics
        </p>
        <div className='flex gap-2 items-center max-w-xs mx-auto'>
          <Input placeholder='Search your favourite players...' />
          <Button size={'icon'}>
            <SearchIcon size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
