import axios from "axios";

// const googleSearch = "https://www.googleapis.com/books/v1/volumes?q="
// const api_key = process.env.API_KEY;
export default {
    getTitle: function() {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=&key="+${process.env.REACT_APP_GOOGLE_API_KEY}`)
    }
}