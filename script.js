document.getElementById('evenForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from input fields
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultDiv = document.getElementById('result');

    // Clear any previous result
    resultDiv.innerHTML = '';

    if (isNaN(start) || isNaN(end) || start > end) {
        resultDiv.innerHTML = 'Please enter a valid range.';
        return;
    }

    // Generate even numbers
    let evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    // Display the result
    if (evenNumbers.length > 0) {
        resultDiv.innerHTML = 'Even numbers: ' + evenNumbers.join(', ');
    } else {
        resultDiv.innerHTML = 'No even numbers found in the range.';
    }
});
