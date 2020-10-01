import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ulLHoHI-gZiEDHK4RdZ5mc3l81XhbLUkcmJSt609eo9gn6CMM2gYyTa6tRCWc99ijRO1orgmLmbgjWMib2giHNxPxO-jRP_lxcJprKOFHZPIG4aIXVSZAwO4Qvx0X3Yx'
    }
});