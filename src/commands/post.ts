import { User, Post, Comment } from "../schema";
import debug from "../debug";

import DataLoader from "dataloader";

var commentLoader = new DataLoader<string, Comment>(async commentIds => {
  debug("the dataloader should be called just once!", commentIds);
  return commentIds.map(id => ({
    content: "This is a comment of the post with id=" + id
  }));
});

export default {
  getUser: async (authorization: AuthToken): Promise<User> => {
    return {
      id: "1",
      fullName: "John Smith",
      username: "JSmith",
      firstName: "John",
      lastName: "Smith"
    };
  },
  getPost: async (id: string): Promise<Post> => {
    return {
      id,
      name: "My first article"
    };
  },
  search: async (query: string): Promise<Post[]> => {
    return [
      {
        id: "id1",
        name: "myPost1"
      },
      {
        id: "id2",
        name: "myPost2"
      },
      {
        id: "id3",
        name: "myPost3"
      }
    ];
  },
  comment: async (commentId: string): Promise<Comment> => {
    return commentLoader.load(commentId);
  }
};
