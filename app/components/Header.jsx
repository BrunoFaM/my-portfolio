import Navigation from './Navigation'

function Header() {
  return (
    <header className='flex justify-between items-center p-5 h-16 bg-blue-600'>
        <div>ico</div>
        <Navigation />
    </header>
  )
}

export default Header