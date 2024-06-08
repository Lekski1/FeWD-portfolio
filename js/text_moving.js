const links = document.querySelectorAll('.other_name');

        links.forEach(link => {
            document.addEventListener('mousemove', (event) => {
                const rect = link.getBoundingClientRect();
                const x = event.clientX - rect.left - (rect.width / 3);
                const y = event.clientY - rect.top - (rect.height / 3);
                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = 65; 

                if (distance < maxDistance) {
                    const angle = Math.atan2(y, x);
                    const offsetX = Math.cos(angle) * (maxDistance - distance) * 0.09;
                    const offsetY = Math.sin(angle) * (maxDistance - distance) * 0.09;
                    link.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                }
            });

        });