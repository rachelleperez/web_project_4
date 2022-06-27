//  INDIVIDUAL MODAL BEHAVIOR (needed for card)

const overlay = document.querySelector('.modal__overlay')

export function openModal(modal) {
  if (modal == null) return
  modal.classList.add('modal__container_active')
  overlay.classList.add('modal__overlay_active')
  document.addEventListener('keydown', closeModalEsc);
}

function closeModalEsc(event, modal) {
  if (event.key === 'Escape') {
    findCloseAnyOpenModal();
  }
}

export function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('modal__container_active')
  overlay.classList.remove('modal__overlay_active')
  document.removeEventListener('keydown', closeModalEsc);
}

export function findCloseAnyOpenModal() {
  const openedModal = document.querySelector('.modal__container_active');
  closeModal(openedModal);
}

