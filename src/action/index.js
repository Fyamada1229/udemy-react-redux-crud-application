export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLICATION = "MULTIPLICATION";

// アクションクリエイター 画面側で使うので、exportする
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const multiplication = () => ({
  type: "MULTIPLICATION",
});
