import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQxNzRkZTVmNDdmNzc4YzU3YzgwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjI5MjY4OSwiZXhwIjoxNjc2NTUxODg5fQ.L8qFMs_pQYKT5YHBzxYiKXOVRXoIEcV6_ZBOojo73Yc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
