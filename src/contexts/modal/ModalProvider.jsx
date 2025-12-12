import { useReducer, useCallback } from "react";
import ModalContext from "./ModalContext";
import ModalRoot from "@/components/ui/Modal/ModalRoot";

const initialState = { modal: null, props: {} };

const ACTIONS = {
  OPEN: "OPEN_MODAL",
  CLOSE: "CLOSE_MODAL",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.OPEN:
      return { modal: action.modal, props: action.props || {} };

    case ACTIONS.CLOSE:
      return initialState;

    default:
      return state;
  }
}
export default function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openModal = useCallback((modalName, props = {}) => {
    dispatch({ type: ACTIONS.OPEN, modal: modalName, props });
  }, []);
  const closeModal = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE });
  }, []);
  return (
    <ModalContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
      <ModalRoot />
    </ModalContext.Provider>
  );
}
