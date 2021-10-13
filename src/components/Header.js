const Header = ({text}) => {

    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
           <h1>Task tracker</h1>
           <button className='btn btn-success' onClick={onClick}>{text}</button> 
        </header>
    );
}


export default Header