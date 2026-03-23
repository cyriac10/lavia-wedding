function openImg(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeImg() {
    document.getElementById("lightbox").style.display = "none";
}

function seeAll() {
    document.querySelectorAll('.hidden').forEach(img => {
        img.classList.remove('hidden');
    });

    document.querySelector('.see-all-btn').style.display = "none";
}
