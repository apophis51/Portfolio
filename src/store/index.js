import { configureStore } from "@reduxjs/toolkit";
import uploadSlice from "../components/uploadSlice";


const store = configureStore(
  {
  reducer: {

    uploadSlice: uploadSlice,

  },
}
);

export default store;
