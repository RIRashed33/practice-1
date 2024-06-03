import profileLogo from '/img/profile.jpg'
const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <a className="text-[40px] font-bold" href="#">Knowledge Cafe</a>
            <a href="#"><img src={profileLogo} alt="" /></a>
        </div>
    );
};

export default Header;