import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => {
  return <UserProfile routing="path" path="/protected/User-profile" />;
};

export default UserProfilePage;