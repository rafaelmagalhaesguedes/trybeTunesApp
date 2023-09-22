import { AlbumType } from '../../types';

type AlbumHeaderProps = {
  album: AlbumType | null;
};

function AlbumHeader({ album } : AlbumHeaderProps) {
  return (
    <div className="album-header">
      <div className="wrapper-album">
        <h1 className="album-name" data-testid="album-name">{album?.collectionName}</h1>
        <h2 className="album-artist" data-testid="artist-name">{album?.artistName}</h2>
      </div>
    </div>
  );
}

export default AlbumHeader;
