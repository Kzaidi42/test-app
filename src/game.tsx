import React, { FC } from 'react';
import { GridPoints } from './interfaces.ts';

const Game: FC = () => {
  // Destination point till which we want to count the valid points.
  const accessibleToMonkey: number = 19;

  /**
   * @description Helper function to calculate the sum of given coordinate.
   * @param coordinate 
   * @returns number
   */
  const calculateSum = (coordinate: number): number => {
    return Math.abs(coordinate)
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  };

  /**
   * @description Check whether the point is accessible or not till the given destination.
   * @param xCoordinate  first number in the combination
   * @param yCoordinate  second number in the combination
   * @returns boolean
   */
  const isAccessibleForMonkey = ({ xCoordinate, yCoordinate }: GridPoints): boolean => {
    const digitSumXCoordinate = calculateSum(xCoordinate);
    const digitSumYCoordinate = calculateSum(yCoordinate);
    return digitSumXCoordinate + digitSumYCoordinate <= accessibleToMonkey;
  };

  /**
   * @description Function to count valid points 
   * @param : none
   * @returns number
   */
  const countValidPoints = (): number => {
    const gridSize = 100;
    let accessibleCount = 0;

    for (let xCoordinate = -gridSize; xCoordinate <= gridSize; xCoordinate = xCoordinate + 1) {
      for (let yCoordinate = -gridSize; yCoordinate <= gridSize; yCoordinate = yCoordinate + 1) {
        const point: GridPoints = { xCoordinate, yCoordinate };
        if (isAccessibleForMonkey(point)) {
          accessibleCount = accessibleCount + 1;
        }
      }
    }

    return accessibleCount;
  };

  const validPoints = countValidPoints();

  return (
    <div>
      <h1>Accessible To Monkey: <span>{accessibleToMonkey}</span></h1>
      <h1>Valid Points: <span>{validPoints}</span></h1>
    </div>
  );
};

export default Game;
