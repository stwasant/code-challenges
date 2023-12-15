export function trafficLights(road: string, n: number): string[] {
  let finalArraySimulation: string[] = [road];
  let counterPosition = 0;
  let isCarMoved: boolean = false;
  let roadArray = road.split('');

  const getNextLightChar = (char: string): string => {
    switch (char) {
      case 'R':
        return 'G';

      case 'G':
        return 'O';

      case 'O':
        return 'R';

      default:
        return '';
    }
  };

  const getPrevLightChar = (char: string): string => {
    switch (char) {
      case 'R':
        return 'O';

      case 'G':
        return 'R';

      case 'O':
        return 'G';

      default:
        return '';
    }
  };

  // Obtaining the current position and light from road and save it in an object.
  let initialPositionCharsState = roadArray
    .map((char, index) => {
      if (char === 'R' || char === 'G' || char === 'O') {
        return {
          initialPositionChar: index,
          prevPositionChar: 0,
          prevLightChar: getPrevLightChar(char),
          currentLightChar: char,
          //nextLightChar: getNextLightChar(char),
          accumulatorChar: 1,
          isUpdated: false,
        };
      }
    })
    .filter(Boolean);

  // Loop for each iteration
  while (n > 0) {
    // Accumulator loop
    counterPosition++;

    // For each iteration we initialize isCarMoved flag to false
    isCarMoved = false;

    // Reading the array from left to right
    for (let i = 0; i < roadArray.length; i++) {
      if (i === 6) {
        console.log('es i =', i);
      }
      // We initialize the flags for each iteration before the road is changed
      const isCurrentCar = roadArray[i] === 'C';

      // Getting the object for the current position
      const objectByIndex = initialPositionCharsState.find((ele) => ele?.initialPositionChar === i);

      // We got the previous Char before is changed
      const previousChar = roadArray[i - 1];

      // We don't need do anything if the car is in the last position
      // and the next position is undefined (out of the array / road)
      if (
        isCurrentCar &&
        !isCarMoved &&
        roadArray[i + 1] === undefined &&
        objectByIndex === undefined
      ) {
        roadArray[i] = '.';
        break;
      }

      // Car is moving from left to right
      if (isCurrentCar && !isCarMoved) {
        // If the next position is a dot, we move the car
        if (roadArray[i + 1] === '.') {
          // We update the road
          roadArray[i] = '.';
          roadArray[i + 1] = 'C';
          isCarMoved = true;
        }

        // If the next position is a green light, we move the car and update the accumulator
        if (roadArray[i + 1] === 'G') {
          let localObjectByIndex = initialPositionCharsState.find(
            (ele) => ele?.initialPositionChar === i + 1
          );

          if (localObjectByIndex !== undefined && localObjectByIndex?.accumulatorChar !== 5) {
            // We need update the initialPositionCharsState
            initialPositionCharsState = initialPositionCharsState.map((obj) =>
              obj?.initialPositionChar === i + 1
                ? {
                    ...obj,
                    accumulatorChar: localObjectByIndex?.accumulatorChar!,
                    prevLightChar: 'G',
                    currentLightChar: 'C',
                    isUpdated: true,
                  }
                : obj
            );

            // We update the road
            roadArray[i] = '.';
            roadArray[i + 1] = 'C';
            isCarMoved = true;
          }
        }
      }

      // If the next position is green light and the position is the same from the position from initialPositionCharsState array and accumulator === 5 we have to change to O and update the accumulator to 0

      if (objectByIndex !== undefined) {
        if (objectByIndex && i === objectByIndex?.initialPositionChar) {
          // We update the road Green to Orange
          if (
            objectByIndex?.currentLightChar === 'G' &&
            !objectByIndex?.isUpdated &&
            objectByIndex?.accumulatorChar === 5
          ) {
            // We update the accumulator
            initialPositionCharsState = initialPositionCharsState.map((obj) =>
              obj?.initialPositionChar === i
                ? {
                    ...obj,
                    accumulatorChar: 0,
                    prevLightChar: getPrevLightChar(objectByIndex?.currentLightChar!),
                    currentLightChar: getNextLightChar(objectByIndex?.currentLightChar!),
                    isUpdated: true,
                  }
                : obj
            );

            // Green to Orange or if we have a car in the previous position we moved it.
            roadArray[i] = getNextLightChar(objectByIndex?.currentLightChar!);
            //We keep the previous char value
            roadArray[i - 1] = previousChar;
          }

          // We update the road Car to Green
          if (objectByIndex?.currentLightChar === 'C' && !objectByIndex?.isUpdated) {
            if (objectByIndex?.accumulatorChar !== 5) {
              // We update the accumulator
              initialPositionCharsState = initialPositionCharsState.map((obj) =>
                obj?.initialPositionChar === i
                  ? {
                      ...obj,
                      accumulatorChar: objectByIndex?.accumulatorChar!,
                      prevLightChar: 'C',
                      currentLightChar: 'G',
                      isUpdated: true,
                    }
                  : obj
              );

              // Green to Orange
              roadArray[i] = 'G';
              //We keep the previous char value
              roadArray[i - 1] = previousChar;
            }

            // This happening when the car is the last position before green light and the accumulator is 5, so we need change it to orange
            if (objectByIndex?.accumulatorChar === 5) {
              // We update the accumulator
              initialPositionCharsState = initialPositionCharsState.map((obj) =>
                obj?.initialPositionChar === i
                  ? {
                      ...obj,
                      accumulatorChar: 0,
                      prevLightChar: 'C',
                      currentLightChar: getNextLightChar(objectByIndex.prevLightChar),
                      isUpdated: true,
                    }
                  : obj
              );

              // Green to Orange
              roadArray[i] = 'O';
              //We keep the previous char value
              roadArray[i - 1] = previousChar;
            }
          }

          // We update the road Orange to Red
          if (objectByIndex.currentLightChar === 'O' && !objectByIndex.isUpdated) {
            // We update the accumulator
            initialPositionCharsState = initialPositionCharsState.map((obj) =>
              obj?.initialPositionChar === i
                ? {
                    ...obj,
                    accumulatorChar: 0,
                    prevLightChar: 'O',
                    currentLightChar: getNextLightChar(objectByIndex?.currentLightChar!),
                    isUpdated: true,
                  }
                : obj
            );

            // Orange to Red
            roadArray[i] = getNextLightChar(objectByIndex?.currentLightChar!);

            // We keep the previous char value
            roadArray[i - 1] = previousChar;
          }

          // We update the road Red to Green
          if (
            objectByIndex.currentLightChar === 'R' &&
            !objectByIndex.isUpdated &&
            objectByIndex?.accumulatorChar === 5
          ) {
            // We update the accumulator
            initialPositionCharsState = initialPositionCharsState.map((obj) =>
              obj?.initialPositionChar === i
                ? {
                    ...obj,
                    accumulatorChar: 0,
                    prevLightChar:
                      previousChar === 'C'
                        ? 'R'
                        : getPrevLightChar(objectByIndex?.currentLightChar!),
                    currentLightChar: isCarMoved
                      ? getNextLightChar(objectByIndex?.currentLightChar!)
                      : !isCarMoved && previousChar === 'C'
                      ? 'C'
                      : getNextLightChar(objectByIndex?.currentLightChar!),
                    isUpdated: true,
                  }
                : obj
            );

            roadArray[i] = isCarMoved
              ? getNextLightChar(objectByIndex?.currentLightChar!)
              : !isCarMoved && previousChar === 'C'
              ? 'C'
              : getNextLightChar(objectByIndex?.currentLightChar!);

            roadArray[i - 1] = isCarMoved
              ? previousChar
              : !isCarMoved && previousChar === 'C'
              ? '.'
              : previousChar;
          }
        }
      }
    }

    finalArraySimulation.push(roadArray.join(''));

    // We need to increment the accumulators for initialPositionCharsState
    // in each iteration
    initialPositionCharsState.forEach((charState) => {
      if (
        charState?.currentLightChar === 'G' ||
        charState?.currentLightChar === 'C' ||
        charState?.currentLightChar === 'R' ||
        charState?.currentLightChar === 'O'
      ) {
        if (charState?.currentLightChar !== 'O') charState.accumulatorChar++;

        charState.isUpdated = false;
      }
    });

    --n;
  }

  return finalArraySimulation;
}
