/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 7: Being Considerate of Household Income
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who is the main character who badly wants a new phone after seeing his classmates\' posts?',
    choices: { a: 'Marco', b: 'Mateo', c: 'Miguel', d: 'Mario' },
    correct: 'c'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What did Miguel\'s mom say when he asked for a new phone at dinner?',
    choices: { a: '"Yes, tomorrow."', b: '"Ask your father."', c: '"No, never."', d: '"We\'ll see."' },
    correct: 'd'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'A classmate keeps asking for an expensive gadget even though his family is struggling with bills. Based on the story, what is the best advice?',
    choices: {
      a: 'Keep asking until his parents say yes.',
      b: 'Borrow money from friends.',
      c: 'Think about what his family can afford and be grateful for what he already has.',
      d: 'Ask for an even more expensive one.'
    },
    correct: 'c'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You really want a new pair of shoes you saw online, but you know your family is saving for something important. What would Miguel do?',
    choices: {
      a: 'Buy them secretly so no one notices.',
      b: 'Ask your friends to help convince your parents.',
      c: 'Wait for the sale to end and then buy them anyway.',
      d: 'Hold off, think about your family\'s needs, and be grateful for what you already have.'
    },
    correct: 'd'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Miguel start to feel that he needed a new phone?',
    choices: {
      a: 'Many of his classmates had new phones before a school event.',
      b: 'His old phone stopped working completely.',
      c: 'His parents promised him one.',
      d: 'He wanted to sell his old phone.'
    },
    correct: 'a'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'How did Miguel feel when days passed and the new phone never came?',
    choices: {
      a: 'Calm and patient',
      b: 'Happy and relieved',
      c: 'Annoyed, thinking his parents did not understand',
      d: 'Proud of himself'
    },
    correct: 'c'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Miguel decide to tell his mom it was okay to keep using his old phone?',
    choices: {
      a: 'He lost interest in phones.',
      b: 'He understood what his parents were carrying and did not want to add to it.',
      c: 'His classmates made fun of new phones.',
      d: 'He was afraid his mom would get angry.'
    },
    correct: 'b'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What did Miguel see his mom doing in the kitchen one night, and why is this moment important?',
    choices: {
      a: 'Cooking a late-night snack — it shows she was hungry.',
      b: 'Writing in a small notebook beside a calculator, looking stressed — it shows the quiet burden parents carry.',
      c: 'Watching TV — it shows she had free time.',
      d: 'Wrapping a gift — it shows a surprise was coming.'
    },
    correct: 'b'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Which of these did Miguel notice about his parents the next day, and what does it reveal?',
    choices: {
      a: 'They were planning a vacation — they had extra money.',
      b: 'They were shopping for new clothes — they loved shopping.',
      c: 'They were buying a new phone for themselves — they were selfish.',
      d: 'His dad skipped his usual coffee, his mom reused her old bag, and bills were waiting to be paid — they were sacrificing quietly for the family.'
    },
    correct: 'd'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why do you think the author made the parents give the phone on an ordinary day, "without any strain"?',
    choices: {
      a: 'To show that parents give in if children wait long enough.',
      b: 'To show that the phone was cheap.',
      c: 'To make the story shorter.',
      d: 'To show that understanding and gratitude matter more than the gift itself.'
    },
    correct: 'd'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;