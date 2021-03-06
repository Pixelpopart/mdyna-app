const ACTION_TYPES = {
  SETTINGS: {
    TOGGLE_WHITE_MODE: 'TOGGLE_WHITE_MODE',
    TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
    CHANGE_CWD: 'CHANGE_CWD',
    TOGGLE_SETTINGS: 'TOGGLE_SETTINGS',
    CHANGE_CPP: 'CHANGE_CPP',
    CHANGE_CODE_THEME: 'CHANGE_CODE_THEME',
    LOGIN_TO_GH_SUCCESS: 'LOGIN_TO_GH_SUCCESS',
    LOGIN_TO_GH_FAIL: 'LOGIN_TO_GH_FAIL',
    LOGIN_TO_GH: 'LOGIN_TO_GH',
    UPDATE_GIST: 'UPDATE_GIST',
    SYNC_CARDS: 'SYNC_CARDS',
    SYNC_CARDS_SUCCESS: 'SYNC_CARDS_SUCCESS',
    SYNC_CARDS_FAIL: 'SYNC_CARDS_FAIL',
    DESYNC_GH: 'DESYNC_GH',
    UPDATE_DELETED_CARDS: 'UPDATE_DELETED_CARDS',
    CHANGE_THEME: 'CHANGE_THEME',
  },
  BOARDS: {
    CREATE_BOARD: 'CREATE_BOARD',
    DELETE_BOARD: 'DELETE_BOARD',
    CHANGE_BOARD_NAME: 'CHANGE_BOARD_NAME',
    CHANGE_CARD_BOARD: 'CHANGE_CARD_BOARD',
    TOGGLE_BOARDS_DIALOG: 'TOGGLE_BOARDS_DIALOG',
    UPDATE_BOARDS_LIST: 'UPDATE_BOARDS_LIST',
    CHANGE_BOARD_BACKGROUND: 'CHANGE_BOARD_BACKGROUND',
  },
  CARD: {
    CHANGE_CARD_SETTING: 'CHANGE_CARD_SETTING',
    EDIT_CARD: 'EDIT_CARD',
    ADD_CARD: 'ADD_CARD',
    DISCARD_CHANGES: 'DISCARD_CHANGES',
    SAVE_CARD: 'SAVE_CARD',
    REMOVE_CARD: 'REMOVE_CARD',
    TOGGLE_CARD: 'TOGGLE_CARD',
    GENERATE_LINK: 'GENERATE_NOTE_LINK',
    UPDATE_CARD_LIST: 'UPDATE_CARD_LIST',
    CHANGE_TITLE: 'CHANGE_TITLE',
    IMPORT_CARDS: 'IMPORT_CARDS',
    CLEAR_ARCHIVE: 'CLEAR_ARCHIVE',
    DELETE_BOARD_CARDS: 'DELETE_BOARD_CARDS',
    KEEP_BOARD_CARDS: 'KEEP_BOARD_CARDS',
  },
  LABEL: {
    ADD_LABEL: 'ADD_LABEL',
    REMOVE_LABEL: 'REMOVE_LABEL',
    UPDATE_LABEL_LIST: 'UPDATE_LABEL_LIST',
  },
  FAV: {
    ADD_FAV: 'ADD_FAV',
    REMOVE_FAV: 'REMOVE_FAV',
    UPDATE_FAV_LIST: 'UPDATE_FAV_LIST',
  },
  FILTERS: {
    FOCUS_CARD: 'FOCUS_CARD',
    CHANGE_ACTIVE_BOARD: 'CHANGE_ACTIVE_BOARD',
    CHANGE_SORTING_STATE: 'CHANGE_SORTING_STATE',
    SEARCH_CARDS: 'SEARCH_CARDS',
    TOGGLE_ARCHIVED_FILTER: 'TOGGLE_ARCHIVED_FILTER',
    ADD_LABEL_FILTER: 'ADD_LABEL_FILTER',
    REMOVE_LABEL_FILTER: 'REMOVE_LABEL_FILTER',
  },
};

export default ACTION_TYPES;
