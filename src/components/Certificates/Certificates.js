import { useState } from 'react'
import './Certificates.scss'
import leftArrow from 'assets/images/left.svg';
import rightArrow from 'assets/images/right.svg';
import Button from 'components/Shared/Button/Button';
import { useRef } from 'react';
const certificatesData = require('data/Certificates.json')

const Certificates = (props) =>{

    const certsRef = useRef();
    props.sendCertsRef(certsRef);

    const [currentCertNum, setCurrentCertNum] = useState(0);

    const certs = certificatesData.Certificates;
    const certNum = certificatesData.Certificates.length

    const certNumIncrease = () => {
        if(currentCertNum < certNum-1){
            setCurrentCertNum(currentCertNum+1);
        }
    }

    const certNumDecrease = () => {
        if(currentCertNum > 0){
            setCurrentCertNum(currentCertNum-1);
        }
    }


    return (
        <div ref={certsRef} className={'started-content'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-4'}>Certificates</span>
            </div>
            <div className={'phone-text-wrapper'}>
                <span className={'entity-text my-auto'}>Recent</span>
                <span className={'entity-text my-auto'}>Past</span>
            </div>
            <div className={'d-flex buttons-arrangment mb-4'}>
                <span className={'entity-text recent-text my-auto recent-text'}>Recent Certificates</span>
                    <Button isImageButton={true} imageObject={leftArrow} registerClick={certNumDecrease}/>
                    <Button isImageButton={true} imageObject={rightArrow} registerClick={certNumIncrease}/>
                <span className={'entity-text past-text my-auto past-text'}>Past Certificates</span>
            </div>
            <div>
                <div className={'d-flex table-sizing mb-5'}>
                    <table>
                        <tr>
                            <th className={'entity-text'}>Title:</th>
                            <td>{certs[currentCertNum].name}</td>
                        </tr>
                        <tr>
                            <th className={'entity-text'}>Institution:</th>
                            <td>{certs[currentCertNum].Institution}</td>
                        </tr>
                        <tr>
                            <th className={'entity-text'}>ID:</th>
                            <td>{certs[currentCertNum].ID}</td>
                        </tr>
                        <tr>
                            <th className={'entity-text'}>Date:</th>
                            <td>{certs[currentCertNum].Date}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Certificates