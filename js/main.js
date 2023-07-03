const cards = Array.from(document.querySelectorAll('.card'));
const cardMidWidth = cards[0].clientWidth / 2;
const cardMidHeight = cards[0].clientHeight / 2;

for (const card of cards) {
  card.addEventListener('mousemove', (e) => {
		const fromCenterX = cardMidWidth - (e.clientX - card.offsetLeft); 
  	const fromCenterY = cardMidHeight - (e.clientY - card.offsetTop);
		setProperties(card, [['--rx', `${fromCenterY / 20}deg`], ['--ry', `${-fromCenterX / 20}deg`]]);
	});

  card.addEventListener('mouseleave', () => {
		setProperties(card, [['--rx', 20], ['--ry', 20], ['--duration', '50ms']])
	});
}

const setProperties = (el, args) => args.forEach((arr) => el.style.setProperty(arr[0], arr[1])); 

