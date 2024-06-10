const links = document.querySelectorAll('.other_name');
    links.forEach(link => {
        document.addEventListener('mousemove', (event) => {
            const rect = link.getBoundingClientRect();
            const positionX = event.clientX - rect.left - (rect.width / 3);
            const positionY = event.clientY - rect.top - (rect.height / 3);
            const distance = Math.sqrt(positionX * positionX + positionY * positionY);
            const maxDistance = 65; 

            if (distance < maxDistance) {
                const ag = Math.atan2(positionY, positionX);
                const shiftX = Math.cos(ag) * (maxDistance - distance) * 0.09;
                const shiftY = Math.sin(ag) * (maxDistance - distance) * 0.09;
                link.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
            }
        });
    });