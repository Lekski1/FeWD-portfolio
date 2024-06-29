document.querySelectorAll(".other_name").forEach((t => {
    document.addEventListener("mousemove", (e => {
        const n = t.getBoundingClientRect(), o = e.clientX - n.left - n.width / 3, a = e.clientY - n.top - n.height / 3, c = Math.sqrt(o * o + a * a);
        if (c < 65) {
            const e = Math.atan2(a, o), n = Math.cos(e) * (65 - c) * .09, s = Math.sin(e) * (65 - c) * .09;
            t.style.transform = `translate(${n}px, ${s}px)`;
        }
    }));
}));
