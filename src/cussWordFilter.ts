import {words as DEFAULT_CUSS_WORDS} from './cuss-word-list.json';

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

    /**
     * @default []
     * @description 필터링을 제외할 단어들
     */
    whiteList?: string[];
}

/**
 * @description 욕을 필터링하는 역할의 class ex) ㅅㅂ -> **
 * @example
 * import {CussWordFilter} from 'cuss-word-filter';
 * const cussWordFilter = new CussWordFilter();
 * cussWordFilter.filter('ㅅㅂ'); // '**'
 * cussWordFilter.filter('ㅅ1바'); // '***'
 * cussWordFilter.filter('ㅅ1ㅂ 집에 가고싶다.'); // '*** 집에 가고싶다.'
 */
export class CussWordFilter {
    private readonly cussWords: string[];
    private readonly replacement: string;
    private readonly whiteList: string[];

    /**
     * @default 기본 욕 필터링 목록 (./cuss-word-list.json)
     * @param option CussWordFilterOptions
     * @description CussWordFilter 를 생성하는 생성자
     */
    constructor(option: CussWordFilterOptions) {
        const {cussWords = DEFAULT_CUSS_WORDS, replacement = '*', mergeDefaultData = false, whiteList = []} = option;
        this.cussWords = mergeDefaultData ? this.getNotDuplicatedWords([...DEFAULT_CUSS_WORDS, ...cussWords]) : cussWords;
        this.replacement = replacement;
        this.whiteList = whiteList;
    }

    /**
     * @param text 필터링할 텍스트
     * @description 욕을 필터링하는 함수
     */
    public filter(text: string): string {
        return text
            .split(' ')
            .map(word =>{
                // whiteList 에 포함된 텍스트인 경우
                if(this.isWhiteList(word)) {
                    return word;
                }

                return this.cussWords.includes(word) ? this.getReplaceText(word, this.replacement) : word
            })
            .join(' ');
    }

    /**
     * @param text
     * @description cussWords 에 포함된 문장인지 여부를 반환하는 함수, whiteList 에 포함된 텍스트인 경우 false 를 반환
     */
    public isCussWord(text: string): boolean {
        for(const cussWord of this.cussWords) {
            if(text.includes(cussWord) && !this.isWhiteList(cussWord)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @private
     * @param text 필터링할 텍스트
     * @param replacement 필터링된 텍스트를 대체할 문자
     * @description 필터링된 텍스트를 대체할 문자열을 생성하는 함수
     */
    private getReplaceText(text: string, replacement: string): string {
        return text.replace(/./g, replacement);
    }

    /**
     * @param words 중복을 제거할 단어 목록
     * @description 중복을 제거한 단어 목록을 반환하는 함수
     */
    private getNotDuplicatedWords(words: string[]) {
        const result: string[] = [];
        words.forEach((word) => {
            if (!result.includes(word)) {
                result.push(word);
            }
        });
        return result;
    }

    /**
     * @private
     * @param text 확인할 텍스트
     * @description whiteList 에 포함된 텍스트인지 여부를 반환하는 함수
     */
    private isWhiteList(text: string): boolean {
        return this.whiteList.includes(text);
    }
}