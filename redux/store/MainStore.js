import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "../slices/ContactSlice";
import { reportsReducer } from "../slices/ReportSlice";
import { pressReleasesReducer } from "../slices/PressRelesead";
import infographicsReducer from "../slices/Infographicsslice";
import viewinfographicsReducer from "../slices/ViewInfographics";
import viewpressReleaseReducer from "../slices/ViewPressReleased"

const store = configureStore({
    reducer: {
        contact: contactReducer,
        reports: reportsReducer,
        pressReleases: pressReleasesReducer,
        infographics: infographicsReducer,
        viewinfographics: viewinfographicsReducer,
        viewpressRelease: viewpressReleaseReducer,
        viewinfographic: viewinfographicsReducer

    },
});

export default store;