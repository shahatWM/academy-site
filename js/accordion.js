document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.accordion-wrapper').forEach(list => {
      const headers = list.querySelectorAll('.accordion-header');
  
      headers.forEach(header => {
            header.addEventListener('click', () => {
                const body = header.nextElementSibling;
                const item = header.parentElement;
                const isOpen = item.classList.contains('active');
    
                // Collapse all in this group
                list.querySelectorAll('.accordion-body').forEach(section => {
                    section.style.height = '0px';
                    section.parentElement.classList.remove('active');
                });
  
            if (!isOpen) {
                body.style.height = 'auto';
                const fullHeight = body.scrollHeight + 'px';
                body.style.height = '0px';
                void body.offsetWidth;
                body.style.height = fullHeight;
                item.classList.add('active');
                }
            });
        });
       // 👇 Expand first item by default
        const firstHeader = list.querySelector('.accordion-header');
        if (firstHeader) firstHeader.click();
    });
  });
  