import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/navbar';
import { MemoryRouter } from 'react-router-dom';

test('Navbar renders correctly', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const iconBuy = screen.getByAltText('img buy');
  const linkSignIn = screen.getByRole("link", { name: "ورود" });
  const linkSignUp = screen.getByRole("link", { name: "ثبت نام" });
  expect(iconBuy).toBeInTheDocument();
  expect(linkSignIn).toBeInTheDocument();
  expect(linkSignUp).toBeInTheDocument();
});