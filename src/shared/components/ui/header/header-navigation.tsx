import { Album, CalendarRange, Carrot, ChartNoAxesCombined, Handbag, House, MessagesSquare } from 'lucide-react'

interface NavigationItem {
	to: string;
	name: string;
	icon: typeof House;
	news: number;
}

export function HeaderNavigation() {
	const navigationItems: NavigationItem[] = [
		{
			to: '/',
			name: 'Главная',
			icon: House,
			news: 0,
		},
		{
			to: '/plan',
			name: 'План питания',
			icon: CalendarRange,
			news: 0,
		},
		{
			to: '/diet',
			name: 'Диета',
			icon: Carrot,
			news: 0,
		},
		{
			to: '/analytics',
			name: 'Аналитика',
			icon: ChartNoAxesCombined,
			news: 0,
		},
		{
			to: '/orders',
			name: 'Заказы',
			icon: Handbag,
			news: 0,
		},
		{
			to: '/recepts',
			name: 'Рецепты',
			icon: Album,
			news: 1,
		},
		{
			to: '/forum',
			name: 'Форум',
			icon: MessagesSquare,
			news: 0,
		},
	];

	return (
		<nav>
			<ul className='flex gap-2 items-center'>
				{
					navigationItems.map((item) => (
						<li 
							key={item.to}
							className='rounded-4xl bg-zinc-200 w-fit text-gray-500 transition-colors hover:bg-zinc-200/90 hover:text-gray-400 duration-300 ease-in-out'
						>
							<a 
								href='#' 
								className='flex gap-3 items-center px-4 py-2'
							>
								<item.icon 
									size='32'
								/>

								<span className='text-lg font-medium'>{item.name}</span>

								{
									item.news > 0 ? (
										<div className='px-2 text-lg rounded-md bg-red-200 text-red-600'>
											+{item.news}
										</div>
									) : null
								}
							</a>
						</li>
					))
				}
			</ul>
		</nav>
	);
}