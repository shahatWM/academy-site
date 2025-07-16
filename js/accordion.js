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

    const container = document.querySelector('.hero');

    // Initial positions and direction deltas for 3 icons
    let pos = [
        { x: 0, y: 0, dx: 0.5, dy: 0.4 },
        { x: 20, y: 30, dx: -0.3, dy: 0.5 },
        { x: 50, y: 80, dx: 0.4, dy: -0.6 }
    ];
    
    const bounds = { width: 250, height: 250 };
    
    function animate() {
        pos.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
    
        // Bounce off edges
        if (p.x < 0 || p.x > bounds.width - 20) p.dx *= -1;
        if (p.y < 0 || p.y > bounds.height - 20) p.dy *= -1;
        });
    
        const posString = pos.map(p => `${p.x}px ${p.y}px`).join(', ');
        container.style.backgroundPosition = posString;
    
        requestAnimationFrame(animate);
    }
    
    animate(); // Start animation
  });
  