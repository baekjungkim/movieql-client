import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const MOIVE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      rating
      description_intro
      language
      genres
      medium_cover_image
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
