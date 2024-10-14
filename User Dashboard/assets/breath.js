let points = 0;
let exerciseStarted = false;
let intervalId;

document.getElementById('start-button').addEventListener('click', startExercise);
document.getElementById('stop-button').addEventListener('click', stopExercise);

function startExercise() {
    if (!exerciseStarted) {
        exerciseStarted = true;
        document.getElementById('start-button').disabled = true;
        document.getElementById('stop-button').disabled = false;
        
        // Show the spinner
        document.querySelector('.spinner').style.display = 'grid';

        intervalId = setInterval(() => {
            points++;
            document.getElementById('points').textContent = `Points: ${points}`;
            const circle = document.querySelector('.circle');
            if (circle.classList.contains('breathe-in')) {
                circle.classList.remove('breathe-in');
                circle.classList.add('breathe-out');
                document.getElementById('breathe-in').style.display = 'none';
                document.getElementById('breathe-out').style.display = 'block';
            } else {
                circle.classList.remove('breathe-out');
                circle.classList.add('breathe-in');
                document.getElementById('breathe-in').style.display = 'block';
                document.getElementById('breathe-out').style.display = 'none';
            }
        }, 4000);
    }
}

function stopExercise() {
    if (exerciseStarted) {
        exerciseStarted = false;
        document.getElementById('start-button').disabled = false;
        document.getElementById('stop-button').disabled = true;
        clearInterval(intervalId);
        
        // Hide the spinner
        document.querySelector('.spinner').style.display = 'none';

        document.getElementById('final-score').textContent = `Final Score: ${points}`;
        document.getElementById('breathe-in').style.display = 'none';
        document.getElementById('breathe-out').style.display = 'none';
        document.querySelector('.circle').classList.remove('breathe-in');
        document.querySelector('.circle').classList.remove('breathe-out');
    }
}
