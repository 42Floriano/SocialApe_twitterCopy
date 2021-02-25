let db = {
  users: [
    {
      userId: "sd45kbsd8374gd",
      email: "user@mail.com",
      handle: "user",
      createdAt: "2020-11-03T00:20:55.685Z",
      imageURL: "image/asdf/asdf.jpeg",
      bio: "blablablabla",
      website: "https://user.com",
      location: "Berlin, DE",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is a scream body",
      createdAt: "2020-11-03T00:20:55.685Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
};

const userDetails = {
  //Redux data

  credentials: [
    {
      userId: "sd45kbsd8374gd",
      email: "user@mail.com",
      handle: "user",
      createdAt: "2020-11-03T00:20:55.685Z",
      imageURL: "image/asdf/asdf.jpeg",
      bio: "blablablabla",
      website: "https://user.com",
      location: "Berlin, DE",
    },
  ],
  likes: [
    {
      userHandle: "user",
      screamId: "acb4nvasd466",
    },
    {
      userHandle: "user",
      screamId: "uvt64562CvGEa",
    },
  ],
};
