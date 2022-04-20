import axios from 'axios'

const backend_root_url = process.env.REACT_APP_BACKEND_ROOT_URL

export const save = async (recordData) => {
  const { data } = await axios.post(`${backend_root_url}/records`, recordData)
  return data
}

export const fetchRecords = async () => {
  const { data } = await axios.get(`${backend_root_url}/records`)
  return data
}

export const fetchRecord = async (id) => {
  return await axios(`${backend_root_url}/records/${id}`)
}

export const updateRecord = async (id, data) => {
  return await axios.patch(`${backend_root_url}/records/${id}`, data)
}

export const deleteRecord = async (id) => {
  return await axios.delete(`${backend_root_url}/records/${id}`)
}
