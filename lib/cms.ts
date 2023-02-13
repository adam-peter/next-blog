const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
};

export const getAllPosts = async () => {
  //await delay(100); - to simulate delay of content fetch
  return new Array(10).fill(1).map((_, i) => {
    return {
      postId: i,
      title: `This is post ${i}`,
      body: "blog post content"
    }
  })
}