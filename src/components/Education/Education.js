import { useState } from 'react'
import './Education.scss'
import leftArrow from 'assets/images/left.svg';
import rightArrow from 'assets/images/right.svg';
import Button from 'components/Shared/Button/Button';
import { useRef } from 'react';
const educationData = require('data/Education.json')

const Education = (props) =>{

    const eduRef = useRef();
    props.sendEduRef(eduRef);

    const [currentEduNum, setCurrentEduNum] = useState(0);

    const edus = educationData.Education;
    const eduNum = educationData.Education.length

    const eduNumIncrease = () => {
        if(currentEduNum <eduNum-1){
            setCurrentEduNum(currentEduNum+1);
        }
    }

    const eduNumDecrease = () => {
        if(currentEduNum > 0){
            setCurrentEduNum(currentEduNum-1);
        }
    }


    return (
        <div ref={eduRef} className={'started-content'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-4'}>Education</span>
            </div>
            <div className={'phone-text-wrapper'}>
                <span className={'entity-text my-auto'}>Recent</span>
                <span className={'entity-text my-auto'}>Past</span>
            </div>
            <div className={'d-flex buttons-arrangment mb-4'}>
                <span className={'entity-text my-auto recent-text'}>Recent Education</span>
                    <Button isImageButton={true} imageObject={leftArrow} registerClick={eduNumDecrease}/>
                    <Button isImageButton={true} imageObject={rightArrow} registerClick={eduNumIncrease}/>
                <span className={'entity-text my-auto past-text'}>Past Education</span>
            </div>
            <div>
                <div className={'d-flex table-sizing mb-5'}>
                    <table>
                        <tr>
                            <th className={'entity-text'}>Institution Name:</th>
                            <td>{edus[currentEduNum].InstitutionName}</td>
                        </tr>
                        <tr>
                            <th className={'entity-text'}>Education Level:</th>
                            <td>{edus[currentEduNum].Level}</td>
                        </tr>
                        <tr>
                            <th className={'entity-text'}>From:</th>
                            <td>{edus[currentEduNum].From}</td>
                        </tr>
                        <tr>
                            <th className={'entity-text'}>To:</th>
                            <td>{edus[currentEduNum].To}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Education