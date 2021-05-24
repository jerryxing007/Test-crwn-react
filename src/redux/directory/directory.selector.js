import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectorDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)