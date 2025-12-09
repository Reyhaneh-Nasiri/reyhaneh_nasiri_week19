import Modal from "@/components/ui/Modal/Modal";
import AddProductModal from "@/components/products/modals/AddProductModal";
import EditProductModal from "@/components/products/modals/EditProductModal";
import DeleteProductModal from "@/components/products/modals/DeleteProductModal";
import useModal from "@/hooks/useModal";

const MODAL_MAP = {
  "add-product": AddProductModal,
  "edit-product": EditProductModal,
  "delete-product": DeleteProductModal,
};

export default function ModalRoot() {
  const { modal, props, closeModal } = useModal();
  if (!modal) return null;
  const Component = MODAL_MAP[modal];
  if (!Component) return null;
  return (
    <Modal onClose={closeModal}>
      <Component {...props} closeModal={closeModal} />
    </Modal>
  );
}
