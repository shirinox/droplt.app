import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { SheetTrigger, SheetContent, SheetHeader, Sheet, SheetTitle } from './ui/sheet';

const Navigation = () => {
	return (
		<nav className='p-4 px-6 my-4 mx-8 rounded-full flex justify-between items-center bg-primary/10'>
			<div className='flex gap-2 items-center'>
				<Link href='/'>
					<Image className='mx-auto' src='/droplt.svg' alt='Droplt logo' width={48} height={48} />
				</Link>
			</div>

			<div className='flex gap-4 items-center'>
				<Link href='/dashboard'>
					<Button className='rounded-full hover:ring-2 ring-offset-2 hover:ring-offset-4 transition-all'>
						Get started free
					</Button>
				</Link>
				<Sheet>
					<SheetTrigger>
						<Menu className='text-white bg-primary rounded-full p-2 w-10 h-10 cursor-pointer' />
					</SheetTrigger>
					<SheetContent className='bg-primary/70'>
						<SheetHeader>
							<SheetTitle>
								<Image src={'/dropltfull.svg'} alt='Full Droplt Logo' width={128} height={64} />
							</SheetTitle>
						</SheetHeader>
						<div className='flex flex-col my-8 gap-4 text-left text-primary-foreground'>
							<Link href={'/dashboard'} className='text-3xl font-bold hover:underline'>
								Dashboard
							</Link>
							<Link href={'/dashboard'} className='text-3xl font-bold hover:underline'>
								Dashboard
							</Link>
							<Link href={'/dashboard'} className='text-3xl font-bold hover:underline'>
								Dashboard
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navigation;
