export interface Album {
  id?: string;
  collectionId?: string;
  cover?: string;
  judul?: string;
  album?: string;
  expand?: {
    artist?: {
      artist: string;
    };
  };
}
