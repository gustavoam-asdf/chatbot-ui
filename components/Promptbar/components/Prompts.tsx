import { FC } from 'react';
import Link from 'next/link';
import { Prompt } from '@/types/prompt';
import { PromptComponent } from './Prompt';

interface Props {
  prompts: Prompt[];
}

export const Prompts: FC<Props> = ({ prompts }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="relative flex items-center">
        <Link className='w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white hover:bg-neutral-800' href="/">Comprensión verbal</Link>
      </div>
      <div className="relative flex items-center">
        <Link className='w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white hover:bg-neutral-800' href="/razonamiento-perceptivo">Razonamiento perceptivo</Link>
      </div>
      <div className="relative flex items-center">
        <Link className='w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white hover:bg-neutral-800' href="/memoria-trabajo">Memoria de trabajo</Link>
      </div>
      <div className="relative flex items-center">
        <Link className='w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white hover:bg-neutral-800' href="/velocidad-procesamiento">Velocidad de procesamiento</Link>
      </div>
    </div>
  );
};
