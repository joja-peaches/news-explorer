export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "working token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Georgia", email: "georgia@rules.com", _id: "fake-id" },
    });
  });
};