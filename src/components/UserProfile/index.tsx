import type { User } from '../../App';
import { ProfileContainer, ProfileContent, ProfileError, ProfileText } from './styles';

type UserProfileProps = User & { error?: string };

function UserProfile({ name, avatar_url, bio, error }: UserProfileProps) {
  if (!name && !avatar_url && !bio && !error) {
    return null;
  }
  return (
    <>
      <ProfileContainer>
        {error ? (
          <ProfileContent>
            <ProfileError>
              <h3>{error}</h3>
            </ProfileError>
          </ProfileContent>
        ) : (
          <ProfileContent>
            <img src={avatar_url} alt={`Foto do ${name}`} />
            <ProfileText>
              <h3>{name}</h3>
              <p>{bio}</p>
            </ProfileText>
          </ProfileContent>
        )}
      </ProfileContainer>
    </>
  )
}

export default UserProfile
