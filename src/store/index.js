import { configureStore } from "@reduxjs/toolkit";
import { city } from "./citySlice";
import { missionTypes } from "./missionTypesSlice";
import { shift} from "./shiftSlice";

export default configureStore({
    reducer: {
        shift: shift.reducer,
        missionTypes: missionTypes.reducer,
        city: city.reducer
    }
})
