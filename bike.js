function changeImage(imageSrc) {
    // Change the source of the large image to the hovered thumbnail
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}
let moreSpecsVisible = false;

function toggleSpecs() {
    const moreSpecs = document.querySelector('.more-specs');
    const toggleLink = document.querySelector('.see-more');

    if (moreSpecsVisible) {
        // Hide the rows with a fade-out effect
        moreSpecs.style.opacity = 0;
        moreSpecs.style.height = '0';
        setTimeout(() => {
            moreSpecs.style.display = 'none';
        }, 300); // Delay to match the transition time
        toggleLink.textContent = 'Show more';
    } else {
        // Show the rows
        moreSpecs.style.display = 'table-row-group'; // For a group of rows
        moreSpecs.style.opacity = 1;
        moreSpecs.style.height = 'auto';
        toggleLink.textContent = 'Show less';
    }

    moreSpecsVisible = !moreSpecsVisible;
}
