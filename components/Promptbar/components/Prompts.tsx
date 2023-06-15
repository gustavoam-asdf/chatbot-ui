import { FC } from 'react';
import { Prompt } from '@/types/prompt';
import { PromptComponent } from './Prompt';

interface Props {
  prompts: Prompt[];
}

export const Prompts: FC<Props> = ({ prompts }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="relative flex items-center">
        <input
          className="w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white"
          type="text"
          placeholder="Comprensión verbal"
          readOnly
        />
      </div>
      <div className="relative flex items-center">
        <input
          className="w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white"
          type="text"
          placeholder="Razonamiento perceptivo"
          readOnly
        />
      </div>
      <div className="relative flex items-center">

        <input
          className="w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white"
          type="text"
          placeholder="Memoria de trabajo"
          readOnly
        />
      </div>
      <div className="relative flex items-center">

        <input
          className="w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white"
          type="text"
          placeholder="Velocidad de procesamiento"
          readOnly
        />
      </div>
    </div>
  );
};
