import { render, fireEvent ,screen } from '@testing-library/react';
import Snowman from './Snowman';


it ("render the snowman component", () => {
  render(<Snowman maxWrong={4}/>)
})

it ("render the snowman component", () => {
  const {container} = render(< Snowman />);
  expect(container).toMatchSnapshot();
})

it("show result after six wrong guesses", () => {
  const snowMan = render(<Snowman maxWrong={4}/>)
  const { container } = snowMan
  const letterClickQ = container.querySelector('[id="q"]')
  fireEvent.click(letterClickQ)
  const letterClickW = container.querySelector('[id="w"]')
  fireEvent.click(letterClickW)
  const letterClickR = container.querySelector('[id="r"]')
  fireEvent.click(letterClickR)
  const letterClickT = container.querySelector('[id="t"]')
  fireEvent.click(letterClickT)
  
  expect(
    snowMan.getByText("You lose the word was apple")
  ).toBeInTheDocument();
})



