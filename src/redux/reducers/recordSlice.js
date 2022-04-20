import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as recordAPI from '../../services/record.js'

export const getRecords = createAsyncThunk(
  'record/getRecords',
  async (thunkAPI) => {
    try {
      return await recordAPI.fetchRecords()      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const saveRecord = createAsyncThunk(
  'record/saveRecord',
  async (data, thunkAPI) => {
    try {
      await recordAPI.save(data)      
      return thunkAPI.dispatch(getRecords())
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const recordSlice = createSlice({
  name: 'record',
  initialState: {
    loading: false,
    records: [],
    currentRecord: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.loading = true
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.loading = false
        state.records = action.payload
      })
      .addCase(getRecords.rejected, (state) => {
        state.loading = false
      })
  }
})

export default recordSlice.reducer
