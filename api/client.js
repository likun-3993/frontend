import axios from "axios";

const dataFetch = () => {
  axios({
    method: "GET",
    url: "https://git.heroku.com/travel-tribe-backend.git",
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};
const dataPost = (data) => {
  axios({
    method: "POST",
    url: "http://192.168.0.14:8000/api/user/post/",
    data,
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};

export { dataFetch, dataPost };
