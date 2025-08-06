# Tic-Tac-Toe

A modern implementation of the classic Tic-Tac-Toe game built with vanilla JavaScript, emphasizing modular design patterns and clean code architecture. This project demonstrates advanced JavaScript concepts including module patterns, factory functions, and separation of concerns.

## Live Demo

[Play the game here](https://furkanssarri.github.io/tic-tac-toe/)

## Features

- **Interactive Gameplay**: Click-based interface for placing X's and O's
- **Win Detection**: Automatic detection of winning patterns and game-over states
- **Draw Detection**: Recognizes when the game ends in a draw
- **Game Restart**: Built-in restart functionality to play multiple rounds
- **Responsive Design**: Optimized for desktop and mobile devices
- **Visual Feedback**: Blur overlay and modal dialogs for game-over states
- **Clean UI**: Modern, minimalist design with smooth transitions

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ modules and modern JavaScript features
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Noto Sans typography

## Project Structure

```txt
tic-tac-toe/
├── index.html              # Main HTML structure
├── main.js                 # Entry point and DOM manipulation
├── style/
│   └── style.css          # Styling and responsive design
├── js/
│   ├── game.js            # Core game logic and state management
│   ├── gameBoard.js       # Game board initialization and management
│   └── players.js         # Player factory and management
└── README.md              # Project documentation
```

## Architecture & Design Patterns

This project implements several JavaScript concepts:

### Module Pattern

- **Revealing Module Pattern**: Each JavaScript file uses the module pattern to encapsulate functionality and expose only necessary methods
- **ES6 Modules**: Modern import/export syntax for better dependency management
- **Separation of Concerns**: Clear division between game logic, UI, and data management

### Key Modules

#### 1. Game Module (`js/game.js`)

- Manages game state and flow control
- Handles win/draw detection logic
- Controls player turns and game lifecycle
- Implements winning pattern validation

#### 2. GameBoard Module (`js/gameBoard.js`)

- Initializes and manages the 3x3 game board
- Creates DOM elements dynamically
- Maintains board state array

#### 3. Player Module (`js/players.js`)

- Factory function for creating player objects
- Manages player properties (name and marker)

#### 4. Main Module (`main.js`)

- Handles DOM manipulation and user interactions
- Manages click events and UI updates
- Controls game overlay and restart functionality

## Game Logic

### Winning Conditions

The game checks for wins across:

- **Rows**: [0,1,2], [3,4,5], [6,7,8]
- **Columns**: [0,3,6], [1,4,7], [2,5,8]
- **Diagonals**: [0,4,8], [2,4,6]

### Game Flow

1. Game initializes with empty 3x3 board
2. Player X starts first
3. Players alternate turns by clicking empty cells
4. Game checks for win/draw after each move
5. Game over modal displays result
6. Option to restart and play again

## Installation and Setup

### Option 1: Simple File Server

1. Clone the repository:

```bash
git clone https://github.com/furkanssarri/tic-tac-toe.git
cd tic-tac-toe
```

2. Open with a local server (due to ES6 modules):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

### Option 2: Live Server (Recommended for VS Code)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## Responsive Design

- **Mobile Optimized**: Scales appropriately on devices with max-width 425px
- **CSS Grid Layout**: Modern grid system for the game board
- **Flexbox**: Flexible layouts for content alignment
- **CSS Custom Properties**: Maintainable color theming

## Browser Compatibility

- Modern browsers supporting ES6 modules
- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

## Code Quality Features

- **Modular Architecture**: Clean separation of concerns
- **Factory Pattern**: Used for player creation
- **Event Delegation**: Efficient event handling
- **Functional Programming**: Pure functions where possible
- **DRY Principles**: Avoiding code repetition
- **Semantic HTML**: Accessible and meaningful markup

## Future Enhancements

- AI opponent with difficulty levels
- Score tracking across multiple games
- Custom player names input
- Sound effects and animations
- Tournament mode for multiple players
- Local storage for game statistics

## Learning Objectives

This project was built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum, focusing on:

- **Factory Functions vs Constructors**: Understanding different object creation patterns
- **Module Pattern**: Implementing the revealing module pattern
- **Scope and Closures**: Proper use of private and public methods
- **DOM Manipulation**: Dynamic content creation and event handling
- **Game Logic Implementation**: Algorithm design for game state management
- **Code Organization**: Structuring larger JavaScript applications

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the curriculum and guidance
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
