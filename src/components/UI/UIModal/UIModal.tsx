import { useState } from 'react'
import Modal from 'react-modal'
import { UIIcon } from 'components/UI/UIIcon/UIIcon'
import './UIModal.scss'

interface Props {
  slot: string
  show: boolean
}

export const UIModal = (prop: Props) => {
  const { slot, show } = prop

  const [modalIsOpen, setModal] = useState(show)

  const toggleModal = (state: boolean) => {
    setModal(state)
  }

  return (
    <Modal
      className="UIModal"
      isOpen={modalIsOpen}
      onRequestClose={() => toggleModal(false)}
    >
      {slot}
      <button className="close" onClick={() => toggleModal(false)}>
        <UIIcon name="close" color="black" />
      </button>
    </Modal>
  )
}
