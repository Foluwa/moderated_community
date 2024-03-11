import Sidebar from '@components/Sidebar';
import Rooms from "@app/rooms/index"

const User = async () => {
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
