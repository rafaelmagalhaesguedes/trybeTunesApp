import MusicCard from '../../MusicCard/MusicCard';
import { AlbumType, SongType } from '../../../types';
import {
  AlbumArtistMobile,
  AlbumCover,
  AlbumCoverImage,
  AlbumMusic,
  AlbumNameMobile,
  SectionDetails,
  WrapperAlbumMobile,
  Music,
} from './StylesDetails';

interface AlbumDetailsProps {
  album: AlbumType | null;
  songs: SongType[];
  favoriteSongs: SongType[];
}

function AlbumDetails({ album, songs, favoriteSongs } : AlbumDetailsProps) {
  return (
    <SectionDetails>
      <AlbumCover>
        <AlbumCoverImage src={ album?.artworkUrl100 } alt="capa álbum" />
      </AlbumCover>
      <WrapperAlbumMobile>
        <AlbumNameMobile data-testid="album-name">
          {album?.collectionName}
        </AlbumNameMobile>
        <AlbumArtistMobile data-testid="artist-name">
          {album?.artistName}
        </AlbumArtistMobile>
      </WrapperAlbumMobile>
      <AlbumMusic>
        {songs.map((song) => (
          <Music key={ song.trackId }>
            <MusicCard
              dataSong={ song }
              favoriteSong={ favoriteSongs.some(
                (favoriteSong) => favoriteSong.trackId === song.trackId,
              ) }
              removeFavoriteSong={ () => {} }
            />
          </Music>
        ))}
      </AlbumMusic>
    </SectionDetails>
  );
}

export default AlbumDetails;
