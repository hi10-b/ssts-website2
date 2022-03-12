export const ConvertDate = (date) => {
	let convertedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(date);
	// console.log('converted dates ' + date + ' = ' + convertedDate);
	return convertedDate;
};
