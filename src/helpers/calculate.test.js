import { describe, expect, test } from "@jest/globals";
import {
  calculateUserPointsPerMonth,
  calcTotalPoints,
  calcPointsByValue,
} from "./calculate";
const data = require("./../../mocker/db/records");

describe("Is calculateUserPointsPerMonth works fine.)", () => {
  test("Is full records return proper calc.", () => {
    const currentUser = "Tom";
    const toBe = [
      {
        id: 1,
        year: 2023,
        month: 1,
        points: 685,
      },
      {
        id: 2,
        year: 2023,
        month: 2,
        points: 119,
      },
    ];
    expect(calculateUserPointsPerMonth(data, currentUser)).toStrictEqual(toBe);
  });
  test("Is no existing user return empty array", () => {
    const currentUser = "no_exists";
    const toBe = [];
    expect(calculateUserPointsPerMonth(data, currentUser)).toStrictEqual(toBe);
  });
});

describe("Is calcTotalPoints works fine.)", () => {
  test("IS two months return proper number", () => {
    const pointsPerMonthCollection = [
      {
        id: 1,
        year: 2023,
        month: 1,
        points: 685,
      },
      {
        id: 2,
        year: 2023,
        month: 2,
        points: 119,
      },
    ];
    const toBe = 804;
    expect(calcTotalPoints(pointsPerMonthCollection)).toBe(toBe);
  });
  test("Is zero months (empty array) return 0", () => {
    const pointsPerMonthCollection = [];
    const toBe = 0;
    expect(calcTotalPoints(pointsPerMonthCollection)).toBe(toBe);
  });
});

describe("Is calcPointsByValue works fine.)", () => {
  test("IS 130 return 140", () => {
    expect(calcPointsByValue(130)).toBe(140);
  });
  test("Is 50 return 0", () => {
    expect(calcPointsByValue(50)).toBe(0);
  });
});
