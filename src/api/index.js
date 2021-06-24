import axios from "axios";

const API = axios.create({
  baseURL: "https://api.shrtco.de/v2",
});

export const shortenThisUrl = (s) =>
  API.get("/shorten", { params: { url: s } });
