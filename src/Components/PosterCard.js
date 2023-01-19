import { Grid , Box } from '@mui/material';
import React, { Fragment ,useState , useEffect } from 'react'
import CarouselCard from './CarouselCard';
import { useSelector , useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../actions/productAction';
import Loader from './Layout/Loader/Loader';
import { useAlert } from 'react-alert';
import { useParams } from 'react-router';
import './common.css';

const PosterCard = () => {
   
   const {keyword} = useParams();
   const {genre} = useParams();
   const alert = useAlert();
   const dispatch = useDispatch();
   const {loading,error,products} = useSelector(state => state.products);
     useEffect(() => {
         if(error){
            alert.error(error);
            dispatch(clearErrors());
         }
        if(genre)dispatch(getProduct(keyword,genre));
        else dispatch(getProduct(keyword));
     },[dispatch, error, alert,keyword,genre]);
    
    return (
        <Fragment>
        {loading ? (<Loader />):
        ( <Fragment>
        <Box sx={{mx:2}}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {   products &&
                    products.map( poster => {
                        return (
                            <Grid key={poster._id} item xs={12} sm={4} md={4} lg={3}>
                                <CarouselCard poster={poster}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
        </Fragment> )
        }
        </Fragment>
    )
}

export default PosterCard;