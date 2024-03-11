import { auth, currentUser } from '@clerk/nextjs';
import Sidebar from '@components/Sidebar';
import Rooms from "@app/rooms/index"

const User = async () => {
  const { userId } = auth();

  const user = await currentUser();
  // const users = [
  //   {
  //     id: 1,
  //     name: `${user.firstName} ${user.lastName}`,
  //     email: user.emailAddresses[0].emailAddress,
  //     role: 'User',
  //     image: user.imageUrl,
  //   },
  // ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="overflow-y-auto w-full">
        <Rooms />
      </div>
    </div>
  );
};

export default User;
