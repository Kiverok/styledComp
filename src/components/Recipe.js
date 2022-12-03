import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import { RecipeInfo, InfoBlock, Badge, BadgeList } from './Recipe.styled';



export const Recipe = ({ recipe: {Name, time, servings, calories, difficulty} }) => {
    return (
        <div>
            <h2>{Name}</h2>
            <RecipeInfo>
                <InfoBlock> <BsAlarm size={24} /><span>{time} min</span></InfoBlock>
                <InfoBlock> <HiOutlineChartPie size={24}/> <span>{servings} servings</span></InfoBlock>
                <InfoBlock> <HiOutlineChartBar size={24}/><span>{calories} calories</span></InfoBlock>
            </RecipeInfo>
            <div>
                <h3>Difficulty</h3>
                <BadgeList>
                <Badge difficulty={difficulty}></Badge>
                <Badge>Medium {difficulty === 'medium' && 'active'}</Badge>
                <Badge>Hard {difficulty === 'hard' && 'active'}</Badge>
                </BadgeList>
            </div>
        </div>
    )
};
Recipe.propTypes = {
recipe: PropTypes.shape({
name: PropTypes.string.isRequired,
time: PropTypes.string.isRequired,
servings: PropTypes.number.isRequired,
calories: PropTypes.number.isRequired,
difficulty:PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
}).isRequired
};