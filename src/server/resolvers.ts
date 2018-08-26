import {
  Query,
  User,
  Post,
  PostQueryArgs,
  Comment,
  SearchQueryArgs
} from "../schema";
import Context from "./context";

const resolvers = {
  Query: {
    user: (_, args, context: Context): Promise<User> => {
      if (!context.authorization)
        throw new Error("Authorization header required.");
      return context.commands.post.getUser(context.authorization);
    },
    post: (_, args: PostQueryArgs, context: Context): Promise<Post> => {
      return context.commands.post.getPost(args.id);
    },
    search: (_, args: SearchQueryArgs, context: Context): Promise<Post[]> => {
      return context.commands.post.search(args.query);
    }
  },
  Post: {
    comment: async (parent: Post, args, context: Context): Promise<Comment> => {
      return context.commands.post.comment(parent.id);
    }
  }
};

export default resolvers;
