import {beforeEach, describe, expect, it} from '@jest/globals';
import {CussWordFilter} from '../cussWordFilter';
import {CUSS_WORD_LIST, EXPECTED_FILTERED_CUSS_WORD_LIST, GOOD_WORD_LIST} from './mock';

describe('cussWordFilter filter function test', () => {
    let cussWordFilter: CussWordFilter;
    beforeEach(() => {
        cussWordFilter = new CussWordFilter({});
    });

    it('욕를 제대로 필터링 하는가?', () => {
        CUSS_WORD_LIST.forEach((cussWord, index) => {
            expect(cussWordFilter.filter(cussWord)).toBe(EXPECTED_FILTERED_CUSS_WORD_LIST[index]);
        });
    });

    it("욕이 아닌 단어는 필터링 되지 않는가?", () => {
        GOOD_WORD_LIST.forEach((goodWord) => {
            expect(cussWordFilter.filter(goodWord)).toBe(goodWord);
        });
    });
});