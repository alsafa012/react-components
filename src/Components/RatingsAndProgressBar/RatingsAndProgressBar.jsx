import CircleProgressBarWithMap from './AllProgressbars/CircleProgressBarWithMap';
import HorizontalProgressBarWithMap from './AllProgressbars/HorizontalProgressBarWithMap';
import HoverRating from './AllRatings/HoverRating';

const RatingsAndProgressBar = () => {
    return (
        <div className='mx-auto text-center my-5 space-y-10'>
            <HoverRating></HoverRating>
            <HorizontalProgressBarWithMap></HorizontalProgressBarWithMap>
            <CircleProgressBarWithMap></CircleProgressBarWithMap>
        </div>
    );
};

export default RatingsAndProgressBar;