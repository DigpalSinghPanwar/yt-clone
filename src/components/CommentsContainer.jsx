import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Digpal Singh",
    text: "this is a new comment, do like it.",
    replies: [],
  },
  {
    name: "Digpal Singh",
    text: "this is a new comment, do like it.",
    replies: [
      {
        name: "Digpal Singh",
        text: "this is a new comment, do like it.",
        replies: [
          {
            name: "Digpal Singh",
            text: "this is a new comment, do like it.",
            replies: [
              {
                name: "Digpal Singh",
                text: "this is a new comment, do like it.",
                replies: [
                  {
                    name: "Digpal Singh",
                    text: "this is a new comment, do like it.",
                    replies: [
                      {
                        name: "Digpal Singh",
                        text: "this is a new comment, do like it.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Digpal Singh",
                text: "this is a new comment, do like it.",
                replies: [],
              },
            ],
          },
          {
            name: "Digpal Singh",
            text: "this is a new comment, do like it.",
            replies: [],
          },
        ],
      },
      {
        name: "Digpal Singh",
        text: "this is a new comment, do like it.",
        replies: [
          {
            name: "Digpal Singh",
            text: "this is a new comment, do like it.",
            replies: [
              {
                name: "Digpal Singh",
                text: "this is a new comment, do like it.",
                replies: [],
              },
            ],
          },
          {
            name: "Digpal Singh",
            text: "this is a new comment, do like it.",
            replies: [],
          },
        ],
      },
      {
        name: "Digpal Singh",
        text: "this is a new comment, do like it.",
        replies: [],
      },
    ],
  },
  {
    name: "Digpal Singh",
    text: "this is a new comment, do like it.",
    replies: [],
  },
  {
    name: "Digpal Singh",
    text: "this is a new comment, do like it.",
    replies: [],
  },
  {
    name: "Digpal Singh",
    text: "this is a new comment, do like it.",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
