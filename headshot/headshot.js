let xPos = 0,
    imageURLs = [ // store the 10 image URLs that will be used as background images in the carousel DIVs
        'https://picsum.photos/id/24/600/400/',
        'https://picsum.photos/id/16/600/400/',
        'https://picsum.photos/id/35/600/400/',
        'https://picsum.photos/id/55/600/400/',
        'https://picsum.photos/id/92/600/400/',
        'https://picsum.photos/id/80/600/400/',
        'https://picsum.photos/id/53/600/400/',
        'https://picsum.photos/id/79/600/400/',
        'https://picsum.photos/id/40/600/400/',
        'https://picsum.photos/id/20/600/400/'
    ]


gsap.timeline()
    .set('.ring', { rotationY: 180, cursor: 'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img', { // apply transform rotations to each image
        rotateY: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) => 'url(' + imageURLs[i] + ')',
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden'
    })
    .from('.imgz', {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo'
    })
    .add(() => {
        $('.imgz').on('mouseenter', (e) => {
            let current = e.currentTarget;
            gsap.to('.imgz', { opacity: (i, t) => (t == current) ? 1 : 0.5, ease: 'power3' })
        })
        $('.imgz').on('mouseleave', (e) => {
            gsap.to('.imgz', { opacity: 1, ease: 'power2.inOut' })
        })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e) {
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring', { cursor: 'grabbing' })
    $(window).on('mousemove touchmove', drag);
}


function drag(e) {
    if (e.touches) e.clientX = e.touches[0].clientX;

    gsap.to('.ring', {
        rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
        onUpdate: () => { gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) }) }
    });

    xPos = Math.round(e.clientX);
}


function dragEnd(e) {
    $(window).off('mousemove touchmove', drag);
    gsap.set('.ring', { cursor: 'grab' });
}


function getBgPos(i) { //returns the background-position string to create parallax movement in each image
    return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 36) / 360 * 500) + 'px 0px';
}