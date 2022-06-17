import { useUser } from '@auth0/nextjs-auth0';

function Header() {
  const { user } = useUser();

  return (
    <header className="block w-full mb-10">
      <h1 className="font-bold text-lg">OLÁ</h1>
      <p className="uppercase text-xs">{user?.name || ''}</p>
    </header>
  );
}

export { Header };
