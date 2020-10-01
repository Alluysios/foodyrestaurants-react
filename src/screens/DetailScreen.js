import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import FoodDetail from '../components/FoodDetail/FoodDetail';

const DetailScreen = ({ match }) => {
    const [detail, setDetail] = useState(null);

    const getBusiness = async id => {
        const response = await yelp.get(`/${id}`);
        setDetail(response.data);
    }

    useEffect(() => {
        getBusiness(match.params.fid)
    }, [match.params.fid])
    return (
        <div className='container'>
            <FoodDetail food={detail} />
        </div>
    )
}

export default DetailScreen
