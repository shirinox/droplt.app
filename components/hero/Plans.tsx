import { Check, XIcon } from 'lucide-react';
import { Button } from '../ui/button';

const Plans = () => {
	return (
		<div className='my-32 max-w-3xl rounded mx-auto p-6'>
			<h4 className='text-4xl text-primary font-bold mt-4'>
				Simple needs, <br /> transparent prices
			</h4>
			<p className='text-lg my-2 mb-8'>Start free and upgrade up to your needs.</p>
			<div className='max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-center'>
				<div className='p-4 text-center bg-primary-foreground text-primary rounded ring-4 ring-primary/30'>
					<p className='py-1 px-4 bg-primary/20 w-fit mx-auto rounded-full text-sm font-bold m-2'>
						Up to 5GB
					</p>
					<p className='text-2xl font-semibold'>Free</p>
					<p className='opacity-50 font-medium'>Free forever</p>
					<p className='text-5xl my-2 font-bold'>0$</p>
					<p className='opacity-70'>Lifetime</p>
					<div className='mx-3 mt-4 flex flex-col gap-1 text-xs'>
						<div className='flex gap-2 items-center'>
							<Check className='w-4 h-4' /> <p>Encrypted files, less worries</p>
						</div>
						<div className='flex gap-2 items-center'>
							<Check className='w-4 h-4' /> <p>Access wherever, whenever</p>
						</div>
						<div className='flex gap-2 items-center text-left'>
							<XIcon className='w-6 h-6' /> <p>Ability to upgrade your storage up to your demand</p>
						</div>
					</div>
				</div>
				<div className='p-4 text-center bg-primary text-primary-foreground rounded ring-4 ring-primary/30'>
					<p className='py-1 px-4 bg-primary-foreground/20 w-fit mx-auto rounded-full text-sm font-bold m-2'>
						Up to 50GB
					</p>
					<p className='text-2xl text-primary-foreground font-semibold'>Premium</p>
					<p className='opacity-50 font-medium'>Pro plan</p>
					<p className='text-5xl my-2 font-bold'>25$</p>
					<p className='opacity-70'>Lifetime</p>
					<div className='mx-3 flex flex-col gap-1 mt-4 text-xs'>
						<div className='flex gap-2 items-center'>
							<Check className='w-4 h-4' /> <p>Encrypted files, less worries</p>
						</div>
						<div className='flex gap-2 items-center'>
							<Check className='w-4 h-4' /> <p>Access wherever, whenever</p>
						</div>
						<div className='flex gap-2 items-center text-left'>
							<Check className='w-6 h-6' /> <p>Ability to upgrade your storage up to your demand</p>
						</div>
					</div>
				</div>
			</div>
			<Button className='rounded-full my-6 w-1/2'>Get Started</Button>
		</div>
	);
};

export default Plans;
