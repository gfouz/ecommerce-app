import Form from '../form/Form';
import FouzLogo from 'logo/FouzLogo';
import Tooltip from 'components/tooltip/Tooltip';

export default function Footer() {
  return (
    <footer className='flex justify-center p-8 w-[100%] bg-[--dark-green]'>
      <div className='container py-6'>
        <div className='flex justify-center pb-5 pt-2'>
          <Form />
        </div>
        <hr className='h-px mt-6 bg-[--sky-color] border-none' />

        <div className='text-[--sky-color] flex flex-col items-center justify-between mt-6 md:flex-row'>
          <div>
            <a
              href='https://github.com/gfouz'
              className='tracking-wide text-xl font-bold hover:text-[--scion]'
            >
              FOUZ
            </a>
          </div>
          <div className='flex mt-4 md:m-0 '>
            <div className='-mx-4'>
              <a href='https://github.com/gfouz' className='px-4 text-sm'>
                Github
              </a>
              <a href='#' className='px-4 text-sm'>
                Blog
              </a>
              <a href='https://dev.to/gfouz' className='px-4 text-sm '>
                dev.to
              </a>
              <a href='#' className='px-4 text-sm'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
