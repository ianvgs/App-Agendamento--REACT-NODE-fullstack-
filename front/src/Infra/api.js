//////////////////
const api = require('axios').default;

const ax = api.create({baseURL:'http://localhost:3001/'})

export default ax;
