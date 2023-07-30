import './Header.scss'
import logo from 'assets/images/placeholder-logo.png'
import Button from 'components/Shared/Button/Button'
const headerData = require('data/Header.json')

const Header = (props) => {

    const refsList = props.refsList;

    const headers = headerData.Categories;

    const downloadButtonText = "DOWNLOAD CV";

    const clickyboi = (data) => {
        console.log(data)
    }

    const filterRefsList = (index) => {
        if(isOdd(index)){
            index = index*2;
        }
        var noe = 2* Math.floor(index/2) + 1;
        refsList[noe].current.scrollIntoView()
    }

    const isOdd = (number) => {
        return number => number % 2 !== 0;
    }

    return (
        <div className={'d-flex header-container'}>
            <div className={'my-auto logo-container'}>
                <img src={logo} height='36'/>
            </div>
            <div className={'m-auto'}>
                {headers.map((headerItem, index) => (
                    <span onClick={() => filterRefsList(index)} key={headerItem.name} id={headerItem.id} className={'nav-item px-4'}>{headerItem.name}</span>
                ))}
            </div>
            {/* <Button buttonText={downloadButtonText}/> */}
        </div>
    )
}

export default Header;