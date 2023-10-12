# Frontend training instructions

## Initial setup

Set up your .npmrc file so that you have access to the Flowable Artifacts.

Go into this frontend folder

Run `npm install` in your console to download all dependencies.

Once this is done, you can execute scripts mentioned in the `package.json` file using the command `npm run X` where `X` is the name of your script. 
Moreover, some IDEs (such as IDEA IntelliJ Ultimate Edition) provide a convenient "run script feature" which appears like a clickable icon or button next to the script name when you open the `package.json` file. 


## Storybook

Storybook is not a Flowable technology, but it is relatively easy to integrate into any Frontend build: https://storybook.js.org/ 

For this training, we prepared a setup including some helper components, e.g. StorybookForm which makes it easy to showcase Forms and components.
The .storybook folder contains two files that allow to fine-tune storybook: main.js and preview.js

### Test Components in Storybook

Run the script `build-storybook` (only necessary once when you set the Storybook project up)

Run the script `storybook` every time you want to start a new test session for your components. Then you can access Storybook at http://localhost:6006


## Build frontend for Flowable Work/Design

Run the script `build` to bundle all your components and store them in the Work and Design folders