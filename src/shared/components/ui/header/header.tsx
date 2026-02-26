import { Bell, Headset } from 'lucide-react'
import Image from 'next/image'
import HeaderButton from './header-button'
import { HeaderNavigation } from './header-navigation'

export default function Header() {
	return (
		<header>
			<div className='px-6 py-4 flex items-center'>
				<Image
					src='/logo.png'
					alt='FlavorFit Logo'
					width={50}
					height={50}
					className='rounded-full mr-8'
				/>

				<HeaderNavigation />

				<div className='ml-auto flex gap-2 items-center'>
					<HeaderButton>
						<Headset size='32' />
					</HeaderButton>

					<HeaderButton>
						<Bell size='32' />
					</HeaderButton>
				</div>

				<div className='ml-4 flex items-center gap-4 px-3'>
					<Image 
						src='/profile.jpeg'
						alt='Personal photo'
						width={50}
						height={50}
						className='rounded-full'
					/>

					<div>
						<h3 className='text-2xl text-gray-950'>Никита</h3>
						<h5 className='text-lg text-gray-500'>zerocomputer@ya...</h5>
					</div>
				</div>
			</div>
		</header>
	);
}