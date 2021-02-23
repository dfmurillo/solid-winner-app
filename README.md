# Andrew Alliance Test
Hello fellow interviewers, if you have started to check my test from the FrontEnd part I recommend starting with the BackEnd, it's where I started and the story will be better-told :).
For the FrontEnd, I started with Vue, which is the Framework where I feel fluent right now (any time I can change, but time stills ticking...), also I used the Vue CLI, which bootstrap the app to ramp up this project.

PR (#1)
In this PR I'm going to start by applying some template, I´ll be searching for one with a good UI, remember, we are not trying to reinvent the wheel in this test and the time saved creating a UI can be invested in creating a better experience.
So I picked `quasar`, to be honest, will be my first time using it, normally I use Vuetify, but I don't feel fully pleased with it, so let's see how it goes.

PR (#2)
Soo, going well right now, some mental notes, implement GitHub actions for the CI (maybe I won't do it, but is something important to ensure we are not merging failing branches!). 
Continuing with the work, now I'm going to implement the functionality no navigate to a quiz, answer questions and save the results and the user actions.
Well, at this point I have decided to continue with the functionality and do tests at the end, normally, I do tests and functionality at the same time, this decision was taken just to gain some time, acknowledging that because of this I could refactor code in further steps.
I have finished the logic of the answers, now I'm moving towards validating the quiz, and save the quiz result. 

PR (#3)
Do you remember my decision on the last PR? about leaving tests to the end? Ok, I was feeling kind of guilty! so yes, created the PR 3 to complete tests :) (I´m proud of myself).
So far, I have done most of the tests, but I need to also balance the time, so as I have shown how I can solve tests, for some tests I´m just going to write the statement of how I would write it.

PR (#4)
Now my last PR (maybe I could add other more refactoring a little bit and organizing the code, I rushed a little bit in the front) I´m going to implement the history.
After checking the Quasar components I liked the timeline, looks clean, and is intuitive to read as a timeline.
I think for now I will let the project as it is, take a couple of days (today, I still have 7 days for the deadline :D) to check it with fresh eyes.


[ TODO ]
[ ] Add micro-interactions
[ ] Take the time spent on each quiz and each question
[ ] Once a quiz is validated, stay on the same page and allow the user to navigate within the answered quizzes showing his responses and the correct ones if that's the case
[ ] Cache answers from the server like the list of all quizzes

