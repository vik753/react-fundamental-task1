class Helpers {
	showAlert(text) {
		alert(text);
	}

	formatToDoubleNumbers(num) {
		return num < 10 ? `0${num}` : `${num}`;
	}

	getDuration(minutes) {
		const hours = Math.floor(+minutes / 60);
		const mins = +minutes - hours * 60;
		return `${this.formatToDoubleNumbers(hours)}:${this.formatToDoubleNumbers(
			mins
		)}`;
	}

	getCreationDate() {
		const date = new Date();
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}
}

const helper = new Helpers();

export default helper;
