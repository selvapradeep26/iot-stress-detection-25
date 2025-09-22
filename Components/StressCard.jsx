import{CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import './LevelCard.css';
import 'react-circular-progressbar/dist/styles.css';


const LevelCard = ({title,level,percentage}) =>{
    const percentageValue = Math.round(percentage);

    let barColor = '#3f51b5';
    if(percentageValue>=75){
        barColor = '#f44336';

    }
    else if(percentageValue >= 50){
        barColor = '#ffc107';
    
    }
    else{
        barColor = '#4caf50';
    }

    return(
        <div className='card-container'>
            <div className = 'card-title'>
                <h3>{title}</h3>
            </div>
            <div className='circular-bar-wrapper'>
                <CircularProgressbar
                value = {percentageValue}
                text={`${percentageValue}`}
                styles={buildStyles({
                    textColor:'#000',
                    pathColor:barColor,
                    trailcolor:'#d6d6d6',
                    strokeLinecap: 'round',
                    backgroundColor: '#f8f8f8',

                })}
                />


            </div>
            <div className='level-text'>
                <p>Level: **{level}**</p>
            </div>
        </div>
    );
};

export default LevelCard;
