<h2 align="center">Welcome to cuss-word-filter-ko 👋</h2>
<div align="center">
    <p>한국어 욕설을 바꿔주는 간단한 모듈</p>
</div>

### 🏠 [Homepage](https://github.com/Kwonkunkun/cuss-word-filter-ko)
### 😃 [Npm](https://www.npmjs.com/package/cuss-word-filter-ko)
  
## Installation

```sh
npm i cuss-word-filter-ko
```

## Options
```ts
type CussWordFilterOptions = {
    /**
     * @default "./cuss-word-list.json" 에 있는 단어들
     * @description 필터링할 단어들
     */
    cussWords?: string[];

    /**
     * @default '*'
     * @example '****'
     */
    replacement?: string;

    /**
     * @default false
     * @description default cussWords 와 constructor option 에서 전달된 cussWords 를 합칠지 여부
     */
    mergeDefaultData?: boolean;
}
```

## Usage

```js
const { CussWordFilter } = require("cuss-word-filter-ko");

const filter = new CussWordFilter({});

console.log(filter.filter("ㅅㅂ 놈아")); // ** 놈아
````

or

```ts
import { CussWordFilter } from "cuss-word-filter-ko";

const filter = new CussWordFilter({});
console.log(filter.filter("ㅅㅂ 놈아")); // ** 놈아
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)