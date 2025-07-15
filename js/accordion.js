document.querySelectorAll('.accordion-header').forEach(div => {
    div.addEventListener('click', () => {
      const body = div.nextElementSibling;
      const item = div.parentElement;
      const isOpen = body.style.height && body.style.height !== '0px';
  
      // Collapse all others
      document.querySelectorAll('.accordion-body').forEach(section => {
        if (section !== body) {
          section.style.height = '0px';
          section.parentElement.classList.remove('active');
        }
      });
  
      if (isOpen) {
        body.style.height = '0px';
        item.classList.remove('active');
      } else {
        body.style.height = 'auto';
        const fullHeight = body.scrollHeight + 'px';
        body.style.height = '0px';
        void body.offsetWidth;
        body.style.height = fullHeight;
        item.classList.add('active');
      }
    });
  },);
  