var displayBar = document.querySelector('figure.displayBar');

var thumbBar = document.querySelector('ul.thumbBarImgs');

var nextBtn = document.querySelectorAll('div[class*="slide"]');

var upBtn = document.querySelector('div.arrow.up');

var thumbBarRoll = document.querySelector('div.thumbBarImgs');

// Thumbnail images list
var imgList = [];

// Generate image list
// Thumbnail images list
// Thumbnail images list
var imgList = [
	{
		'src' : 'images/1.jpg',
		'title' : 'Cherry Blossom',
		'description' : 'Cherry blossoms symbolize the fleeting nature of life and the beauty in its impermanence.',
		'url' : 'https://www.brighterblooms.com/pages/all-about-cherry-blossom-trees#:~:text=Cherry%20Blossom%20Trees%20bring%20billowy,Cherry%20Tree%20or%20the%20Sakura.'
	},
	{
		'src' : 'images/2.jpg',
		'title' : 'Red Garden Roses',
		'description' : 'Red garden roses represent love, passion, and romance.',
		'url' : 'https://gardenrosesdirect.com/varieties-of-red-garden-roses/'
	},
	{
		'src' : 'images/3.jpg',
		'title' : 'Poppies',
		'description' : 'Poppies symbolize remembrance, peace, and consolation.',
		'url' : 'https://www.britannica.com/plant/poppy'
	},
	{
		'src' : 'images/4.jpg',
		'title' : 'Sunflowers',
		'description' : 'Sunflowers symbolize adoration, loyalty, and longevity.',
		'url' : 'https://www.almanac.com/plant/sunflowers'
	},
	{
		'src' : 'images/5.jpg',
		'title' : 'Apple Blossoms',
		'description' : 'Apple blossoms symbolize love, fertility, and good fortune.',
		'url' : 'https://specialtyproduce.com/produce/Apple_Blossoms_8797.php#:~:text=Apple%20blossoms%20are%20small%20to,branches%20with%20small%20lanceolate%20leaves.'
	},
	{
		'src' : 'images/6.jpg',
		'title' : 'Daisy',
		'description' : 'Daisies symbolize innocence, purity, and new beginnings.',
		'url' : 'https://www.britannica.com/plant/daisy'
	},
	{
		'src' : 'images/7.jpg',
		'title' : 'Pink Roses',
		'description' : 'Pink roses symbolize grace, gratitude, and admiration.',
		'url' : 'https://www.interflora.co.uk/page/flower-types/roses/pink-roses'
	},
	{
		'src' : 'images/8.jpg',
		'title' : 'Yellow Poppies',
		'description' : 'Yellow poppies symbolize success, wealth, and happiness.',
		'url' : 'https://hort.extension.wisc.edu/articles/celandine-poppy-stylophorum-diphyllum/'
	},
	{
		'src' : 'images/9.jpg',
		'title' : 'Pink Spring Flowers',
		'description' : 'Pink spring flowers symbolize renewal, hope, and new beginnings.',
		'url' : 'https://www.waltersgardens.com/photo_essay.php?ID=421'
	},
	{
		'src' : 'images/10.jpg',
		'title' : 'Red Roses',
		'description' : 'Red roses symbolize love, desire, and admiration.',
		'url' : 'https://www.1800flowers.com/blog/flower-facts/meaning-of-red-roses/'
	}
];



// Setup the thumbnail bar
imgList.forEach(function(img, index) {
	var newLi = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', img.src);
	newImage.setAttribute('title', img.title);
	newImage.setAttribute('alt', img.description);
	newImage.setAttribute('url', img.url);
	newImage.index = index;
	newImage.className = 'thumbnail';
	newLi.appendChild(newImage);
	thumbBar.appendChild(newLi);
});

// Call and display the first image to display Bar
var slideIndex = 0;
currentSlide(slideIndex);

// Thumbnail clickable to change the image on display bar
thumbBar.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		currentSlide(event.target.index);
	}
};

// Display an image to display bar
function displayImage(img) {
	displayBar.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	displayBar.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	displayBar.querySelector('h3').innerHTML = img.getAttribute('title');
	displayBar.querySelector('a').href = img.getAttribute('url');
	displayBar.querySelector('figcaption').innerHTML = img.getAttribute('alt');
}

// Outline clearing for the thumbnails
function outlineClearing() {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	for(var i = 0; i < thumbImgs.length; i++) {
		// Remove the "active" in class to avoid the css agreement
		thumbImgs[i].className = thumbImgs[i].className.replace (' active', '');
	}
}

// The next and previous slide click buttons
nextBtn[0].onclick = function () {
	plusSlides(1);
}
nextBtn[1].onclick = function () {
	plusSlides(-1);
}

// set and show the slide by the slide index
function plusSlides(n) {
	showSlide(slideIndex += n);
}

// set and show the slide by the current slide index
function currentSlide(n) {
	showSlide(slideIndex = n);
}

// Setting the thumbnail selection and display bar
function showSlide(n) {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	if (n >= thumbImgs.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = thumbImgs.length - 1;
	}

	outlineClearing();

	thumbImgs[slideIndex].className += ' active';
	displayImage(thumbImgs[slideIndex]);
}

// Interval time for the gallery display
setInterval(function() {
	plusSlides(1);
}, 3000);

// Roll up and down the thumbnails bar
upBtn.addEventListener('click', thumbRollUp);

function thumbRollUp() {
	if(thumbBarRoll.className.search('rollUp') < 0) {
		thumbBarRoll.className += ' rollUp';
		upBtn.className = upBtn.className.replace('-up','-down');
	}
	else {
		thumbBarRoll.className = thumbBarRoll.className.replace(' rollUp', '');
		upBtn.className = upBtn.className.replace('-down','-up');
	}
}
