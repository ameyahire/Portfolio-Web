import React, { useState, useEffect, useRef } from 'react';
import './Game.css';

const boardSize = 20;
const speed = 100; // Game speed in milliseconds

const initialSnake = [
  { x: 10, y: 10 }
];

const initialFood = {
  x: Math.floor(Math.random() * boardSize),
  y: Math.floor(Math.random() * boardSize),
};

const Game = ({ onGoBack }) => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState({ x: 0, y: 1 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const prevDirection = useRef(direction);

  useEffect(() => {
    if (isGameOver) return;

    const handleKeydown = (e) => {
      const currentDir = prevDirection.current;

      switch (e.key) {
        case 'ArrowUp':
          if (currentDir.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (currentDir.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (currentDir.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (currentDir.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) return;

    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // Check for game over conditions
        if (
          head.x < 0 ||
          head.x >= boardSize ||
          head.y < 0 ||
          head.y >= boardSize ||
          newSnake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
          setIsGameOver(true);
          return prevSnake;
        }

        // Check for eating food
        if (head.x === food.x && head.y === food.y) {
          setScore(prevScore => prevScore + 1);
          setFood({
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize),
          });
        } else {
          newSnake.pop(); // Remove tail if no food is eaten
        }

        newSnake.unshift(head); // Add new head
        return newSnake;
      });

      prevDirection.current = direction;

    }, speed);

    return () => clearInterval(gameLoop);
  }, [snake, direction, food, isGameOver]);

  const handleRestart = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection({ x: 0, y: 1 });
    setIsGameOver(false);
    setScore(0);
  };

  const renderBoard = () => {
    const board = [];
    for (let y = 0; y < boardSize; y++) {
      for (let x = 0; x < boardSize; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        let className = 'cell';
        if (isSnake) className += ' snake';
        if (isFood) className += ' food';
        board.push(<div key={`${x}-${y}`} className={className} />);
      }
    }
    return board;
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Snake Game</h1>
        <button onClick={onGoBack} className="go-back-btn">Go Back</button>
      </div>
      {isGameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="score">Score: {score}</div>
          <div className="board">{renderBoard()}</div>
        </>
      )}
    </div>
  );
};

export default Game;