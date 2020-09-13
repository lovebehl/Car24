import {Dimensions} from 'react-native';
const window = Dimensions.get('window');

export const Metrics = {
  FULL_WIDTH: window.width,
  FULL_HEIGHT: window.height,
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const SERVER_BASE_API = {
  URL: BASE_URL,
};

/* ---------------- URL List -------- */
export const APP_URL = {
  POST: '/photos/',
};

/* ----------------  Reducer ActionType -------- */

export const NETWORK_ERROR = '@axios-action-NETWORK_ERROR';
export const NETWORK_CALL_START = '@axios-action-NETWORK_CALL_START';
export const GET_POSTS_SUCCESS = '@axios-action-GET_POSTS_SUCCESS';

export const Colors = {
  SCREEN_BACKGROUND_COLOR: '#FFFFFF',
  GENERIC_COLOR: '#FE4167',
  GENERIC_TEXT_COLOR: '#545454',
  GENERIC_TEXT: '#000',
  HEADER_COLOR: '#ae63f9',
  HEADER_COLOR_TEXT: '#808080',
  CONTAINER_BACKGROUND: '#f2f2f2',
  TRANSPRANT_BLACK: 'rgba(0,0,0,0)',
};

export const FontSize = {
  CONTENT_HEADDER: 16,
  TEXT_WEIGHT: '500',
  HEADDER: 17,
};
