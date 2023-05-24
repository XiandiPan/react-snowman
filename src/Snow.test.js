import { render, screen } from '@testing-library/react';
import Snowman from './Snowman';


it ("render the snowman component", () => {
  render(<Snowman />)
})

it ("render the snowman component", () => {
  const {container} = render(< Snowman />);
  expect(container).toMatchSnapshot();
})

it("hide the button after six wrong guesses ", () => {
  const {container} = render(< Snowman />);

  expect(
    container.querySelector('.letter-btn')
  ).toBeInTheDocument();
})



