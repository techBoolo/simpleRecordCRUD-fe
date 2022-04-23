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
  const { data } = await axios(`${backend_root_url}/records/${id}`)
  return data
}

export const updateRecord = async (updateData) => {
  const { name, email, age, gender } = updateData
  const id = updateData._id
  const d = { name, email, age, gender }
  const { data } =  await axios.patch(`${backend_root_url}/records/${id}`, d)
  return data
}

export const deleteRecord = async (id) => {
  const { data } =  await axios.delete(`${backend_root_url}/records/${id}`)
  return data
}
