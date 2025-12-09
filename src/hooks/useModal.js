import { useContext } from "react";
import ModalContext from "@/contexts/modal/ModalContext";
export default function useModal() {
  return useContext(ModalContext);
}
