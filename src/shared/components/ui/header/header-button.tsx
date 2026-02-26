import { ReactNode } from "react";

export default function HeaderButton({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div
			className='min-w-12 max-w-12 min-h-12 max-h-12 rounded-full bg-white flex items-center justify-center cursor-pointer text-gray-500 hover:bg-white/80 hover:text-gray-400 transition-colors ease-in-out'
		>
			{children}
		</div>
	);
}