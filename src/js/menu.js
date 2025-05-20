document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.overlaymodal');
    const openButtons = [
      { btnId: 'openModalBtn1', modalClass: 'modal-1' },
      { btnId: 'openModalBtn2', modalClass: 'modal-2' },
      { btnId: 'openModalBtn3', modalClass: 'modal-3' }
    ];

    openButtons.forEach(({ btnId, modalClass }) => {
      const button = document.getElementById(btnId);
      const modal = document.querySelector(`.overlaymodal.${modalClass}`);
      if (button && modal) {
        button.addEventListener('click', () => {
          modal.classList.add('active');
        });
      }
    });

    modals.forEach(modal => {
      const backdrop = modal.querySelector('.backdrop');
      const closeBtn = modal.querySelector('.close-price-btn');
  
      if (backdrop) {
        backdrop.addEventListener('click', () => modal.classList.remove('active'));
      }
      if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
      }
    });
  });