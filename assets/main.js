const loadImage = (itemEl, latency) => {
    if (itemEl) {
        const imageEl = itemEl.querySelector('img');
        if (imageEl) {
            const imageSrc = imageEl.dataset.src;
            if (imageSrc) {
                setTimeout(() => {
                    const image = new Image();
                    image.src = imageSrc;
                    console.log(`image(src:${imageSrc}): loading.`);
                    image.onload = () => {
                        console.log(`image(src:${imageSrc}): loaded.`);
                        imageEl.src = imageSrc;
                        setTimeout(() => {
                            itemEl.classList.add('image-has-loaded');
                        }, 100);
                    }
                }, latency);
            }
        }
    }
};

const loadVideo = (itemEl, latency) => {
    if (itemEl) {
        const videoEl = itemEl.querySelector('video');
        if (videoEl) {
            const videoSrc = videoEl.dataset.src;
            if (videoSrc) {
                setTimeout(() => {
                    // videoEl.muted = true;
                    // videoEl.loop = true;
                    let limit = 1;
                    videoEl.width = itemEl.offsetWidth;
                    videoEl.height = itemEl.offsetHeight;
                    videoEl.src = videoSrc;
                    console.log(`video(src:${videoSrc}): loading.`);
                    videoEl.load();
                    videoEl.onloadedmetadata = () => {
                        console.log(`video(src:${videoSrc}): metadata loaded.`);
                    };
                    videoEl.onloadeddata = () => {
                        console.log(`video(src:${videoSrc}): data loaded.`);
                        videoEl.play();
                    };
                    videoEl.onplay = () => {
                        console.log(`video(src:${videoSrc}): playing.`);
                        setTimeout(() => {
                            itemEl.classList.add('video-has-loaded');
                        }, 100);
                    };
                    videoEl.onended = () => {
                        console.log(`video(src:${videoSrc}): ended.`);
                    };
                }, latency);
            }
        }
    }
};

window.onload = () => {
    const videoItem = document.querySelector('.videoItem');
    if (videoItem) {
        loadImage(videoItem, 1000);
        loadVideo(videoItem, 3000);
    }
};