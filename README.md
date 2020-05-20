This is a simple React app that displays the Fibonacci series numbers. 
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install and use
* git clone
* npm install
* npm start
* Browse to localhost:3000

Please notice - the app uses native javascript's BigInt to calculate big integers which are greater than Number.MAX_SAFE_INTEGER.
If you are using IE or Safari browsers which do not support BigInt, the app will use 'normal' integers instead, which means that all values of Fibonacci numbers with index greater than 78 will be incorrect. 
