import Link from 'next/link';

const Promptbar = () => {
  return (
    <div
      className={`fixed top-0 right-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0`}
    >
      <div className="flex-grow overflow-auto">
        <h2 className='border-b-2 mb-2 font-bold py-1'>WAIS IV</h2>
        <div className="flex w-full flex-col gap-3">
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
            <Link className='w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white hover:bg-neutral-800' href="/velocidad-procesamiento">V. procesamiento</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promptbar;
