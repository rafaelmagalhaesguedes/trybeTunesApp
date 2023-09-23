import { UserType } from '../../types';
import imagemPadrao from '../../images/user-mock.png';

type ProfileEditImageProps = {
  userData: UserType;
};

function ProfileEditImage({ userData } : ProfileEditImageProps) {
  return (

    <div className="image-user-profile">
      <img
        className="image-user-edit-profile"
        src={ userData.image || imagemPadrao }
        alt="ImageUserProfile"
      />
    </div>
  );
}

export default ProfileEditImage;
