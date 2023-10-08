import Image from 'next/image';
import Link from 'next/link';
import { Droplet, Menu } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
	return (
		<footer className='grid grid-cols-4 p-8 px-6 my-4 mx-8 rounded justify-between text-primary items-center bg-primary/10'>
			<div className='flex flex-col gap-4 mx-4'>
				<Image className='mr-auto ml-' src={'/droplt.svg'} alt='droplet logo' width={64} height={64}></Image>
			</div>
			<div>
				<h4 className='text-xl font-bold'>Product</h4>
				<ul className='mt-2 text-primary/60'>
					<li>
						<Link href='/plans'>
							<p className='hover:underline'>Plans</p>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<p className='hover:underline'>Features</p>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<p className='hover:underline'>Security</p>
						</Link>
					</li>
				</ul>
			</div>
			<div></div>
			<div>
				<h4 className='text-xl font-bold'>Socials</h4>
				<ul className='mt-2 text-primary/60'>
					<li>
						<Link className='hover:underline' href='/plans'>
							Instagram
						</Link>
					</li>
					<li>
						<Link className='hover:underline' href='/plans'>
							Discord
						</Link>
					</li>
					<li>
						<Link className='hover:underline' href='/plans'>
							Twitter
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
