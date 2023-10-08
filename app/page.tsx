import Plans from '@/components/hero/Plans';
import { ArrowDown } from 'lucide-react';
import UploadComponent from '@/components/UploadComponent';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='text-center mt-12 mx-2'>
			<Link href='/'>
				<Image className='mx-auto' src='/droplt.svg' alt='Droplt logo' width={128} height={128} />
			</Link>
			<h1 className='text-4xl font-bold mt-4 mb-2'>
				Uploading files shouldn't be <span className='text-red-400'>hard</span>. <br />
				<span className='text-blue-500'>Droplt</span> is only one <span className='text-blue-500'>drop</span>{' '}
				away.
			</h1>
			<p className='text-lg'>
				Droplt is an open-source <span className='font-semibold'>lifetime</span> file sharing service.
			</p>
			<ArrowDown className='text-blue-500 mx-auto mt-4 mb-8 animate-bounce w-10 h-10' />
			<UploadComponent />
		</div>
	);
}
