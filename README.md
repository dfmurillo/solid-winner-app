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

PR (#4)
Wow, you should be wondering, what happened with the PR 3? well, will be after, remember my decision on the last PR? about leaving tests to the end? Ok, I was feeling kind of guilty and dirty! so yes, created the PR 4 to complete tests :) (I´m proud of myself)


[ TODO ]
[ ] Add micro-interactions
[ ] Take the time spent on each quiz and each question
[ ] Once a quiz is validated, stay on the same page and allow the user to navigate within the answered quizzes showing his responses and the correct ones if that's the case

