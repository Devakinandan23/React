import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The Tastiest Pizza
        <br />
        <span className="text-yellow-500">
          The taste you crave. The quality you deserve.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}

      <img src="side_view_pizza_with_slices_bell_pepper_pizza_slices_flour_board.png" alt="Delicious pizza" className="mx-auto mt-6" />
    </div>
  );
}

export default Home;
