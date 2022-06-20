import { createSelector } from "reselect";
const selectContent = state => state.ContentReducer;
export const selecIsContentFetching = createSelector(
    [selectContent],
    (Content) => Content.isFetching
)
export const selecContentData = createSelector(
    [selectContent],
    (Content) => Content.contentData
)
export const selecIsModalVisible = createSelector(
    [selectContent],
    (Content) => Content.isModalVisible
)

export const selecContentVar = createSelector(
    [selectContent],
    (Content) => Content.contentVar
)