// import axios from "axios";

// export default axios.create({
//     //baseURL: 'http://gateway.marvel.com/',
//     baseURL: 'https://api.unsplash.com/photos',
//     //baseURL: "https://api.rawg.io/api",
//     params: {
//         key:'4KK0GFyzcZHMzT1Me-ZfW5nj9urzAttzDRu0j9O8HP8'
//         //key:'f99cefd5ca8348a7b04c53f1389ba3d1'
//         //key: "604775bd6ddd81527537686db1cafcf9",
//     },
// });

// import axios from "axios";

// export default axios.create({
//     baseURL: 'https://api.unsplash.com',
//     params: {
//         key: '4KK0GFyzcZHMzT1Me-ZfW5nj9urzAttzDRu0j9O8HP8'
//     }
// });

// import axios from "axios";

// export default axios.create({
//     baseURL: 'https://api.unsplash.com',
//     params: {
//         client_id: '4KK0GFyzcZHMzT1Me-ZfW5nj9urzAttzDRu0j9O8HP8' // Use client_id here
//     }
// });

import axios from "axios";

export default axios.create({
    baseURL: 'https://developer.marvel.com',
    params: {
        key: 'eeb21a6b38b98d64251735eb5135a3e1223b618a' // Use Access Key here
    }
    // headers: {
    //     'Authorization': 'Client-ID 4KK0GFyzcZHMzT1Me-ZfW5nj9urzAttzDRu0j9O8HP8', // Access Key in the header
    //     'Application-ID': '654666' // Application ID in the header if needed
    // }
});
