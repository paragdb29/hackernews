import moment from 'moment';

export const getDate = (val) => {
    return moment.unix(val).format("MMM Do YY");
}