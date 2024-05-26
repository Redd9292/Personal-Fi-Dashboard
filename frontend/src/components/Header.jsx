import { Link } from 'react-router-dom';

function Header() {
    return (
       <header className='bg-gray-800 p-4'>
        <nav className='flex justify-between'>
            <div className='flex space-x-4'>
                <Link to='/' className='text-white'>Dashboard</Link>
                <Link to='/transactions' className='text-white'>Transactions</Link>
                <Link to='/settings' className='text-white'>Settings</Link>
            </div>
        </nav>
       </header>
    );
}

export default Header;