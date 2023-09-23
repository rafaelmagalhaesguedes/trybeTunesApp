import { useNavigate } from 'react-router-dom';
import { AlbumType } from '../../types';
import {
  Card,
  ListResults,
  SectionAlbumCard,
  Results,
  AlbumLink,
  AlbumCover,
  AlbumName,
  ArtistName,
} from './Styles';

type AlbumCardProps = {
  searchResult: AlbumType[],
};

function AlbumCard({ searchResult } : AlbumCardProps) {
  const navigate = useNavigate();
  return (
    <SectionAlbumCard>
      <ListResults>
        {searchResult.map((album) => (
          <Card key={ album.collectionId }>
            <Results>
              <AlbumLink
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
                onClick={ (e) => {
                  e.preventDefault();
                  navigate(`/album/${album.collectionId}`);
                } }
              >
                <AlbumCover src={ album.artworkUrl100 } alt="cover album" />
                <AlbumName>{album.collectionName}</AlbumName>
                <ArtistName>{album.artistName}</ArtistName>
              </AlbumLink>
            </Results>
          </Card>
        ))}
      </ListResults>
    </SectionAlbumCard>
  );
}

export default AlbumCard;
