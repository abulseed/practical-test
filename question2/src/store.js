import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

// Actions
export const SET_CURRENT_STATE = 'SET_CURRENT_STATE';
export const MOVE_NEXT_SLIDE = 'MOVE_NEXT_SLIDE';

// Reducer
// We only keep dynamic values in the store.
const initialState = {
  image: '',
  selectedBtn: '',
  currentIndex: -1
}

// represents a static data store
const staticData = {
  0: { img: img1, btn: 'Button1' },
  1: { img: img2, btn: 'Button2' },
  2: { img: img3, btn: 'Button3' }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STATE:
      return {
        ...state,
        image: action.image,
        selectedBtn: action.selectedBtn,
        currentIndex: action.currentIndex
      }

    case MOVE_NEXT_SLIDE:
      const i = (state.currentIndex + 1) % 3;
      return {
        ...state,
        image: staticData[i].img,
        selectedBtn: staticData[i].btn,
        currentIndex: i
      }

    default:
      return state;
  }
}
