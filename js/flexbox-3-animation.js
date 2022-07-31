const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('icons-animation');

        }
    });
});

observer.observe(document.querySelectorAll('.flexbox-3__item > header')[0]);
observer.observe(document.querySelectorAll('.flexbox-3__item > header')[1]);
observer.observe(document.querySelectorAll('.flexbox-3__item > header')[2]);
observer.observe(document.querySelector('.flexbox-3 > h2'));