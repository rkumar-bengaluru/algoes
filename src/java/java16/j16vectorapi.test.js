import VectorApi from "./j16vectorapi";
import React from 'react';
import renderer from 'react-test-renderer';

document.createRange = () => {
    const range = new Range();
  
    range.getBoundingClientRect = jest.fn();
  
    range.getClientRects = () => {
      return {
        item: () => null,
        length: 0,
        [Symbol.iterator]: jest.fn()
      };
    };
  
    return range;
  }
  
test('VectorApi', () => {
    const component = renderer.create(
        <VectorApi />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
