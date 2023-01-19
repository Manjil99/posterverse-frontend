import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// mui icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// 3rd party
import SwipeableViews from 'react-swipeable-views';

// react icons
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from '../Themes/commonStyles';
import './CarouselCard.css';

const CarouselCard = ({poster}) => {
    const [activeStep,setActiveStep] = React.useState(0);
    const maxSteps = poster.images.length; // so that we know how many dots
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
    };
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
    };
    const handleStepChange = (step) => {
      setActiveStep(step); // handle swipe change
    };
  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
        {poster.images.length && (
        <SwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {poster.images.map((step, index) => {
            return (
              <div key={step._id}>
                <Link to={`/poster/${poster._id}`} style={{ textDecoration: 'none'}}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.url}
                  alt={step._id}
                ></Box>
                </Link>
              </div>
            );
          })}
        </SwipeableViews>
        )}
        <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: 'transparent' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {poster.name}</Typography>
          <Typography component="h4"> {poster.genre}</Typography>
          <Typography component="h5"> {poster.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {poster.ratings === 0 ? (
              <React.Fragment>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component="h5"> {poster.ratings}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
          
  )
}

export default CarouselCard