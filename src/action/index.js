export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// アクションクリエイター 画面側で使うので、exportする
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});
