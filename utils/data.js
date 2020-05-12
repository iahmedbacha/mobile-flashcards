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
    deckId: 'deck1',
    question: 'question1',
    answer: 'correct',
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    deckId: 'deck1',
    question: 'question2',
    answer: 'correct',
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    deckId: 'deck2',
    question: 'question3',
    answer: 'incorrect',
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    deckId: 'deck2',
    question: 'question4',
    answer: 'incorrect',
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    deckId: 'deck3',
    question: 'question5',
    answer: 'correct',
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    deckId: 'deck3',
    question: 'question6',
    answer: 'incorrect',
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
    setTimeout(() => res({ ...decks }), 200);
  });
}

export function getQuestionsData() {
  return new Promise((res) => {
    setTimeout(() => res({ ...questions }), 200);
  });
}

function formatQuestion({ deckId, question, answer }) {
  return {
    id: generateUID(),
    deckId,
    question,
    answer,
  };
}

export function saveQuestionData(question) {
  return new Promise((res) => {
    const { deckId } = question;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: {
          ...formattedQuestion,
        },
      };

      decks = {
        ...decks,
        [deckId]: {
          ...decks[deckId],
          questions: decks[deckId].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 200);
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
    }, 200);
  });
}
