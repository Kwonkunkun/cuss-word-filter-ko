<h2 align="center">Welcome to cuss-word-filter-ko π</h2>
<div align="center">
    <p>νκ΅­μ΄ μμ€μ λ°κΏμ£Όλ κ°λ¨ν λͺ¨λ</p>
</div>

### π  [Homepage](https://github.com/Kwonkunkun/cuss-word-filter-ko)
### π [Npm](https://www.npmjs.com/package/cuss-word-filter-ko)
  
## Installation

```sh
npm i cuss-word-filter-ko
```

## Options
```ts
type CussWordFilterOptions = {
    /**
     * @default "./cuss-word-list.json" μ μλ λ¨μ΄λ€
     * @description νν°λ§ν  λ¨μ΄λ€
     */
    cussWords?: string[];

    /**
     * @default '*'
     * @example '****'
     */
    replacement?: string;

    /**
     * @default false
     * @description default cussWords μ constructor option μμ μ λ¬λ cussWords λ₯Ό ν©μΉ μ§ μ¬λΆ
     */
    mergeDefaultData?: boolean;

    /**
     * @default []
     * @description νν°λ§μ μ μΈν  λ¨μ΄λ€, isCussWord, filter method μμ μ μ©λ¨
     */
    whiteList?: string[];
}
```

## Usage

```js
const { CussWordFilter } = require("cuss-word-filter-ko");

const filter = new CussWordFilter({});

console.log(filter.filter("γγ λμ")); // ** λμ
````

or

```ts
import { CussWordFilter } from "cuss-word-filter-ko";

const filter = new CussWordFilter({});
console.log(filter.filter("γγ λμ")); // ** λμ
```

## Test Coverage

<img width="666" alt="image" src="https://user-images.githubusercontent.com/59603575/209641360-d737fc6f-0d3a-4560-ae4d-04c0a0a6533d.png">

## Contributing

Contributions, issues and feature requests are welcome!

## License

MIT

---