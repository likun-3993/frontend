import axios from "axios";
import React, { useState, useContext } from "react";

const test = async (data) => {
  axios({
    method: "POST",
    url: "https://tribe-backend-app-node.herokuapp.com/api/user/posttrek/",
    data,
  })
    .then(function (response) {
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

const fest = async () => {
  axios({
    method: "GET",
    url: "https://tribe-backend-app-node.herokuapp.com/",
    // data,
  })
    .then(function (response) {
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

const testme = async (data) => {
  axios({
    method: "POST",
    url: "https://tribe-backend-app-node.herokuapp.com/api/user/posttrip/",
    data,
  })
    .then(function (response) {
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

const dataPost = async (data) => {
  axios({
    method: "POST",
    url: "https://tribe-backend-app-node.herokuapp.com/api/user/create/",
    data,
  })
    .then(function (response) {
      // setRes(response.data)()
      console.log(response.data);
      // test(response.data);
      // console.log("new arrived data is", res);
      // const d = response.data;
    })
    .catch(function (error) {
      // console.log(error);
      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        console.log(error.response.status);
        // console.log(error.response.headers);
        return error.response.status;
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};

export { test, dataPost, testme, fest };
