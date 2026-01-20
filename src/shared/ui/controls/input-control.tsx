export interface InputControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: any;
	rightIcon?: any;
}

export default function InputControl(props: InputControlProps) {
	return (
		<div className='relative h-fit flex items-center bg-white shadow-sm rounded-full w-full'>
			{
				props.leftIcon && 
				<props.leftIcon 
					className='absolute text-gray-600 left-4' 
					size='24' 
				/>
			}

			<input className='w-full px-12 py-4 text-xl focus:outline-hidden' type="text" placeholder={props.placeholder} />

			{
				props.rightIcon && 
				<props.rightIcon 
					className='absolute text-gray-600 right-4' 
					size='24' 
				/> 
			}
		</div>
	);
}