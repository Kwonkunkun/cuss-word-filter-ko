import {words as DEFAULT_CUSS_WORDS} from './cuss-word-list.json';

/**
 * 기능
 * 욕을 필터링하는 역할의 class ex) ㅅㅂ -> xx
 */
export class CussWordFilter {
    private readonly cussWords: string[];

    /**
     * @param cussWords 필터링할 텍스트 목록 (default: 기본 욕 필터링 목록)
     */
    constructor(cussWords?: string[]) {
        this.cussWords = cussWords ? cussWords : DEFAULT_CUSS_WORDS;
    }

    public filter(text: string, replaceChar: string = "*"): string {
        return text
            .split(' ')
            .map(word => this.cussWords.includes(word) ? this.getReplaceText(word, replaceChar) : word)
            .join(' ');
    }

    private getReplaceText(text: string, replaceChar: string): string {
        return text.replace(/./g, replaceChar);
    }
}