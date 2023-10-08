import Plans from '@/components/hero/Plans';
import { ArrowDown, Folder, MousePointer2, PartyPopper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='text-center mt-12 mx-2'>
			<div className='mx-auto bg-primary/10 w-fit px-4 py-2 rounded-full text-xs md:text-sm mb-10 flex gap-2 items-center justify-center'>
				<PartyPopper className='text-primary fill-primary w-4 h-4' />
				<span className='text-primary font-medium'>
					Droplt.app just launched. Share your{' '}
					<Link className='underline' href={'/'}>
						feedback
					</Link>{' '}
					with us!
				</span>
			</div>
			<Link href='/'>
				<Image className='mx-auto' src='/droplt.svg' alt='Droplt logo' width={128} height={128} />
			</Link>
			<h1 className='text-4xl font-bold mt-4 mb-2'>
				Uploading files shouldn't be <span className='text-red-400'>hard</span>. <br />
				<span className='text-primary'>Droplt</span> is only one <span className='text-primary'>drop</span>{' '}
				away.
			</h1>
			<p className='text-lg'>
				Droplt is an <Link href={'https://github.com/shirinox/droplt.app'}>open-source</Link>{' '}
				<span className='font-semibold'>lifetime</span> file sharing service.
			</p>
			<ArrowDown className='text-primary mx-auto mt-4 mb-8 animate-bounce w-10 h-10' />
			<div className='my-4 text-center mx-auto max-w-3xl'>
				<div className='w-fit h-fit mx-auto relative'>
					<Folder className='fill-primary text-primary/20 w-32 h-32 mx-auto relative' />
					<div className='absolute bottom-2 -right-1 w-6 h-6 bg-primary/30 rounded-full animate-ping' />
				</div>
				<MousePointer2 className='text-primary w-16 h-16 mx-auto translate-x-20 -translate-y-8 z-10' />
			</div>
			<Plans />
		</div>
	);
}
