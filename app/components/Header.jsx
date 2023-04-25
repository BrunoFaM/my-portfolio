import Navigation from './Navigation'

function Header() {
  return (
    <header className='flex sticky top-0 inset-x-0  justify-between items-center p-5 h-16 bg-[#181847]'>
        <div className='font-libreBold'>Icono</div>
        <Navigation />
    </header>
  )
}

export default Header