import types from './types';

const getTubeLinesAction = (value) => ({
    type: types.GET_TUBE_LINES,
    value: value
});

const getLineStatusAction = (value) => ({
    type: types.GET_TUBE_LINE_STATUS_BY_ID,
    value: value
});

const getTubeStopPointsAction = (value) => ({
    type: types.GET_TUBE_STOP_POINTS_BY_ID,
    value: value
});

export default {
    getTubeLinesAction,
    getLineStatusAction,
    getTubeStopPointsAction
};