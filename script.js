document.getElementById('diet-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const goal = document.getElementById('goal').value;
    const dietType = document.getElementById('diet-type').value;
    const resultDiv = document.getElementById('diet-result');
    const checklist = document.getElementById('diet-checklist');
    const dietTable = document.getElementById('diet-table');
    const dietTableBody = document.getElementById('diet-table-body');

    // Set diet plan based on goal and diet type
    let dietPlan = `For a ${goal.replace('-', ' ')} goal, we recommend a ${dietType.replace('-', ' ')} diet.`;
    
    resultDiv.textContent = dietPlan;
    resultDiv.classList.remove('hidden');
    
    // Clear previous checklist
    checklist.innerHTML = '';
    const tasks = ['Plan your meals', 'Buy groceries', 'Prepare meals'];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> ${task}`;
        checklist.appendChild(li);
    });

    // Populate diet table
    dietTableBody.innerHTML = '';
    let meals = [];

    // Sample diet plans
    if (goal === "weight-loss") {
        meals = {
            breakfast: "Scrambled eggs with spinach",
            lunch: "Grilled chicken with quinoa and steamed broccoli",
            dinner: "Baked salmon with asparagus and brown rice",
            snacks: "Greek yogurt with honey and berries"
        };
    } else if (goal === "muscle-gain") {
        meals = {
            breakfast: "Protein pancakes with banana",
            lunch: "Turkey burger with sweet potato fries",
            dinner: "Beef stir-fry with mixed vegetables and brown rice",
            snacks: "Cottage cheese with pineapple"
        };
    } else if (goal === "maintenance") {
        meals = {
            breakfast: "Overnight oats with chia seeds and berries",
            lunch: "Tuna salad sandwich on whole-grain bread",
            dinner: "Vegetable stir-fry with tofu",
            snacks: "Mixed nuts and fruit"
        };
    }

    // Append meals to table
    for (const [meal, food] of Object.entries(meals)) {
        const row = `<tr>
            <td>${meal.charAt(0).toUpperCase() + meal.slice(1)}</td>
            <td>${food}</td>
        </tr>`;
        dietTableBody.insertAdjacentHTML('beforeend', row);
    }

    dietTable.classList.remove('hidden');
});

document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fitnessLevel = document.getElementById('fitness-level').value;
    const workoutType = document.getElementById('workout-type').value;
    const resultDiv = document.getElementById('workout-result');
    const checklist = document.getElementById('workout-checklist');
    const workoutTable = document.getElementById('workout-table');
    const workoutTableBody = document.getElementById('workout-table-body');

    // Set workout plan based on fitness level and workout type
    let workoutPlan = `For a ${fitnessLevel.replace('-', ' ')} fitness level, we suggest focusing on ${workoutType.replace('-', ' ')} workouts.`;
    
    resultDiv.textContent = workoutPlan;
    resultDiv.classList.remove('hidden');
    
    // Clear previous checklist
    checklist.innerHTML = '';
    const exercises = ['Warm-up', 'Main workout', 'Cool down'];
    exercises.forEach(exercise => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> ${exercise}`;
        checklist.appendChild(li);
    });

    // Populate workout table
    workoutTableBody.innerHTML = '';
    let weeklyPlan = [];

    // Sample workout plans
    if (fitnessLevel === "beginner") {
        weeklyPlan = [
            { day: "Monday", type: "Cardio", exercise: "30-Minute Walk" },
            { day: "Wednesday", type: "Strength", exercise: "Bodyweight Squats, Push-ups, Plank (3 sets of 10)" },
            { day: "Friday", type: "Flexibility", exercise: "Yoga for 30 minutes" }
        ];
    } else if (fitnessLevel === "intermediate") {
        weeklyPlan = [
            { day: "Monday", type: "Cardio", exercise: "20-Minute Run" },
            { day: "Tuesday", type: "Strength", exercise: "Dumbbell Rows, Lunges, Burpees (4 sets of 12)" },
            { day: "Thursday", type: "Flexibility", exercise: "Dynamic Stretching" },
            { day: "Saturday", type: "Mixed", exercise: "Circuit Training (5 exercises, 3 rounds)" }
        ];
    } else if (fitnessLevel === "advanced") {
        weeklyPlan = [
            { day: "Monday", type: "Strength", exercise: "Deadlifts, Bench Press, Pull-Ups (5 sets of 8)" },
            { day: "Wednesday", type: "Cardio", exercise: "High-Intensity Interval Training for 30 minutes" },
            { day: "Friday", type: "Flexibility", exercise: "Advanced Yoga or Pilates" },
            { day: "Saturday", type: "Mixed", exercise: "CrossFit Workout" }
        ];
    }

    // Append exercises to table
    weeklyPlan.forEach(({ day, type, exercise }) => {
        const row = `<tr>
            <td>${day}</td>
            <td>${type}</td>
            <td>${exercise}</td>
        </tr>`;
        workoutTableBody.insertAdjacentHTML('beforeend', row);
    });

    workoutTable.classList.remove('hidden');
});
