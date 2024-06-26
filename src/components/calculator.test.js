import { handleClick, clear, backspace, calculate } from './Calculator';
import { describe, it, expect } from 'vitest';

describe('Calculator logic', () => {
  it('should handle addition correctly', () => {
    let result = "1+1";
    result = calculate(result);
    expect(result).toBe("2");
  });

  it('should handle subtraction correctly', () => {
    let result = "2-1";
    result = calculate(result);
    expect(result).toBe("1");
  });

  it('should handle multiplication correctly', () => {
    let result = "2*3";
    result = calculate(result);
    expect(result).toBe("6");
  });

  it('should handle division correctly', () => {
    let result = "6/2";
    result = calculate(result);
    expect(result).toBe("3");
  });

  it('should clear the result', () => {
    let result = "12";
    result = clear();
    expect(result).toBe("");
  });

  it('should handle backspace correctly', () => {
    let result = "123";
    result = backspace(result);
    expect(result).toBe("12");
  });

  it('should return error for invalid calculation (2++2)', () => {
    let result = "2++2";
    result = calculate(result);
    expect(result).toBe("Error");
  });
});

