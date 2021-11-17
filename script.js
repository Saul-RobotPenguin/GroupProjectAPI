import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const nasaStuff = async () => {
  const url = `${BASE_URL}${API_KEY}`;
  const response = await axios.get(url);
  const image = response.data.hdurl;
  console.log(response.data);
  document.getElementById("heading").innerHTML = response.data.title;
  document.getElementById("paragraph").innerHTML = response.data.explanation;
  document.getElementById("images").innerHTML = `<img src=${image}></img>`;

  return response.data;
};

nasaStuff();
