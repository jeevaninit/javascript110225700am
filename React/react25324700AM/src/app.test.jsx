import { render,screen } from '@testing-library/react'
import {expect, test } from 'vitest'
import { describe, it} from 'vitest'
import Geeting from './Geeting'
import userEvent from '@testing-library/user-event';
describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  })

  test('Render greeting with Name',()=>{
    render(<Geeting name='Jeevan' />);
    const greetingelement=screen.getByText(/Hello Mr. Jeevan/i);
    expect (greetingelement).toBeInTheDocument();
  }); 

  test('Button Click', async()=>{
    render(<button onClick={()=>alert('click')}>Click Me</button>);
    const btn=screen.getByText('Click Me');
    await userEvent.click(btn);
  })



});