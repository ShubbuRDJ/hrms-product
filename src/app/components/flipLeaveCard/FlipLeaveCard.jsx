import './flip-leave-card.scss'
import PropTypes from 'prop-types';

const FlipLeaveCard = ({ frontComponent, backComponent, cardRowLimit, cardGap }) => {

    return (
        <>
            <div className='flip-card' style={{ width: `calc((100% - ${cardGap * (cardRowLimit - 1)}px)/${cardRowLimit})` }}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {frontComponent}
                    </div>
                    <div className="flip-card-back">
                        {backComponent}
                    </div>
                </div>
            </div>
        </>
    )
}


FlipLeaveCard.propTypes = {
    frontComponent: PropTypes.element.isRequired,
    backComponent: PropTypes.element.isRequired,
    cardRowLimit: PropTypes.number.isRequired,
    cardGap: PropTypes.number.isRequired,
  };
  

export default FlipLeaveCard
