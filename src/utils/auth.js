export const authorize = () => {
  return new Promise((resolve) => {
    resolve({ token: "working token" });
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    resolve({
      data: { name: "Georgia", email: "georgia@rules.com", _id: "fake-id" },
    });
  });
};