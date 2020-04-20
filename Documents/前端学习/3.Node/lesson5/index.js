const fetch = require('node-fetch');

//get
module.exports.get = async url => {
    //console.log(url);
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
};

//post
module.exports.post = async (url, data) => {
    //console.log(url);
    const response = await fetch(url, {
        method: "POST",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
};

//put
module.exports.put = async (url, data) => {
    //console.log(url);
    const response = await fetch(url, {
        method: "PUT",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
};

//delete
module.exports.delete = async (url, data) => {
    //console.log(url);
    const response = await fetch(url, {
        method: "DELETE",
        header: {
            "Content-type": "application/json"
        },
    });
    const resData = await "delete success";
    return resData;
};

