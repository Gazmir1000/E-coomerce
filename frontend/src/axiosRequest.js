import axios from "axios";

const BASE_API_URL = "http://localhost:5000/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhNzcwNTlhMTNhZDMxZTA4ZTc4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTY0MDU1MSwiZXhwIjoxNjQxODk5NzUxfQ.fkjj7pSNwDshs50Clq6O5J46FKXFxv4Xuwzb0wQRLjI";

export const publicRequest = axios.create({
  baseURL: BASE_API_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_API_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
