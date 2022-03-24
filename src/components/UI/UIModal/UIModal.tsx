import Modal, { OnAfterOpenCallbackOptions } from 'react-modal'
import './UIModal.scss'

interface Props {
  slot: JSX.Element
  show: boolean
  onAfterOpen?: (e: OnAfterOpenCallbackOptions | undefined) => void
  onCloseModal: (e: React.MouseEvent | React.KeyboardEvent) => void
}

export const UIModal = (prop: Props) => {
  const { slot, show, onAfterOpen, onCloseModal } = prop

  function afterOpenModal(e: OnAfterOpenCallbackOptions | undefined) {
    if (!onAfterOpen) {
      return
    }

    onAfterOpen(e)
  }

  function onModalClose(event: React.MouseEvent | React.KeyboardEvent) {
    onCloseModal(event)
  }

  return (
    <Modal
      className="UIModal"
      isOpen={show}
      onAfterOpen={(e) => afterOpenModal(e)}
      ariaHideApp={false}
    >
      <div className="container">
        {slot}
        <button className="close-modal" onClick={(e) => onModalClose(e)}>
          <i className="wf-close" />
        </button>
      </div>
    </Modal>
  )
}
