use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_name = "clearTimeout")]
    fn clear_timeout(handle: i32);
}

// uncomment out to fix the bug
// #[wasm_bindgen(start)]
// pub fn start() {
//
// }

#[wasm_bindgen]
pub fn use_clear_timeout(id: i32) -> i32 {
    // doesn't matter that this is all madeup
    clear_timeout(id);

    id
}
