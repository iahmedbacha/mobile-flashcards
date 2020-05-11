# Mobile Flashcards

## Project Overview

A mobile app that allows users to study collections of flashcards.

## App Functionality

## App Specifications

### Application Setup

- The application requires only yarn install and yarn start to install and launch. npm can be used in place of yarn.
- A README is included with the project. The README includes clear instructions for installing and launching the project.

### Application Functionality

- The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.
- Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.
- The individual deck view includes (at a minimum):

1. The deck title
2. Number of cards in the deck
3. Option to start a quiz for that deck
4. Option to add a new question to the deck

- Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.
  The New Question view includes a form with fields for a question and answer, and a submit button.
  Submitting the form correctly adds the question to the deck.
-

1. The Quiz view starts with a question from the selected deck.
2. The question is displayed, along with a button to show the answer.
3. Pressing the 'Show Answer' button displays the answer.
4. Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
5. The view displays the number of questions remaining.
6. When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
7. When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
8. Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.

- The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.
  Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
- Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.
- The app works correctly in either Android OR iOS devices (or emulator).
  Project README identifies which platform(s) have been tested.

## Code Quality

- Project code uses reasonable naming conventions. Components are written for reuse and use a modular structure.
- There are no build errors when starting the app. There are no errors while using the app. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

## Licence

GNU General Public License v3.0
