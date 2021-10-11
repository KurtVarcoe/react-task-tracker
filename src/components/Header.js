const Header = ({text}) => {

    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
           <h1>Task tracker</h1>
           <button className='btn' onClick={onClick}>{text}</button> 
        </header>
    );
}


export default Header