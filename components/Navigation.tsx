import Image from 'next/image';
import Link from 'next/link';
import { Menu, Plus, User } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Navigation = () => {
	return (
		<nav className='p-4 px-6 my-4 mx-8 rounded-full flex justify-between items-center bg-primary/10'>
			<div className='flex gap-2 items-center'>
				<Link href='/'>
					<Image className='mx-auto' src='/droplt.svg' alt='Droplt logo' width={48} height={48} />
				</Link>
				<Badge className='bg-primary/20 w-fit h-fit text-primary'>beta</Badge>
			</div>

			<div className='flex gap-4 items-center'>
				<Link href='/plans'>
					<Button className='rounded-full hover:ring-2 ring-offset-2 hover:ring-offset-4 transition-all'>
						Get started free
					</Button>
				</Link>
				<Menu className='text-white bg-primary rounded-full p-2 w-10 h-10 cursor-pointer' />
			</div>
		</nav>
	);
};

export default Navigation;
