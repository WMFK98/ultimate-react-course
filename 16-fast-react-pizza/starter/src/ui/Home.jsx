import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
      <div className="font-bold">
        <h1 className="text-3xl">The best pizza. </h1>
        <p className="text-2xl text-yellow-500">
          Straight out of the oven, straight to you.
        </p>
      </div>
      <CreateUser />
      {/* <div className="w-max space-y-3 text-lg">
        <p>🤑 Welcome! Please start by telling us your name:</p>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border border-orange-200 p-1"
        /> 
      </div> */}
    </div>
  );
}

export default Home;
