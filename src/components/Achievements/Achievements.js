import './Achievements.scss'
import { useRef } from 'react';
const achievementsData = require('data/Achievements.json')

const Achievements = (props) =>{

    const achievementsRef = useRef();
    props.sendAchieveRef(achievementsRef);

    return (
        <div ref={achievementsRef} className={'started-content'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-4'}>Achievements</span>
            </div>
            <div>
                {achievementsData.Achievements.map(
                    (achievement) =>
                        <div className={'d-flex flex-column mb-5'}>
                            <span className={'entity-text'}>{achievement.name}</span>
                            <span className={'mt-2'}>{achievement.Description}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Achievements