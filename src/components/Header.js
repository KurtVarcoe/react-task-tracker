const Header = ({text, onShow, showAddTask}) => {
    return (
        <header className='header'>
           <h1>Task tracker</h1>
           <button className={`btn btn${showAddTask ? '-danger' : '-success'}`} onClick={onShow}>{showAddTask ? 'Close' : text}</button> 
        </header>
    );
}


export default Header