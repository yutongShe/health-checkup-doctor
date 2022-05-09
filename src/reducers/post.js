import { UPDATE, TRANSFER } from '../constants/actionTypes';
import { initState } from './initState';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {

    case UPDATE:
      return {...state, personalInfo: action.payload.personalInfo, healthHistory: action.payload.healthHistory, itemsRecommendation: action.payload.itemsRecommendation };

    case TRANSFER:
      return {...state, doctorRecommend: action.payload.doctorRecommend, doctorNotRecommend: action.payload.doctorNotRecommend};
      
    default:
      return state;
  }
};