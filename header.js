import '../App.css';
function Header({onChangeValueUser, inputValueSearch}){



    const changeUserValue = (e) => {
        const{value} = e.target;
        onChangeValueUser(value);
    }





    return (
      <header className="header">
          <input
              value={inputValueSearch}
              type = "text"
              className="search-input"
              onChange={changeUserValue}
              />
      </header>
    );





}
export default Header;