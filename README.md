# Makers Academy - Airport Challenge in Javascript

A reimplementation of the Airport challenge: TDD of a two class app in JavaScript. Tested using the Jasmine Framework

## Getting started

1. Clone this repo `git clone git@github.com:Sindex42/airport-challenge-js.git`
2. Change directory `cd airport-challenge-js`

### Testing 

1. Run tests with Jasmine `open SpecRunner.html`

### Usage

- In the same SpecRunner browser window, open up the console e.g. in Chrome:  
  `ctrl + shift + J` (windows) or 
 `cmd + option + J` (mac)

- Planes can land at airports

![Imgur](https://i.imgur.com/fcPS6Bu.png)
 
- Planes cannot land if the weather is stormy

![Imgur](https://i.imgur.com/ExNCGl1.png)


## User Stories

```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
