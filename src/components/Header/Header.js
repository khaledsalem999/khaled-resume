import './Header.scss'
import logo from 'assets/images/placeholder-logo.png'
import Button from 'components/Shared/Button/Button'
import { useEffect, useState } from 'react'
const headerData = require('data/Header.json')

const Header = (props) => {

    //var refsList = props.refsList.filter(e => e.current);
    const [headersList, setheadersList] = useState();

    const headers = headerData.Categories;

    const downloadButtonText = "DOWNLOAD CV";

    useEffect(() => {
        setheadersList(props.refsList.filter(e => e.current))
    })

    const filterRefsList = (index) => {
        headersList[index].current.scrollIntoView()
    }
    
    return (
        <div className={'header-container'}>
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