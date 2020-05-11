let decks = {
  deck1: {
    title: 'deck1',
    questions: ['8xf0y6ziyjabvozdd253nd', '6ni6ok3ym7mf1p33lnez'],
  },
  deck2: {
    title: 'deck2',
    questions: ['am8ehyc8byjqgar0jgpub9', 'loxhs1bqm25b708cmbf3g'],
  },
  deck3: {
    title: 'deck3',
    questions: ['vthrdm985a262al8qx3do', 'xj352vofupe1dqz9emx13r'],
  },
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    question: 'question1',
    answer: 'answer1',
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    question: 'question2',
    answer: 'answer2',
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    question: 'question3',
    answer: 'answer3',
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    question: 'question4',
    answer: 'answer4',
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    question: 'question5',
    answer: 'answer5',
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    question: 'question5',
    answer: 'answer5',
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function getDecksData() {
  return new Promise((res) => {
    setTimeout(() => res({ ...decks }), 1000);
  });
}

export function getQuestionsData() {
  return new Promise((res) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ question, answer }) {
  return {
    id: generateUID(),
    question,
    answer,
  };
}

export function saveQuestionData(question) {
  return new Promise((res) => {
    const { id } = question;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      decks = {
        ...decks,
        [id]: {
          ...decks[id],
          questions: decks[id].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function saveDeckData(deck) {
  return new Promise((res) => {
    setTimeout(() => {
      decks = {
        ...decks,
        [deck.title]: deck,
      };

      res(deck);
    }, 1000);
  });
}
