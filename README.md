# Andrew Alliance Test
Hello fellow interviewers, if you have started to check my test from the FrontEnd part I recommend starting with the BackEnd, it's where I started and the story will be better-told :).
For the FrontEnd, I started with Vue, which is the Framework where I feel fluent right now (any time I can change, but time stills ticking...), also I used the Vue CLI, which bootstrap the app to ramp up this project.

## PR (#1)
In this PR I'm going to start by applying some template, I´ll be searching for one with a good UI, remember, we are not trying to reinvent the wheel in this test and the time saved creating a UI can be invested in creating a better experience.
So I picked `quasar`, to be honest, will be my first time using it, normally I use Vuetify, but I don't feel fully pleased with it, so let's see how it goes.

## PR (#2)
Soo, going well right now, some mental notes, implement GitHub actions for the CI (maybe I won't do it, but is something important to ensure we are not merging failing branches!). 
Continuing with the work, now I'm going to implement the functionality no navigate to a quiz, answer questions and save the results and the user actions.
Well, at this point I have decided to continue with the functionality and do tests at the end, normally, I do tests and functionality at the same time, this decision was taken just to gain some time, acknowledging that because of this I could refactor code in further steps.
I have finished the logic of the answers, now I'm moving towards validating the quiz, and save the quiz result. 

## PR (#3)
Do you remember my decision on the last PR? about leaving tests to the end? Ok, I was feeling kind of guilty! so yes, created the PR 3 to complete tests :) (I´m proud of myself).
So far, I have done most of the tests, but I need to also balance the time, so as I have shown how I can solve tests, for some tests I´m just going to write the statement of how I would write it.

## PR (#4)
Now my last PR (maybe I could add other more refactoring a little bit and organizing the code, I rushed a little bit in the front) I´m going to implement the history.
After checking the Quasar components I liked the timeline, looks clean, and is intuitive to read as a timeline.
I think for now I will let the project as it is, take a couple of days (today, I still have 7 days for the deadline :D) to check it with fresh eyes.

## PR (#5)
Well hello again, as I said some days ago, I took my time, also I kept up to date with my digital marketing master and my french classes :), I walked around the code optimizing a little bit the logic, also fixing my prettifier, had some weird configurations and here it is my final test.

My last words before saying goodbye, my intention with this README (and the one on the API) is to tell all my feelings while doing the test, so you can enjoy the test evaluation almost the same I enjoyed doing the test and to show me just as I am, no matter how many time I have been doing this, no matter how many quizzes code I have done in my life, there is always room to learn new things and to improve, this is my Mantra.

## TODOs
Well with more time there are many features I would like to implement, I will separate them into different subjects:

### Features
Implement a token-based authentication, my first shot could be JWT, it's easy to implement. I know that many apps store the keys on the localstorage, to be honest, I have found it very useful to store them on the Cookies, that way is always sent on the request header (I know this can be an endless discussion and both ways are good)
Better quiz timing
After a quiz competition, show the result on the same page and show where the user had the mistakes
In history to be able to see past answers
Cache some requests like the Quizzes list to avoid calling that endpoint every page reload.
Implement CI with Github actions
### Tests
End the test.
Implement E2E testing. For that mather I installed Cypress I think is a very good option.
### TECH
Upgrade to Vue3 so we can use Typescript

I know every time I think about the test I will find more things I would love to implement, but... that's life.

Good bye!

Some screenshots from the app:
![history_desktop](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/history_desktop.png?raw=true)
![history_mobile](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/history_mobile.png?raw=true)
![home_desktop](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/home_desktop.png?raw=true)
![menu_mobile](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/menu_mobile.png?raw=true)
![quiz_desktop](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/quiz_desktop.png?raw=true)
![quiz2_desktop](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/quiz2_desktop.png?raw=true)
![quizzes_desktop](https://raw.githubusercontent.com/dfmurillo/solid-winner-app/main/screenshots/quizzes_desktop.png?raw=true)