import { UserType } from '../../types';
import imagemPadrao from '../../images/user-mock.png';
import {
  SectionProfile,
  UserImageProfile,
  UserDataProfile,
  Label,
  Data,
  UserName,
  UserEmail,
  UserDescription,
  Button,
  ImageUser,
} from './Styles';

interface UserProfileProps {
  user: UserType | null;
}

function UserProfile({ user } : UserProfileProps) {
  return (
    <SectionProfile>
      <UserImageProfile>
        <ImageUser
          src={ user?.image || imagemPadrao }
          alt="Image user"
          data-testid="profile-image"
        />
      </UserImageProfile>
      <UserDataProfile>
        <UserName>
          <Label htmlFor="data">Nome</Label>
          <Data>{user?.name}</Data>
        </UserName>
        <UserEmail>
          <Label htmlFor="data">Email</Label>
          <Data>{user?.email}</Data>
        </UserEmail>
        <UserDescription className="user-description">
          <Label htmlFor="data">Descrição</Label>
          <Data>{user?.description}</Data>
        </UserDescription>
        <Button to="/profile/edit">
          Editar perfil
        </Button>
      </UserDataProfile>
    </SectionProfile>
  );
}

export default UserProfile;
