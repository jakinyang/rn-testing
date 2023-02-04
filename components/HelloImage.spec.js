import React from "react";
import { render, screen } from '@testing-library/react-native';
import { HelloImage } from "./HelloImage";

describe('Hello Image', () => {
  const url = "https://images.unsplash.com/photo-1628044582571-1b2615cc451a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"

  it('displays the raccoon image', () => {
    render(<HelloImage url={url} />)
    expect(screen.getByLabelText('raccoon waving')).toBeVisible();
  });
})