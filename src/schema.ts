/* tslint:disable */

export interface Query {
  user: User;
  post: Post;
  search: Post[];
}

export interface User {
  id: string;
  username: string;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface Post {
  id: string;
  name: string;
  comment?: Comment | null;
}

export interface Comment {
  content: string;
}
export interface PostQueryArgs {
  id: string;
}
export interface SearchQueryArgs {
  query: string;
}
