import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "../slices/ContactSlice";
import { reportsReducer } from "../slices/ReportSlice";
import { pressReleasesReducer } from "../slices/PressRelesead";
import infographicsReducer from "../slices/Infographicsslice";
import viewinfographicsReducer from "../slices/ViewInfographics";
import viewpressReleaseReducer from "../slices/ViewPressReleased";
import createinfographicsReducer from "../slices/createinfographics/NewInfographicsslice";
import createpressReleaseReducer from "../slices/createpressreleased/createpressreleased";
import createreportReducer from "../slices/createreport/createnewreport";

const store = configureStore({
    reducer: {
        contact: contactReducer,
        reports: reportsReducer,
        pressReleases: pressReleasesReducer,
        infographics: infographicsReducer,
        viewinfographics: viewinfographicsReducer,
        viewpressRelease: viewpressReleaseReducer,
        viewinfographic: viewinfographicsReducer,
        createinfographics: createinfographicsReducer,
        createpressRelease: createpressReleaseReducer,
        createnewreport: createreportReducer,
    },
});

export default store;