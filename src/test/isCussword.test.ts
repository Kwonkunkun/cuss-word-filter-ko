import {beforeEach, describe, expect, it} from '@jest/globals';
import {CussWordFilter} from '../cussWordFilter';
import {CUSS_WORD_LIST, GOOD_WORD_LIST} from './mock';

describe('cussWordFilter isCussWord function test', () => {
    let cussWordFilter: CussWordFilter;
    beforeEach(() => {
        cussWordFilter = new CussWordFilter({});
    });

    it('욕들을 true 로 잘 뱉어내는가?', () => {
        CUSS_WORD_LIST.forEach((cussWord) => {
            const isCussWord = cussWordFilter.isCussWord(cussWord);
            expect(isCussWord).toBeTruthy();
        });
    });

    it('욕이 아닌 단어는 false 로 잘 뱉어내는가?', () => {
        GOOD_WORD_LIST.forEach((goodWord) => {
            const isCussWord = cussWordFilter.isCussWord(goodWord);
            expect(isCussWord).toBeFalsy();
        });
    });
});