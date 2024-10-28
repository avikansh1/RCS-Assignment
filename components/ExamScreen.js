import React, {useState} from 'react';
import {View, Button} from 'react-native';
import Timer from './Timer';
import Questions from './Questions';
import {useNavigation} from '@react-navigation/native';

const ExamScreen = () => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const questionsPerPage = 10; // 10 questions per screen
  const navigation = useNavigation();

  // Dummy questions data (unchanged)
  const questions = [
    {
      id: 1,
      question:
        'What is the output of `console.log(typeof NaN)` in JavaScript?',
      options: ['"number"', '"string"', '"undefined"', '"NaN"'],
      correctAnswer: '"number"',
    },
    {
      id: 2,
      question:
        'Which method is used to merge two or more arrays in JavaScript?',
      options: ['concat()', 'push()', 'join()', 'slice()'],
      correctAnswer: 'concat()',
    },
    {
      id: 3,
      question: 'How do you define a constant in JavaScript?',
      options: ['var', 'let', 'const', 'define'],
      correctAnswer: 'const',
    },
    {
      id: 4,
      question: 'What is the correct syntax for a function in JavaScript?',
      options: [
        'function myFunction() {}',
        'def myFunction() {}',
        'func myFunction() {}',
        'function:myFunction() {}',
      ],
      correctAnswer: 'function myFunction() {}',
    },
    {
      id: 5,
      question: 'Which of the following is NOT a JavaScript data type?',
      options: ['String', 'Number', 'Boolean', 'Character'],
      correctAnswer: 'Character',
    },
    {
      id: 6,
      question:
        'How do you create a state variable in React Native using hooks?',
      options: [
        'this.state = {}',
        'useState()',
        'createState()',
        'initState()',
      ],
      correctAnswer: 'useState()',
    },
    {
      id: 7,
      question:
        'Which method is used to handle side-effects in React functional components?',
      options: [
        'useEffect()',
        'useState()',
        'componentDidMount()',
        'useReducer()',
      ],
      correctAnswer: 'useEffect()',
    },
    {
      id: 8,
      question:
        'What is the default port for running a React Native development server?',
      options: ['8080', '3000', '19000', '9000'],
      correctAnswer: '8080',
    },
    {
      id: 9,
      question: 'Which command is used to start a new React Native project?',
      options: [
        'npx create-react-native-app',
        'npm init react-native',
        'npx react-native init',
        'npx expo start',
      ],
      correctAnswer: 'npx react-native init',
    },
    {
      id: 10,
      question:
        'What is the purpose of the `FlatList` component in React Native?',
      options: [
        'To render a fixed number of items',
        'To render large lists of data efficiently',
        'To render a grid layout',
        'To fetch data from an API',
      ],
      correctAnswer: 'To render large lists of data efficiently',
    },
    {
      id: 11,
      question: 'What is JSX in React Native?',
      options: [
        'JavaScript XML',
        'JavaScript Syntax Extension',
        'JavaScript Execution',
        'Java Syntax Extension',
      ],
      correctAnswer: 'JavaScript XML',
    },
    {
      id: 12,
      question: 'How can you style components in React Native?',
      options: [
        'CSS',
        'StyleSheet.create()',
        'useStyles()',
        'styledComponents()',
      ],
      correctAnswer: 'StyleSheet.create()',
    },
    {
      id: 13,
      question: 'What is the use of `TouchableOpacity` in React Native?',
      options: [
        'To make elements clickable with opacity feedback',
        'To apply styles with opacity',
        'To handle navigation between screens',
        'To create animations',
      ],
      correctAnswer: 'To make elements clickable with opacity feedback',
    },
    {
      id: 14,
      question: 'How do you fetch data from an API in React Native?',
      options: ['fetch()', 'getData()', 'axios()', 'httpRequest()'],
      correctAnswer: 'fetch()',
    },
    {
      id: 15,
      question: 'What does `useRef` hook in React do?',
      options: [
        'Returns a mutable ref object',
        'Manages component state',
        'Causes side-effects in components',
        'Handles component lifecycle',
      ],
      correctAnswer: 'Returns a mutable ref object',
    },
    {
      id: 16,
      question: 'Which of the following is NOT a valid React Native component?',
      options: ['Text', 'View', 'Span', 'Image'],
      correctAnswer: 'Span',
    },
    {
      id: 17,
      question: 'What is the correct way to handle an event in React Native?',
      options: [
        '<Button onClick={handleClick} />',
        '<Button onPress={handleClick} />',
        '<Button click={handleClick} />',
        '<Button action={handleClick} />',
      ],
      correctAnswer: '<Button onPress={handleClick} />',
    },
    {
      id: 18,
      question: 'What is `Hermes` in React Native?',
      options: [
        'A state management library',
        'A JavaScript engine for React Native',
        'A navigation library',
        'A database library',
      ],
      correctAnswer: 'A JavaScript engine for React Native',
    },
    {
      id: 19,
      question:
        'Which lifecycle method is called after a component is rendered?',
      options: [
        'componentDidMount',
        'componentWillMount',
        'componentWillUnmount',
        'render',
      ],
      correctAnswer: 'componentDidMount',
    },
    {
      id: 20,
      question: 'How do you handle navigation between screens in React Native?',
      options: [
        'React Router',
        'React Navigation',
        'useNavigate',
        'Navigation.js',
      ],
      correctAnswer: 'React Navigation',
    },
    {
      id: 21,
      question:
        'How do you share data between parent and child components in React?',
      options: ['Context API', 'Props', 'State', 'Redux'],
      correctAnswer: 'Props',
    },
    {
      id: 22,
      question: 'What does the `useMemo` hook do in React?',
      options: [
        'Memorizes a function result',
        'Manages state',
        'Creates refs',
        'Handles side-effects',
      ],
      correctAnswer: 'Memorizes a function result',
    },
    {
      id: 23,
      question: 'Which command is used to run a React Native project?',
      options: [
        'npm run native',
        'react-native run',
        'npx react-native run-android',
        'npm start-native',
      ],
      correctAnswer: 'npx react-native run-android',
    },
    {
      id: 24,
      question: 'What is `Expo` in the context of React Native?',
      options: [
        'A framework for developing React Native apps',
        'A library for animations',
        'A state management solution',
        'A package for navigation',
      ],
      correctAnswer: 'A framework for developing React Native apps',
    },
    {
      id: 25,
      question:
        'Which hook is used to handle state in React functional components?',
      options: ['useState', 'useEffect', 'useReducer', 'useContext'],
      correctAnswer: 'useState',
    },
    {
      id: 26,
      question: 'How do you handle asynchronous operations in JavaScript?',
      options: ['Async/Await', 'Promises', 'Callbacks', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    {
      id: 27,
      question:
        'Which of the following is a valid way to import a component in React?',
      options: [
        'import Component from "Component"',
        'require("Component")',
        'import {Component} from "Component"',
        'import Component from "./Component"',
      ],
      correctAnswer: 'import Component from "./Component"',
    },
    {
      id: 28,
      question: 'What is the purpose of the `useReducer` hook in React?',
      options: [
        'Manage complex state logic',
        'Manage simple state logic',
        'Handle side-effects',
        'Handle navigation',
      ],
      correctAnswer: 'Manage complex state logic',
    },
    {
      id: 29,
      question: 'Which of the following are true about `Virtual DOM`?',
      options: [
        'It is a copy of the real DOM',
        'It updates faster than the real DOM',
        'React uses it to optimize rendering',
        'All of the above',
      ],
      correctAnswer: 'All of the above',
    },
    {
      id: 30,
      question: 'What does the `StyleSheet.create` method do in React Native?',
      options: [
        'Creates styles for components',
        'Imports CSS files',
        'Applies inline styles',
        'Creates a new View component',
      ],
      correctAnswer: 'Creates styles for components',
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Handle exam finish (submit or timer finish)
  const handleExamFinish = () => {
    let score = 0;

    // Calculate score based on user's answers
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score += 1;
      }
    });

    const totalQuestions = questions.length;

    // Navigate to ResultScreen with score and total questions
    navigation.navigate('ResultScreen', {score, totalQuestions});
  };

  // Get current page's questions
  const currentQuestions = questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage,
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      {/* Timer */}
      <Timer onFinish={handleExamFinish} />

      {/* Questions for current page */}
      <Questions
        questions={currentQuestions}
        answers={answers}
        setAnswers={setAnswers}
      />

      {/* Pagination buttons */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {currentPage > 1 && (
          <Button
            title="Previous"
            onPress={() => setCurrentPage(currentPage - 1)}
          />
        )}
        {currentPage < totalPages ? (
          <Button
            title="Next"
            onPress={() => setCurrentPage(currentPage + 1)}
          />
        ) : (
          <Button title="Submit Exam" onPress={handleExamFinish} />
        )}
      </View>
    </View>
  );
};

export default ExamScreen;
