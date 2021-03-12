# NumR = The Integer <-> Roman Converter 🤓
NumR is a simple app hacked together in a few hours which converts integer numbers into their _'Roman numeral'_ equivalent

# The Technical Details

## The Tech
React with Typescript was used to build this. The initial version was hacked together on Codepen. The project was created with `create-react-app`.

## App Structure

### App component
The app component uses some internal state to hold value of the input integer, as well as the result of the conversion. This state as well as state modifiers are passed to child components

App component just renders two child components.

#### InputContainer component
The `InputContainer` renders an input element for getting the input integer. It also has a button which calls the util `getRomanEquivalent` to get converted roman numeral for the input integer. It sets this in the state (that was passed down from App component)

#### RomanResult component
This component just displays the result of the conversion

### Styling
Plain CSS is used for styling. There is no specific reason for choosing this other than the fact that it was easy and quick to just write some CSS from scratch (for hacking this together).
Each component has its own scoped styles. Separate `.css` files are used as this came default with the project created with `create-react-app`

## Tests
Some very simple basic unit tests are included which test the util which is exported (`getRomanEquivalent` from => `roman-converter.util.ts`)

## Demo
## Installation Instructions
- Clone the repo/download the code
- Run `npm i`
- Run `npm start`
- Navigate to `http://localhost:3000/` to see the local version

# Possible Improvements
- The basic logic for conversion doesn't account for certain cases. This gives some faulty conversions for certain cases. This is definitely the most important thing which can be improved
- Usage of scss would make the styling cleaner (with the use of variables etc)
- The UI looks better on smaller screens but for bigger screens, it looks odd. This can be improved as well with some CSS magic 👩‍💻
