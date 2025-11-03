import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 15000,
});

export async function getClientes() {
  const { data } = await api.get("/clientes");
  return data ?? [];
}

export async function postCliente(payload) {
  const { data } = await api.post("/clientes", payload);
  return data;
}
