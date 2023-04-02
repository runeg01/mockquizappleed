
document.addEventListener('DOMContentLoaded', () => { 
const quizData = [
    {
        subheading: 'LEED Process and Integrative Strategies',
        questions: [
             {
    question: 'What is the purpose of the integrative process in a LEED project?',
    choices: [
      'To save energy and water in a project',
      'To improve communication among the project team',
      'To identify and evaluate synergies between systems and strategies',
      'To reduce waste during the construction phase'
    ],
    correctAnswer: 'To identify and evaluate synergies between systems and strategies'
  },
  {
    question: 'Which LEED rating system is designed specifically for neighborhood development projects?',
    choices: ['LEED BD+C', 'LEED O+M', 'LEED ND', 'LEED ID+C'],
    correctAnswer: 'LEED ND'
  },
  {
    question: 'What is a prerequisite in the context of a LEED project?',
    choices: [
      'A mandatory credit',
      'A voluntary credit',
      'A credit that requires a certain level of performance',
      'A credit that can be achieved by meeting various options'
    ],
    correctAnswer: 'A mandatory credit'
  },
  {
    question: 'What is the primary function of the LEED charrette?',
    choices: [
      'To identify strategies for achieving LEED credits',
      'To prioritize project goals',
      'To develop the project budget',
      'To identify potential conflicts among project stakeholders'
    ],
    correctAnswer: 'To identify strategies for achieving LEED credits'
  },
  {
    question: 'Which member of the project team is responsible for coordinating and managing the LEED certification process?',
    choices: ['Architect', 'Mechanical engineer', 'LEED consultant', 'Owner'],
    correctAnswer: 'LEED consultant'
  },
  {
    question: 'Which of the following strategies is an example of an integrative design approach?',
    choices: [
      'Installing high-efficiency lighting',
      'Reducing water use by implementing low-flow fixtures',
      'Optimizing the building orientation to maximize passive heating and cooling',
      'Using recycled materials for construction'
    ],
    correctAnswer: 'Optimizing the building orientation to maximize passive heating and cooling'
  },
  {
    question: 'Which of the following LEED rating systems would be most appropriate for an office building renovation project?',
    choices: [
      'LEED BD+C: New Construction',
      'LEED BD+C: Core and Shell',
      'LEED ID+C: Commercial Interiors',
      'LEED O+M: Existing Buildings'
    ],
    correctAnswer: 'LEED ID+C: Commercial Interiors'
  },
  {
    question: 'During which phase of a LEED project should a project team conduct an energy model analysis to inform design decisions?',
    choices: [
      'Pre-design',
      'Schematic design',
      'Design development',
      'Construction documents'
    ],
    correctAnswer: 'Schematic design'
  },
  {
question: 'Which of the following project types is NOT eligible for LEED certification?',
choices: ['New construction', 'Existing building renovation', 'Interior design and construction', 'Single-family residential'],
correctAnswer: 'Single-family residential'
},

{
question: 'In the context of LEED, what is the main goal of an integrative project team?',
choices: ['Reducing the overall project cost', 'Minimizing the need for documentation', 'Maximizing the potential for synergies and innovation', 'Simplifying the decision-making process'],
correctAnswer: 'Maximizing the potential for synergies and innovation'
}





            // ... other questions for Set 1
        ]
    },
    {
        subheading: 'Location and Transportation',
        questions: [
           {
question: 'Which of the following best describes a brownfield site?',
choices: ['A site with prime farmland', 'A site with known or suspected environmental contamination', 'A site in a floodplain', 'A site within a designated green belt'],
correctAnswer: 'A site with known or suspected environmental contamination'
},


{
question: 'What is the primary goal of the LEED Location and Transportation category?',
choices: ['To minimize the environmental impact of transportation-related emissions', 'To promote the use of alternative transportation options', 'To reduce energy consumption in buildings', 'To protect sensitive ecosystems'],
correctAnswer: 'To minimize the environmental impact of transportation-related emissions'
},

{
question: 'Which of the following is a strategy for achieving the Bicycle Facilities credit in LEED?',
choices: ['Providing bicycle storage for a minimum percentage of building occupants', 'Offering preferential parking for fuel-efficient vehicles', 'Implementing a car-sharing program', 'Proximity to public transportation'],
correctAnswer: 'Providing bicycle storage for a minimum percentage of building occupants'
},

{
question: 'What is the purpose of the LEED credit for Green Vehicles?',
choices: ['To encourage the use of electric and low-emission vehicles', 'To promote carpooling and ridesharing', 'To reduce the number of parking spaces on a project site', 'To increase the use of bicycles and other human-powered transportation options'],
correctAnswer: 'To encourage the use of electric and low-emission vehicles'
},

{
question: 'Which of the following is an example of a development in a previously developed area?',
choices: ['A new office building on a vacant lot in a suburban neighborhood', 'A new shopping center on a former industrial site', 'A residential development on a previously undeveloped greenfield site', 'A new school built on prime farmland'],
correctAnswer: 'A new shopping center on a former industrial site'
},
{
question: 'Which of the following is a key strategy to reduce the heat island effect?',
choices: ['Green roofs', 'Bicycle facilities', 'Public transportation', 'Mixed-use development'],
correctAnswer: 'Green roofs'
},

{
question: 'Which LEED credit aims to reduce parking footprint?',
choices: ['Bicycle Facilities', 'Reduced Parking Footprint', 'Access to Quality Transit', 'Green Vehicles'],
correctAnswer: 'Reduced Parking Footprint'
},

{
question: 'Which LEED credit rewards projects for providing electric vehicle charging stations?',
choices: ['Access to Quality Transit', 'Bicycle Facilities', 'Green Vehicles', 'Reduced Parking Footprint'],
correctAnswer: 'Green Vehicles'
},

{
question: 'In the context of LEED, what does "infill site" mean?',
choices: ['A site located in a densely populated area', 'A site that was previously developed', 'A site surrounded by existing development', 'A site with no prior construction'],
correctAnswer: 'A site surrounded by existing development'
},

{
question: 'Which of the following is NOT a strategy to earn points in the Location and Transportation category?',
choices: ['Developing on brownfield sites', 'Increasing development density', 'Installing low-flow water fixtures', 'Providing access to public transit'],
correctAnswer: 'Installing low-flow water fixtures'
}





            // ... other questions for Set 2
        ]
    },
    {
        subheading: 'Sustainable Sites',
        questions: [
            {
question: 'What is the primary goal of the LEED Sustainable Sites category?',
choices: ['Promote energy efficiency', 'Reduce water use', 'Encourage sustainable site selection', 'Minimize site disturbance'],
correctAnswer: 'Minimize site disturbance'
},

{
question: 'Which LEED credit focuses on protecting or restoring habitats on a project site?',
choices: ['Heat Island Reduction', 'Site Assessment', 'Open Space', 'Rainwater Management'],
correctAnswer: 'Open Space'
},

{
question: 'What is the main purpose of the LEED credit for joint use of facilities?',
choices: ['Encourage shared amenities', 'Reduce development footprint', 'Minimize parking requirements', 'Promote collaboration among occupants'],
correctAnswer: 'Encourage shared amenities'
},

{
question: 'Which strategy is commonly employed to achieve the Rainwater Management credit?',
choices: ['Green roofs', 'Solar panels', 'Permeable pavement', 'LED lighting'],
correctAnswer: 'Permeable pavement'
},

{
question: 'Which of the following strategies helps to reduce the heat island effect?',
choices: ['Use of light-colored pavement', 'Water-efficient landscaping', 'Increased insulation in the building envelope', 'Rain gardens'],
correctAnswer: 'Use of light-colored pavement'
},

{
question: 'What is the primary benefit of a green roof in terms of site sustainability?',
choices: ['Energy savings', 'Water conservation', 'Heat island reduction', 'Air quality improvement'],
correctAnswer: 'Heat island reduction'
},

{
question: 'Which LEED credit encourages the minimization of construction activity impact on air quality, soil, and water?',
choices: ['Construction Activity Pollution Prevention', 'Rainwater Management', 'Heat Island Reduction', 'Light Pollution Reduction'],
correctAnswer: 'Construction Activity Pollution Prevention'
},

{
question: 'Which of the following landscape design strategies can contribute to earning the Heat Island Reduction credit?',
choices: ['Planting shade trees', 'Installing solar panels', 'Using light-colored pavement materials', 'Both planting shade trees and using light-colored pavement materials'],
correctAnswer: 'Both planting shade trees and using light-colored pavement materials'
},

{
question: 'Which of the following strategies is NOT associated with the Light Pollution Reduction credit?',
choices: ['Using shielded outdoor light fixtures', 'Installing motion sensors', 'Reducing interior lighting after business hours', 'Increasing the use of daylighting'],
correctAnswer: 'Increasing the use of daylighting'
},

{
question: 'What is the main goal of the Site Assessment credit in LEED?',
choices: ['Identify site constraints', 'Evaluate site opportunities', 'Determine site characteristics', 'All of the above'],
correctAnswer: 'All of the above'
}
            
            // ... other questions for Set 3
        ]
    },
    // Add more sets as needed
    {
        subheading: 'Water Efficiency',
        questions: [
            {
question: 'What is the primary goal of the LEED Water Efficiency category?',
choices: ['Promote energy efficiency', 'Reduce water consumption', 'Minimize site disturbance', 'Encourage sustainable site selection'],
correctAnswer: 'Reduce water consumption'
},

{
question: 'Which LEED credit focuses on reducing the use of potable water for landscape irrigation?',
choices: ['Outdoor Water Use Reduction', 'Indoor Water Use Reduction', 'Water Metering', 'Cooling Tower Water Use'],
correctAnswer: 'Outdoor Water Use Reduction'
},

{
question: 'What is the main purpose of the LEED credit for indoor water use reduction?',
choices: ['Encourage the use of water-efficient appliances', 'Promote the installation of low-flow fixtures', 'Reduce the demand for potable water', 'All of the above'],
correctAnswer: 'All of the above'
},

{
question: 'Which of the following strategies can contribute to achieving the Indoor Water Use Reduction credit?',
choices: ['Rainwater harvesting', 'Graywater reuse', 'Drip irrigation', 'Use of native plants'],
correctAnswer: 'Graywater reuse'
},

{
question: 'What is the primary benefit of using water-efficient landscaping?',
choices: ['Energy savings', 'Water conservation', 'Heat island reduction', 'Air quality improvement'],
correctAnswer: 'Water conservation'
},

{
question: 'Which LEED credit encourages the installation of meters to monitor water usage in a building?',
choices: ['Outdoor Water Use Reduction', 'Indoor Water Use Reduction', 'Water Metering', 'Cooling Tower Water Use'],
correctAnswer: 'Water Metering'
},

{
question: 'What is the primary purpose of the Cooling Tower Water Use credit in LEED?',
choices: ['Minimize water use in cooling towers', 'Promote the use of alternative water sources for cooling towers', 'Maximize the cycles of concentration in cooling towers', 'All of the above'],
correctAnswer: 'All of the above'
},

{
question: 'Which of the following strategies can help reduce outdoor water use?',
choices: ['Installing low-flow faucets', 'Using native and adaptive plant species', 'Implementing rainwater harvesting systems', 'Both using native and adaptive plant species and implementing rainwater harvesting systems'],
correctAnswer: 'Both using native and adaptive plant species and implementing rainwater harvesting systems'
},

{
question: 'What is the main goal of the LEED credit for water metering?',
choices: ['Promote water conservation', 'Monitor water usage', 'Detect leaks', 'Encourage the use of reclaimed water'],
correctAnswer: 'Monitor water usage'
},

{
question: 'Which of the following fixtures would contribute to earning the Indoor Water Use Reduction credit?',
choices: ['Dual-flush toilets', 'Low-flow showerheads', 'WaterSense-labeled faucets', 'All of the above'],
correctAnswer: 'All of the above'
}
            
            // ... other questions for Set 3
        ]
    },
    {
        subheading: 'Energy and Atmosphere',
        questions: [
            {
question: 'What is the primary goal of the LEED Energy and Atmosphere category?',
choices: ['Reduce energy consumption', 'Improve indoor air quality', 'Minimize site disturbance', 'Promote water efficiency'],
correctAnswer: 'Reduce energy consumption'
},

{
question: 'Which LEED credit addresses the reduction of greenhouse gas emissions through energy efficiency?',
choices: ['Optimize Energy Performance', 'Renewable Energy Production', 'Enhanced Commissioning', 'Demand Response'],
correctAnswer: 'Optimize Energy Performance'
},

{
question: 'What is the main purpose of the LEED credit for Enhanced Commissioning?',
choices: ['Ensure the building operates as intended', 'Reduce energy consumption', 'Promote the use of renewable energy', 'Monitor energy performance'],
correctAnswer: 'Ensure the building operates as intended'
},

{
question: 'Which of the following strategies can contribute to achieving the Optimize Energy Performance credit?',
choices: ['Installing high-efficiency HVAC equipment', 'Using LED lighting', 'Implementing passive solar design', 'All of the above'],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary benefit of renewable energy production in a LEED project?',
choices: ['Water conservation', 'Energy cost savings', 'Improved indoor air quality', 'Reduced greenhouse gas emissions'],
correctAnswer: 'Reduced greenhouse gas emissions'
},

{
question: 'Which LEED credit encourages the use of advanced energy metering systems?',
choices: ['Advanced Energy Metering', 'Demand Response', 'Enhanced Commissioning', 'Building-Level Energy Metering'],
correctAnswer: 'Advanced Energy Metering'
},

{
question: 'What is the primary purpose of the Demand Response credit in LEED?',
choices: ['Reduce peak energy demand', 'Promote the use of renewable energy', 'Monitor energy usage', 'Improve energy efficiency'],
correctAnswer: 'Reduce peak energy demand'
},

{
question: 'Which of the following strategies can help improve a building’s energy performance?',
choices: ['Incorporating daylighting', 'Installing energy-efficient windows', 'Upgrading insulation', 'All of the above'],
correctAnswer: 'All of the above'
},

{
question: 'What is the main goal of the LEED credit for building-level energy metering?',
choices: ['Promote energy conservation', 'Monitor energy usage', 'Detect malfunctioning equipment', 'Encourage the use of renewable energy'],
correctAnswer: 'Monitor energy usage'
},

{
question: 'Which of the following building systems would be considered in the Enhanced Commissioning process?',
choices: ['HVAC systems', 'Lighting systems', 'Building envelope', 'All of the above'],
correctAnswer: 'All of the above'
}
            
            // ... other questions for Set 3
        ]
    },
    // Add more sets as needed
];



const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const showAnswersBtn = document.getElementById('show-answers-btn');


function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.setAttribute('data-question-index', index);

    const questionText = document.createElement('h2');
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    question.choices.forEach((choice, choiceIndex) => {
        const choiceWrapper = document.createElement('div');
        
        const choiceInput = document.createElement('input');
        choiceInput.setAttribute('type', 'radio');
        choiceInput.setAttribute('name', `question${index}`);
        choiceInput.setAttribute('value', `${choice}`);
        choiceInput.setAttribute('id', `choice${choiceIndex}question${index}`);

        const choiceLabel = document.createElement('label');
        choiceLabel.setAttribute('for', `choice${choiceIndex}question${index}`);
        choiceLabel.textContent = choice;
        
        choiceWrapper.appendChild(choiceInput);
        choiceWrapper.appendChild(choiceLabel);
        questionDiv.appendChild(choiceWrapper);
    });

    return questionDiv;
}


quizData.forEach((questionSetData, setIndex) => {
    const setDiv = document.createElement('div');
    setDiv.classList.add('question-set');
    setDiv.setAttribute('data-set-index', setIndex);
    setDiv.style.display = 'none';

    const subheading = document.createElement('h3');
    subheading.textContent = questionSetData.subheading;
    setDiv.appendChild(subheading);

    questionSetData.questions.forEach((question, questionIndex) => {
        const questionElement = createQuestionElement(question, questionIndex);
        setDiv.appendChild(questionElement);
    });

    quizContainer.appendChild(setDiv);
});




let currentSetIndex = 0;
document.querySelector('.question-set[data-set-index="0"]').style.display = 'block';

prevBtn.addEventListener('click', () => {
    if (currentSetIndex > 0) {
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'none';
        currentSetIndex--;
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'block';
    }
});


nextBtn.addEventListener('click', () => {
    if (currentSetIndex < quizData.length - 1) {
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'none';
        currentSetIndex++;
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'block';
        
        // Hide the score-display div when the next button is clicked
        const scoreDisplay = document.getElementById('score-display');
        scoreDisplay.style.display = 'none';
    }
});




submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const currentSet = document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`);
    const questions = currentSet.querySelectorAll('.question');
    let score = 0;

    questions.forEach((questionDiv, index) => {
        const questionIndex = questionDiv.getAttribute('data-question-index');
        const selectedChoice = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedChoice) {
            const userAnswer = selectedChoice.value;
            const correctAnswer = quizData[currentSetIndex].questions[questionIndex].correctAnswer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    });
    alert(`You answered ${score} out of ${questions.length} questions correctly.`);
    // Display the score on the page
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.style.display = 'block'; // Make the score-display div visible
    scoreDisplay.innerHTML = `You answered ${score} out of ${questions.length} questions correctly.`;
});



let answersVisible = false;

showAnswersBtn.addEventListener('click', () => {
    const currentSet = document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`);
    const questions = currentSet.querySelectorAll('.question');

    answersVisible = !answersVisible;

    if (answersVisible) {
        showAnswersBtn.textContent = 'Hide Answers';
    } else {
        showAnswersBtn.textContent = 'Show Answers';
    }

    questions.forEach((questionDiv, index) => {
        const questionIndex = questionDiv.getAttribute('data-question-index');
        const correctAnswer = quizData[currentSetIndex].questions[questionIndex].correctAnswer;
        let correctAnswerParagraph = questionDiv.querySelector('.correct-answer');

        if (!correctAnswerParagraph) {
            correctAnswerParagraph = document.createElement('p');
            correctAnswerParagraph.classList.add('correct-answer');
            correctAnswerParagraph.textContent = `Correct Answer: ${correctAnswer}`;
            correctAnswerParagraph.style.color = 'green';
            correctAnswerParagraph.style.display = 'none';
            questionDiv.appendChild(correctAnswerParagraph);
        }

        correctAnswerParagraph.style.display = answersVisible ? 'block' : 'none';
    });
});





});




