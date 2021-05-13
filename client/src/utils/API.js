import axios from "axios";

export default {
    //searches a single book
    getBook: function(search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    }
}