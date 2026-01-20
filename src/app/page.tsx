import { Filter, Search } from 'lucide-react'
import InputControl from '../shared/ui/controls/input-control'

export default function Home() {
  return (
    <div className='px-6 py-3'>
      <div className='flex gap-6 items-center'>
        <div className='flex flex-col items-start min-w-fit'>
          <h3 className='text-4xl'>Привет, <b>Никита</b></h3>
          <p className='text-2xl'>За сегодня <b>8</b> упражнений</p>
        </div>

        <InputControl 
          placeholder='Поиск рецептов и не только' 
          leftIcon={Search} 
          rightIcon={Filter} 
        />
      </div>
    </div>
  );
}
