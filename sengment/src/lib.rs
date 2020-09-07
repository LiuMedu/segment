use wasm_bindgen::prelude::*;
use jieba_rs::Jieba;

#[wasm_bindgen]
pub fn cut(sent: &str) -> String {
  let jieba = Jieba::new();
  let words = jieba.cut(sent, false);
  return serde_json::to_string(&words).unwrap();
}
