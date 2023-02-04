import React from "react";
import { render, screen } from '@testing-library/react-native'
import { HelloText } from "./HelloText";

describe('Hello Text', () => {
  it('displays the string passed as prop', () => {
    render(<HelloText name="Jason" />);
    expect(screen.getByText('Hello, Jason!')).toBeVisible();
  });
})