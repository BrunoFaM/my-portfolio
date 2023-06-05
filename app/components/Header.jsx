import Navigation from './Navigation'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex sticky top-0 inset-x-0  justify-between items-center p-5 h-16 bg-nav'>
        <Link className='font-libreBold' href='/' >Bruno Moron</Link>
        <Navigation />
    </header>
  )
}

export default Header