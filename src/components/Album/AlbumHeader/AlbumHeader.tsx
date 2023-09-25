import { AlbumType } from '../../../types';
import {
  AlbumHeaderContainer,
  WrapperAlbum,
  AlbumName,
  AlbumArtist,
} from './StylesHeader';

type AlbumHeaderProps = {
  album: AlbumType | null;
};

function AlbumHeader({ album } : AlbumHeaderProps) {
  return (
    <AlbumHeaderContainer>
      <WrapperAlbum>
        <AlbumName>{album?.collectionName}</AlbumName>
        <AlbumArtist>{album?.artistName}</AlbumArtist>
      </WrapperAlbum>
    </AlbumHeaderContainer>
  );
}

export default AlbumHeader;
