document.getElementById('bmiForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);

    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {

        alert('Silakan masukkan nilai berat dan tinggi yang valid.');

        return;

    }

    const bmi = weight / (height * height);

    const bmiRounded = bmi.toFixed(2);

    let category = '';

    if (bmi < 18.5) {

        category = 'Kekurangan berat badan';

    } else if (bmi >= 18.5 && bmi < 24.9) {

        category = 'Berat badan normal';

    } else if (bmi >= 25 && bmi < 29.9) {

        category = 'Kelebihan berat badan';

    } else {

        category = 'Kegemukan (Obesitas)';

    }

    document.getElementById('bmiValue').innerText = `BMI Anda: ${bmiRounded}`;

    document.getElementById('bmiCategory').innerText = `Kategori: ${category}`;

    document.getElementById('result').classList.remove('hidden');

});

document.getElementById('resetButton').addEventListener('click', function() {

    document.getElementById('bmiForm').reset();

    document.getElementById('result').classList.add('hidden');

});