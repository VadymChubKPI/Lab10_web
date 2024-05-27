const API_URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const IMAGE_BASE_URL = 'https://usersdogs.dmytrominochkin.cloud';

$(document).ready(function() {
	$.get(API_URL, function(dogList) {
		dogList.forEach(function(dog, i) {
			$('#main_section').before(`
                <div class="card open_popup" onclick="showDetails(${i})">
                    <img src="${IMAGE_BASE_URL}${dog.dogImage}" alt="dog">
                    <div class="text_center">
                        <h2>${dog.title}</h2>
                        <p>${dog.sex}</p>
                    </div>
                </div>
            `);
		});
	});

	$('#popup_close').click(function() {
		$('#popup').removeClass('popup_visible');
		$('body').removeClass('no_scroll');
	});
});

function showDetails(index) {
	$.get(API_URL, function(dogList) {
		let dog = dogList[index];
		$('#image').attr('src', IMAGE_BASE_URL + dog.dogImage);
		$('#dog_name').text(dog.title);
		$('#dog_sex').text(dog.sex);
		$('#dog_age').text(dog.age);
		$('#dog_description').text(dog.description);
		$('#popup').addClass('popup_visible');
		$('body').addClass('no_scroll');
	});
}
