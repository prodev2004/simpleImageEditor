// first we'll select some elements
const img_container = document.querySelector('.image_preview');
const img = document.querySelector('.image_preview img');
const input = document.querySelector('#uploadBtn');

// check the description for the video where we take a look how to preview the image we upload to the site. Since I won't explain it here.
input.addEventListener('change', function(){
    const file = this.files[0];

    if (file) {
        img_container.style.display = 'block';

        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
        }
        reader.readAsDataURL(file);
        // now we'll fix the button problem
    }

    // and here we'll add a display of block to it.
    img.style.display = 'block';
})

// that's all for that function


// now we'll make the ranges function
const ranges = document.querySelectorAll('.range');
const textboxes = document.querySelectorAll('.textbox');

ranges.forEach(range => {
    // now everytime a range changes we'll update the filters. based on which filter we used
    range.addEventListener('change', () => {
        // console.log(ranges[0].value); // for blur
        // console.log(ranges[1].value); // for contrast
        // console.log(ranges[2].value); // for hue-rotate
        // console.log(ranges[3].value); // for sepia

        img.style.filter = `
            blur(${ranges[0].value}px)
            contrast(${ranges[1].value}%)
            hue-rotate(${ranges[2].value}deg)
            sepia(${ranges[3].value}%)
        `;

        // you can see when the ranges updates the number in th textbox doesnt change. Let's fix it
        textboxes.forEach(textbox => {
            // the dataset is the data filter attr we added to each input
            // so basically if the textbox's data filter is the same as range's data filter then... we'll change it's value too
            if (textbox.dataset.filter === range.dataset.filter) {
                textbox.value = range.value;
            }
        })
    })
})

// but the same thing doesnt happen when we change the value inside the textbox. so we'll create a function which does that.
// so basically the same steps except here we'll change them for the textbox
textboxes.forEach(textbox => {
    textbox.addEventListener('change', () => {
        img.style.filter = `
            blur(${textboxes[0].value}px)
            contrast(${textboxes[1].value}%)
            hue-rotate(${textboxes[2].value}deg)
            sepia(${textboxes[3].value}%)
        `;

        // you can see when the textbox updates the number in the range the number doesnt change. Let's fix it

        // basically the same thing
        ranges.forEach(range => {
            // the dataset is the data filter attr we added to each input
            // so basically if the textbox's data filter is the same as range's data filter then... we'll change it's value too
            if (range.dataset.filter === textbox.dataset.filter) {
                range.value = textbox.value;
            }
        })
    })
})

// the filters are done.
// now we'll take care of the flips

const radioBtns = document.querySelectorAll('.form__group input');

radioBtns.forEach(radio => {
    radio.addEventListener('change', () => {
        const radioID = radio.getAttribute('id');
        // so depending on which radio button the click this will get it's ID
        // no_flip
        // flip_horizontal
        // flip_vertical

        // so now we'll check for each radioID if for example it's vertical we'll add a transform scaleX of 1. If it is horizontal we'll add a transform scaleX of -1....
        // we need to add for scaleX and scaleY
        if (radioID == 'no_flip') {
            img.style.transform = `scaleX(1) scaleY(1)`;
        } else if (radioID == 'flip_horizontal') {
            img.style.transform = `scaleX(-1) scaleY(1)`;
        } else if (radioID == 'flip_vertical') {
            img.style.transform = `scaleX(11) scaleY(-1)`;
        }
    })
})

// and that's all for this project.
// Please Subscribe to this channel. I'll bring more of these videos in the future. Thanks...
// Also dont forget to like it so more poeple can see the video.. Thanks again...