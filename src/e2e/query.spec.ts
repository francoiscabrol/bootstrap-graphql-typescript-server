import { GraphQLClient, request } from "graphql-request";
import gql from "graphql-tag";
import config from "../config";

test("simple query get post", async () => {
  const client = new GraphQLClient(config.url);

  const query = gql`
    {
      post(id: "uuid") {
        id
        name
      }
    }
  `;
  const res: any = await client.request(query);
  expect(res.post.name).toEqual("My first article");
});

test("simple query get post with comment (sub-resolver)", async () => {
  const client = new GraphQLClient(config.url);

  const query = gql`
    {
      post(id: "postId") {
        name
        comment {
          content
        }
      }
    }
  `;
  const res: any = await client.request(query);
  expect(res.post.comment.content).toEqual(
    "This is a comment of the post with id=postId"
  );
});

test("simple query with auth header: get user", async () => {
  const token = "generated Token";

  const client = new GraphQLClient(config.url, {
    headers: {
      Authorization: token
    }
  });

  const query = gql`
    {
      user {
        id
        username
      }
    }
  `;
  const res: any = await client.request(query);
  expect(typeof res.user.id).toEqual("string");
  expect(typeof res.user.username).toEqual("string");
});

test("do a simple batch query", async () => {
  const token = "generated token";

  const client = new GraphQLClient(config.url, {
    headers: {
      Authorization: token
    }
  });

  const query = gql`
    {
      user {
        id
        username
      }
      post(id: "uuid") {
        name
        comment {
          content
        }
      }
    }
  `;
  const res: any = await client.request(query);
  expect(res.post.name).toEqual("My first article");
  expect(typeof res.user.username).toEqual("string");
});
