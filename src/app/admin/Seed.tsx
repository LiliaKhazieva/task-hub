import { seedAuthUsers } from "@/seeder-users";

const Seed = () => {
  return (
    <div>
      <button onClick={seedAuthUsers}>наполнить юзеров</button>
    </div>
  );
};

export default Seed;
