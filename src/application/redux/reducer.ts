import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  State,
  Country,
  Department,
  City,
  Region,
  Presidents,
} from "../../domain/interfaces/interfaces";

const initialState: State = {
  isLoading: false,
};

const slice = createSlice({
  name: "contry",
  initialState,
  reducers: {
    listContry: (state, action: PayloadAction<Country[]>) => {
      state.country = action.payload;
    },
    listDepartement: (state, action: PayloadAction<Department[]>) => {
      state.department = action.payload;
    },
    listCity: (state, action: PayloadAction<City[]>) => {
      state.city = action.payload;
    },
    listRegion: (state, action: PayloadAction<Region[]>) => {
      state.region = action.payload;
    },
    listPresident: (state, action: PayloadAction<Presidents[]>) => {
      state.presidents = action.payload;
    },
  },
});

export const {
  listContry,
  listDepartement,
  listCity,
  listRegion,
  listPresident,
} = slice.actions;

export default slice.reducer;
