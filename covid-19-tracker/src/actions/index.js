import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const fetchCountries = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START })

        axios.get('https://api.covid19api.com/summary')
            .then(res => {
                console.log(res)
                dispatch ({ type:FETCH_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch ({ type: FETCH_DATA_FAILURE, payload: err.message })
            })
    }
}